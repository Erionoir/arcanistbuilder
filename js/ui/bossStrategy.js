// Boss Strategy UI functionality
import { bosses } from '../data/bosses.js';
import { API_CONFIG } from '../core/config.js';
import { showNotification } from '../utils/notifications.js';

let selectedBoss = null;
let isGeneratingStrategy = false;

export function renderBossStrategy() {
    const bossStrategyView = document.getElementById('boss-strategy-view');
    
    bossStrategyView.innerHTML = `
        <div class="boss-strategy-container">
            <div class="container mx-auto px-4 py-8">
                <header class="text-center mb-8">
                    <h1 class="text-4xl md:text-5xl font-bold mb-2">Boss Strategy</h1>
                    <h2 class="text-2xl md:text-3xl font-semibold text-blue-400">AI-Powered Tactical Guides</h2>
                    <p class="text-gray-400 mt-4 max-w-2xl mx-auto">Select a boss to generate a detailed strategy guide with team recommendations and tactical breakdowns</p>
                </header>
                
                <div class="boss-selection-section mb-8">
                    <div class="boss-dropdown-container">
                        <label for="boss-select" class="block text-lg font-medium mb-4 text-center">Choose a Boss</label>
                        <div class="relative max-w-2xl mx-auto">
                            <select id="boss-select" class="boss-select">
                                <option value="">Select a boss...</option>
                                ${generateBossOptions()}
                            </select>
                            <div class="boss-dropdown-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div id="boss-info" class="boss-info hidden">
                        <!-- Boss information will be displayed here -->
                    </div>
                    
                    <div class="generate-strategy-section">
                        <button id="generate-strategy-btn" class="generate-strategy-btn" disabled>
                            <span class="btn-text">Generate Strategy Guide</span>
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div id="strategy-loading" class="strategy-loading hidden">
                    <div class="loading-spinner">
                        <div class="spinner"></div>
                        <p>Generating comprehensive strategy guide...</p>
                    </div>
                </div>
                
                <div id="strategy-results" class="strategy-results hidden">
                    <!-- Strategy results will be displayed here -->
                </div>
            </div>
        </div>
    `;
    
    initializeBossStrategyHandlers();
}

function generateBossOptions() {
    const categories = ['Story Boss', 'Event Boss', 'Ultimate Boss'];
    let options = '';
    
    categories.forEach(category => {
        const categoryBosses = bosses.filter(boss => boss.category === category);
        if (categoryBosses.length > 0) {
            options += `<optgroup label="${category}">`;
            categoryBosses.forEach(boss => {
                options += `<option value="${boss.name}" data-difficulty="${boss.difficulty}">${boss.name} (${boss.difficulty})</option>`;
            });
            options += `</optgroup>`;
        }
    });
    
    return options;
}

function initializeBossStrategyHandlers() {
    const bossSelect = document.getElementById('boss-select');
    const generateBtn = document.getElementById('generate-strategy-btn');
    const bossInfo = document.getElementById('boss-info');
    
    bossSelect.addEventListener('change', (e) => {
        const bossName = e.target.value;
        
        if (bossName) {
            selectedBoss = bosses.find(boss => boss.name === bossName);
            displayBossInfo(selectedBoss);
            generateBtn.disabled = false;
            bossInfo.classList.remove('hidden');
        } else {
            selectedBoss = null;
            generateBtn.disabled = true;
            bossInfo.classList.add('hidden');
        }
    });
    
    generateBtn.addEventListener('click', generateBossStrategy);
}

function displayBossInfo(boss) {
    const bossInfo = document.getElementById('boss-info');
    
    bossInfo.innerHTML = `
        <div class="boss-details">
            <h3 class="boss-name">${boss.name}</h3>
            <div class="boss-metadata">
                <span class="boss-category">${boss.category}</span>
                <span class="boss-difficulty difficulty-${boss.difficulty.toLowerCase()}">${boss.difficulty}</span>
            </div>
            <p class="boss-description">${boss.description}</p>
            
            <div class="boss-mechanics-grid">
                <div class="mechanics-section">
                    <h4>Key Mechanics</h4>
                    <ul class="mechanics-list">
                        ${boss.mechanics.map(mechanic => `<li>${mechanic}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="weaknesses-section">
                    <h4>Weaknesses</h4>
                    <ul class="weaknesses-list">
                        ${boss.weaknesses.map(weakness => `<li>${weakness}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="resistances-section">
                    <h4>Resistances</h4>
                    <ul class="resistances-list">
                        ${boss.resistances.map(resistance => `<li>${resistance}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

async function generateBossStrategy() {
    if (!selectedBoss || isGeneratingStrategy) return;
    
    isGeneratingStrategy = true;
    const generateBtn = document.getElementById('generate-strategy-btn');
    const loadingDiv = document.getElementById('strategy-loading');
    const resultsDiv = document.getElementById('strategy-results');
    
    generateBtn.disabled = true;
    loadingDiv.classList.remove('hidden');
    resultsDiv.classList.add('hidden');
    
    // Scroll to loading section
    loadingDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    try {
        const strategy = await callGeminiForStrategy(selectedBoss);
        displayStrategyResults(strategy);
        resultsDiv.classList.remove('hidden');
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        showNotification('✨ Strategy guide generated successfully!', 'success');
    } catch (error) {
        console.error('Error generating strategy:', error);
        resultsDiv.innerHTML = `
            <div class="error-message">
                <h3>Strategy Generation Failed</h3>
                <p>An error occurred while generating the strategy guide: ${error.message}</p>
                <p>Please try again in a moment.</p>
            </div>
        `;
        resultsDiv.classList.remove('hidden');
        showNotification('❌ Failed to generate strategy guide', 'error');
    } finally {
        isGeneratingStrategy = false;
        generateBtn.disabled = false;
        loadingDiv.classList.add('hidden');
    }
}

async function callGeminiForStrategy(boss) {
    const prompt = createStrategyPrompt(boss);
    
    const payload = {
        contents: [{
            parts: [{ text: prompt }]
        }],
        generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.9,
            maxOutputTokens: 2048
        }
    };
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${API_CONFIG.MODELS.BIG_BRAIN}:generateContent?key=${API_CONFIG.GEMINI_API_KEY}`;
    
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
    }
    
    const result = await response.json();
    
    if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0]) {
        return result.candidates[0].content.parts[0].text;
    } else {
        throw new Error('Empty response from AI');
    }
}

function createStrategyPrompt(boss) {
    return `# Boss Strategy Guide Request

You are an expert Reverse: 1999 strategist. Generate a comprehensive strategy guide for the following boss:

**Boss:** ${boss.name}
**Category:** ${boss.category}
**Difficulty:** ${boss.difficulty}
**Description:** ${boss.description}

**Key Mechanics:**
${boss.mechanics.map(mechanic => `• ${mechanic}`).join('\n')}

**Weaknesses:**
${boss.weaknesses.map(weakness => `• ${weakness}`).join('\n')}

**Resistances:**
${boss.resistances.map(resistance => `• ${resistance}`).join('\n')}

Please provide a detailed strategy guide with the following sections:

## 1. Recommended Team Composition
- Suggest 3-4 specific character recommendations with roles
- Explain why each character is effective against this boss
- Include afflatus distribution and damage types

## 2. Key Character Roles
- Main DPS requirements and recommendations
- Support/Utility needs
- Survival/Sustain requirements
- Any specialized roles needed for mechanics

## 3. Phase-by-Phase Tactical Breakdown
- Detailed strategy for each phase of the fight
- Timing recommendations for abilities and ultimates
- Positioning and target priority guidance
- How to handle specific mechanics

## 4. Pro Tips & Advanced Strategies
- Optimal skill rotation suggestions
- Common mistakes to avoid
- Alternative team compositions for different player rosters
- Emergency recovery strategies

Format your response with clear headers and bullet points for easy reading. Be specific about character names, timing, and tactical decisions. Focus on actionable advice that players can immediately apply.`;
}

function displayStrategyResults(strategyText) {
    const resultsDiv = document.getElementById('strategy-results');
    
    // Parse and format the strategy text
    const formattedStrategy = formatStrategyText(strategyText);
    
    resultsDiv.innerHTML = `
        <div class="strategy-guide">
            <div class="strategy-header">
                <h2>Strategy Guide: ${selectedBoss.name}</h2>
                <div class="strategy-actions">
                    <button id="regenerate-strategy-btn" class="regenerate-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0V9a8 8 0 1115.356 2m-15.356 0H4v5" />
                        </svg>
                        Regenerate
                    </button>
                </div>
            </div>
            <div class="strategy-content">
                ${formattedStrategy}
            </div>
        </div>
    `;
    
    // Add event listener for regenerate button
    document.getElementById('regenerate-strategy-btn').addEventListener('click', generateBossStrategy);
}

function formatStrategyText(text) {
    // Convert markdown-style formatting to HTML
    let formatted = text
        .replace(/## (.*)/g, '<h3 class="strategy-section-title">$1</h3>')
        .replace(/### (.*)/g, '<h4 class="strategy-subsection-title">$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^- (.*)/gm, '<li>$1</li>')
        .replace(/^• (.*)/gm, '<li>$1</li>');
    
    // Wrap consecutive list items in ul tags
    formatted = formatted.replace(/(<li>.*<\/li>\s*)+/gs, (match) => {
        return `<ul class="strategy-list">${match}</ul>`;
    });
    
    // Convert line breaks to paragraphs
    formatted = formatted
        .split('\n\n')
        .map(paragraph => {
            if (!paragraph.startsWith('<h') && !paragraph.startsWith('<ul') && paragraph.trim()) {
                return `<p class="strategy-paragraph">${paragraph}</p>`;
            }
            return paragraph;
        })
        .join('');
    
    return formatted;
}