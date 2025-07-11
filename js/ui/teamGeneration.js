// Team generation and AI logic

import { characters } from '../data/characters.js';
import { findMetaTeamsFor, findSynergyCoresFor } from '../data/metaData.js';
import { API_CONFIG, budgetMap } from '../core/config.js';
import { 
    selectedCharacters, 
    numTeamsToGenerate, 
    absoluteMetaMode, 
    bigBrainMode, 
    insightMode, 
    reasoningLevelValue, 
    blacklistedCharacters, 
    selectedAfflatusRestrictions,
    currentAudio,
    setTeamsGenerated,
    setCurrentAudio
} from '../core/state.js';
import { 
    loadingSpinner, 
    resultsContainer, 
    teamResultsWrapper, 
    actionButtonsContainer 
} from '../core/domElements.js';
import { renderCharacterCard } from './characterCard.js';
import { showNotification } from '../utils/notifications.js';

// Update the AI prompt generation logic to enforce role constraints
export async function generateTeam() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        setCurrentAudio(null);
    }
    if (selectedCharacters.length === 0) return;

    const generateBtn = document.getElementById('generate-team-btn');
    if (generateBtn) generateBtn.disabled = true;
    
    loadingSpinner.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    teamResultsWrapper.innerHTML = '';
    actionButtonsContainer.innerHTML = '';
    setTeamsGenerated(false); // Reset at start of generation
    
    loadingSpinner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Apply experimental features filtering
    let availableCharacters = [...characters];
    let usingExperimentalFeatures = false;
    
    // Filter out blacklisted characters before anything else.
    if (blacklistedCharacters.length > 0) {
        availableCharacters = availableCharacters.filter(char => !blacklistedCharacters.includes(char.name));
        console.log('🚫 Blacklisted characters removed from available pool:', blacklistedCharacters);
        showNotification(`🚫 Excluding ${blacklistedCharacters.length} blacklisted character(s).`, 'info');
    }
    
    if (selectedAfflatusRestrictions.length > 0) {
        availableCharacters = applyAfflatusRestrictions(availableCharacters);
        usingExperimentalFeatures = true;
        console.log('🧪 Experimental: Filtered to afflatus restrictions:', selectedAfflatusRestrictions);
        showNotification(`🧪 Generating with experimental afflatus restrictions: ${selectedAfflatusRestrictions.join(', ')}`, 'warning');
    }

    const availableCharactersList = availableCharacters.map(char => char.name).join(', ');

    // Get details
    const selectedCharacterDetails = selectedCharacters.map(name => {
        const char = characters.find(c => c.name === name);
        if (char && char.afflatus && char.dmgType && char.rank && char.role) {
            return `${char.name} (${char.role}, ${char.dmgType} DMG, ${char.afflatus} Afflatus, Rank ${char.rank})`;
        } else if (char) {
            return `${char.name} (details not available)`;
        }
        return name;
    }).join(', ');

    let metaContext = '';
    if (absoluteMetaMode) {
        console.log('🔥 Absolute Meta Mode activated - Using real CN meta data');
        showNotification('🔥 Absolute Meta Mode: Using verified CN meta data from Prydwen.gg', 'success');
        const metaTeams = findMetaTeamsFor(selectedCharacters);
        console.log('📊 Found meta teams:', metaTeams);

        if (metaTeams.length > 0) {
            console.log('✅ Using verified meta team data');
            showNotification(`✅ Found ${metaTeams.length} verified meta team(s) for your selection!`, 'success');
            metaContext = `
VERIFIED META TEAMS CONTAINING YOUR CHARACTERS (from Prydwen.gg May 2025):
${metaTeams.slice(0, 3).map(team => 
    `**${team.name}** (${team.tier} tier): ${team.characters.join(', ')}
- Synergy: ${team.niches.join(', ')}
- Analysis: ${team.description}`
).join('\n\n')}

TIER RANKINGS FOR YOUR SELECTED CHARACTERS:
${selectedCharacters.map(char => {
    for (const [tier, characters] of Object.entries(metaTeamDatabase?.tierList || {})) {
        if (characters.some(metaChar => 
            char.toLowerCase().includes(metaChar.toLowerCase()) || 
            metaChar.toLowerCase().includes(char.toLowerCase()) ||
            metaChar.toLowerCase() === char.toLowerCase()
        )) {
            return `${char}: ${tier} tier`;
        }
    }
    return `${char}: Not in current meta rankings`;
}).join('\n')}`;
        } else {
            console.log('⚠️ No exact meta teams found, using tier data');
            showNotification('⚠️ No exact meta teams found, using tier rankings from CN meta', 'warning');
            metaContext = `
No exact meta teams found for your selection, but will recommend teams based on current tier rankings:
${selectedCharacters.map(char => {
    for (const [tier, characters] of Object.entries(metaTeamDatabase?.tierList || {})) {
        if (characters.some(metaChar => 
            char.toLowerCase().includes(metaChar.toLowerCase()) || 
            metaChar.toLowerCase().includes(char.toLowerCase()) ||
            metaChar.toLowerCase() === char.toLowerCase()
        )) {
            return `${char}: ${tier} tier`;
        }
    }
    return `${char}: Not in current meta rankings`;
}).join('\n')}`;
        }
    } else {
        console.log('🔧 Using general synergy mode');
        showNotification('🔧 Synergy Mode: Building teams based on general character synergies', 'info');
        const synergyCores = findSynergyCoresFor(selectedCharacters);
        if (synergyCores.length > 0) {
            console.log('🤝 Found synergy cores:', synergyCores);
            showNotification(`🤝 Found ${synergyCores.length} synergy core(s) for your selection!`, 'info');
            metaContext = `\nINSPIRATIONAL SYNERGY CORES FOR YOUR CHARACTERS:\n${synergyCores.map(core =>
                `**${core.name}** (${core.characters.join(' + ')}):\n- Synergy: ${core.description}\n- Recommended Partners: ${core.bestWith}`
            ).join('\n\n')}`;
        }
    }

    const prompt = buildPrompt(selectedCharacterDetails, availableCharactersList, metaContext);

    try {
        const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };

        if (bigBrainMode) {
            payload.generationConfig = {
                thinkingConfig: {
                    thinkingBudget: budgetMap[reasoningLevelValue]
                }
            };
        }

        if (insightMode) {
            payload.tools = [{ "googleSearch": {} }];
        }

        const modelVersion = bigBrainMode ? API_CONFIG.MODELS.BIG_BRAIN : API_CONFIG.MODELS.STANDARD;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelVersion}:generateContent?key=${API_CONFIG.GEMINI_API_KEY}`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);
        const result = await response.json();

        if (!response.ok) {
            console.error("API Error Response:", result);
            const errorDetails = result.error?.message || `API call failed with status: ${response.status}`;
            throw new Error(errorDetails);
        }

        if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0]) {
            const rawText = result.candidates[0].content.parts[0].text;
            parseAndDisplayResults(rawText);
            setTeamsGenerated(true); // Mark that teams have been successfully generated
        } else {
            teamResultsWrapper.innerHTML = "<p style='color: var(--accent-gold); text-align: center;'>Sorry, the AI response was empty. Please try again.</p>";
        }
    } catch (error) {
        console.error("Error generating team:", error);
        teamResultsWrapper.innerHTML = `<p style='color: var(--accent-gold); text-align: center;'>An error occurred: ${error.message}. Please check the console for more details.</p>`;
    } finally {
        loadingSpinner.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        resultsContainer.classList.add('fade-in');
        if (generateBtn) generateBtn.disabled = false;
        
        // Smooth scroll
        setTimeout(() => {
            resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

function buildPrompt(selectedCharacterDetails, availableCharactersList, metaContext) {
    return `
        I am building a team in the game Reverse: 1999. My core characters are: ${selectedCharacterDetails}.
        Based on the current meta and what Chinese (CN) players are using in high-level content, please suggest ${numTeamsToGenerate} distinct, complete 4-person team compositions that are proven effective in the CN meta.
          ${absoluteMetaMode ? `
        ABSOLUTE META MODE - REAL CN META DATA (Prydwen.gg May 2025):
        ${metaContext}
        
        INSTRUCTIONS: You must build teams based on the VERIFIED META DATA ABOVE. Use the actual team compositions and synergies shown in the meta analysis. Do not ignore this data - it represents real CN server competitive usage with proven win rates.
        
        KEY META CORES TO REFERENCE:
        - Voyager + Kiperina (Inspiration/Crit) → Best with Barcarola + Aleph
        - Nautika + Semmelweis (HP Loss/Bloodtithe) → Best with Flutterpage + Fatutu  
        - Lucy + Ulrich (Dynamo) → Best with Mercuria + Ezra Theodore
        - Recoleta + Lopera (Ultimate) → Best with Melania + Fatutu
        - Flutterpage + Fatutu (FUA Support) → Best for supporting FUA carries
        ` : `
        SYNERGY MODE: Build teams around my selected characters, considering their roles, damage types, and synergies. Use the provided INSPIRATIONAL SYNERGY CORES as a starting point, but feel free to create other diverse and effective teams. Prioritize variety and explain your choices. Avoid over-reliance on common staples like Tooth Fairy unless they fit the synergy perfectly.
        ${metaContext}
        `}
        ${(insightMode && absoluteMetaMode) ? `
        INSIGHT-ENHANCED META MODE: Your insight capabilities are active. You MUST use them to search for and validate the LATEST CN SERVER META information. Cross-reference the provided data with your search results to find the most up-to-date, cutting-edge team compositions. Prioritize teams that have emerged or risen in prominence after May 2025.
        ` : insightMode ? `
        INSIGHT MODE: You have been granted enhanced insight capabilities. Use this to perform a deeper analysis of character synergies, team compositions, and strategic viability. Provide nuanced and detailed explanations for your choices, going beyond surface-level meta picks.
        ` : ''}
          AVAILABLE 6-STAR CHARACTERS:
        The pool of characters you can use for building teams is STRICTLY LIMITED to the following list. Do not use any character not on this list.
        ${availableCharactersList}
        
        ${blacklistedCharacters.length > 0 ? `
        ABSOLUTE EXCLUSION RULE:
        The following characters are BLACKLISTED and MUST BE EXCLUDED from ALL team suggestions, no matter what. If a common meta team includes one of these characters, you must find a suitable replacement from the list of available characters. DO NOT SUGGEST A TEAM WITH THESE CHARACTERS.
        Blacklisted: ${blacklistedCharacters.join(', ')}
        ` : ''}

          CRITICAL REQUIREMENTS:
        - Each team MUST have exactly 4 characters
        - You can ONLY use characters from the available list above - no other characters exist
        - All characters must be exactly as spelled in the available list
        - MUST include ALL of my selected characters: ${selectedCharacters.join(', ')}
        - Complete each team by adding ${4 - selectedCharacters.length} more characters from the available list
        - Generate exactly ${numTeamsToGenerate} team${numTeamsToGenerate !== 1 ? 's' : ''} as requested
        Focus on:
        - CURRENT CN server meta data from 2024-2025 (not outdated information)
        - Actual documented team compositions with proven win rates
        - Specific character synergies used in CN competitive play and high-level content
        - Real usage statistics and tier list data from CN server
        - Teams that have been successful in recent CN meta tournaments and competitive events
        - Character combinations that CN players actually use, not theoretical synergies
        - Balanced team composition with proper roles: DPS (main damage), Sub DPS (secondary damage), Support (buffs/debuffs/healing), Survival (sustain/protection)
        
        IMPORTANT: STRICT ROLE ENFORCEMENT:
        - DPS characters must only be assigned to the DPS role.
        - Support characters must only be assigned to the Support role.
        - Sub DPS characters must only be assigned to the Sub DPS role.
        - Survival characters must only be assigned to the Survival role.
        
        For each composition, you MUST follow this structure exactly:
        
        --- Team Start ---
        Final Team: Character A, Character B, Character C, Character D
        
        ## Character Roles
        ... (your analysis here)
        
        ## Team Synergy and Strategy
        ... (your analysis here focusing on why this works in CN meta)
        
        ## Flex/Alternative Options
        ... (your text analysis here with meta alternatives)
        After your text analysis for alternatives, add machine-readable lines for each substitute like this:
        Substitute: [Substitute Name] for [Original Character Name]
        Substitute: [Another Substitute] for [Another Original]
        --- Team End ---

        Separate each complete team composition with the "--- Team Start ---" and "--- Team End ---" delimiters.
        Remember: Each team must have EXACTLY 4 characters from the available list, with exact spelling.
    `;
}

function parseAndDisplayResults(rawText) {
    const teams = rawText.split('--- Team Start ---').slice(1);
    let teamsDisplayed = 0;

    if (teams.length === 0) {
         teamResultsWrapper.innerHTML = "<p style='color: var(--accent-gold); text-align: center;'>Could not parse the AI response. No teams found.</p>";
         return;
    }

    teams.forEach((teamText, index) => {
        const teamData = teamText.split('--- Team End ---')[0];
        const lines = teamData.split('\n');
        const teamLine = lines.find(line => line.toLowerCase().startsWith('final team:'));
        
        if (!teamLine) return;        
        const teamNames = teamLine.substring(teamLine.indexOf(':') + 1).split(',').map(name => name.trim());
        
        // Client-side check to enforce blacklist. If a team contains a blacklisted character, skip it.
        const hasBlacklistedChar = teamNames.some(name => blacklistedCharacters.includes(name));
        if (hasBlacklistedChar) {
            console.warn(`AI suggested a team with a blacklisted character. Filtering out team: ${teamNames.join(', ')}`);
            return;
        }
        
        // Validate
        const validCharacters = teamNames.filter(name => 
            characters.some(char => char.name.toLowerCase() === name.toLowerCase())
        );
        
        // Ensure team has exactly 4 valid characters
        if (validCharacters.length !== 4) {
            console.warn(`Team ${index + 1} does not have exactly 4 valid characters. Found: ${validCharacters.length} valid out of ${teamNames.length} total`);
            console.warn(`Invalid characters:`, teamNames.filter(name => 
                !characters.some(char => char.name.toLowerCase() === name.toLowerCase())
            ));
            return;
        }
        
        // Find substitutes
        const substitutes = [];
        const substituteRegex = /Substitute:\s*(.*?)\s*for\s*(.*)/i;
        lines.forEach(line => {
            const match = line.match(substituteRegex);
            if (match) {
                const subName = match[1].trim();
                const originalName = match[2].trim();
                // Only add substitute if the character exists in our database
                if (characters.some(char => char.name.toLowerCase() === subName.toLowerCase())) {
                    substitutes.push({ sub: subName, original: originalName });
                } else {
                    console.warn(`Substitute character "${subName}" not found in database`);
                }
            }
        });

        const analysisText = lines.filter(line => !line.toLowerCase().startsWith('final team:') && !line.match(substituteRegex)).join('\n');

        const teamContainer = document.createElement('div');
        teamContainer.className = 'team-container fade-in';
        teamContainer.style.animationDelay = `${index * 0.2}s`;

        let htmlContent = analysisText
            .replace(/### (.*)/g, '<h3 style="color: var(--accent-amber); font-size: 1.25rem; font-weight: 600; margin: 1.5rem 0 0.75rem 0;">$1</h3>')
            .replace(/## (.*)/g, '<h2 style="color: var(--accent-gold); font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem 0;">$1</h2>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong style="color: var(--accent-amber);">$1</strong>')
            .replace(/^\* (.*)/gm, '<li style="margin: 0.5rem 0; color: var(--text-secondary);">$1</li>')
            .replace(/\n/g, '<br>');
        
        // Build team cards grid
        const teamCardsGrid = `
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem; margin: 1.5rem 0;" class="team-cards-grid">
                ${validCharacters.map(name => {
                    const char = characters.find(c => c.name.toLowerCase() === name.toLowerCase());
                    return char ? renderCharacterCard(char).outerHTML : '';
                }).join('')}
            </div>
        `;

        // Build substitutes HTML
        let substitutesHtml = '';
        if(substitutes.length > 0) {
            substitutesHtml += `
                <h4 style="color: var(--text-muted); font-size: 1.125rem; font-weight: 600; margin: 2rem 0 1rem 0;">Alternative Options:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;" class="substitute-cards-grid">
                    ${substitutes.map(subPair => {
                        const char = characters.find(c => c.name.toLowerCase() === subPair.sub.toLowerCase());
                        if(char) {
                            return `
                                <div style="text-align: center;">
                                    <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem;">For ${subPair.original}</p>
                                    ${renderCharacterCard(char).outerHTML}
                                </div>
                            `;
                        }
                        return '';
                    }).join('')}
                </div>
            `;
        }
        
        teamContainer.innerHTML = `
            <h3 class="team-title">Suggested Team ${index + 1}</h3>
            ${teamCardsGrid}
            ${substitutesHtml}
            <div style="margin-top: 1.5rem; color: var(--text-secondary); line-height: 1.6;">${htmlContent}</div>
        `;
        teamResultsWrapper.appendChild(teamContainer);
        teamsDisplayed++;
    });
    
    if (teamsDisplayed === 0 && teams.length > 0) {
        teamResultsWrapper.innerHTML = "<p style='color: var(--accent-gold); text-align: center;'>The AI's suggestions included blacklisted characters and were filtered out. Please try generating again.</p>";
    }
    
    renderActionButtons();
}

function renderActionButtons() {
    actionButtonsContainer.innerHTML = `
        <button id="regenerate-btn" class="regenerate-button">
            ✨ Re-generate Teams
        </button>
    `;
    document.getElementById('regenerate-btn').addEventListener('click', generateTeam);
}

// Function to apply afflatus restrictions to team generation
function applyAfflatusRestrictions(availableCharacters) {
    if (selectedAfflatusRestrictions.length === 0) {
        return availableCharacters;
    }
    
    return availableCharacters.filter(character => 
        selectedAfflatusRestrictions.includes(character.afflatus)
    );
}