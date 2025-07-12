// Character data for Reverse: 1999
export const characters = [
    // 6-Star
    { name: "37", rarity: 6, image: "assets/characters/37_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "A+", role: "DPS" },
    { name: "6", rarity: 6, image: "assets/characters/6_Poster.webp", afflatus: "Intellect", dmgType: "Mental", rank: "A", role: "Support" },
    { name: "A Knight", rarity: 6, image: "assets/characters/A_Knight_Poster.webp", afflatus: "Spirit", dmgType: "Reality", rank: "B", role: "DPS" },
    { name: "Aleph", rarity: 6, image: "assets/characters/Aleph_Poster.webp", afflatus: "Intellect", dmgType: "Mental", rank: "S", role: "Support" },
    { name: "An-an Lee", rarity: 6, image: "assets/characters/An-an_Lee_Poster.webp", afflatus: "Plant", dmgType: "Reality", rank: "A", role: "Support" },
    { name: "Anjo Nala", rarity: 6, image: "assets/characters/Anjo_Nala_Poster_CN.webp", afflatus: "Beast", dmgType: "Mental", rank: "S", role: "Sub DPS" },
    { name: "Argus", rarity: 6, image: "assets/characters/Argus_Poster.webp", afflatus: "Plant", dmgType: "Reality", rank: "S", role: "Support" },
    { name: "Barcarola", rarity: 6, image: "assets/characters/Barcarola_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "S", role: "DPS" },
    { name: "Centurion", rarity: 6, image: "assets/characters/Centurion_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "B", role: "DPS" },
    { name: "Druvis III", rarity: 6, image: "assets/characters/Druvis_III_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "A", role: "Sub DPS" },
    { name: "Eternity", rarity: 6, image: "assets/characters/Eternity_Poster.webp", afflatus: "Mineral", dmgType: "Reality", rank: "A+", role: "Support" },
    { name: "Ezra Theodore", rarity: 6, image: "assets/characters/Ezra_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "A+", role: "Survival" },
    { name: "Fatutu", rarity: 6, image: "assets/characters/Fatutu_Poster.webp", afflatus: "Mineral", dmgType: "Mental", rank: "S+", role: "Survival" },
    { name: "Flutterpage", rarity: 6, image: "assets/characters/Flutterpage_Poster.webp", afflatus: "Star", dmgType: "Reality", rank: "S+", role: "Support" },
    { name: "Getian", rarity: 6, image: "assets/characters/Getian_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "B", role: "Support" },
    { name: "Hissabeth", rarity: 6, image: "assets/characters/Hissabeth_Poster_CN.webp", afflatus: "Plant", dmgType: "Mental", rank: "S", role: "Support" },
    { 
        name: "Isolde", 
        rarity: 6, 
        image: "assets/characters/Isolde_Poster1.webp", 
        afflatus: "Spirit", 
        dmgType: "Mental", 
        rank: "A+", 
        role: "Sub DPS", 
        idleAudio: "assets/idles/Isolde_Idle.ogg",
        profile: {
            bio: "Isolde (伊索尔德) (full name: Isolde von Dittarsdorf) is a Spirit Arcanist in Reverse: 1999. She was introduced through the story chapter E Lucevan Le Stelle alongside Marcus in Version 1.7.\n\nIsolde, the youngest daughter of the noble Dittarsdorf family of Vienna, conducts herself with the grace and warmth of a spring breeze.",
            inheritance: [
                {
                    name: "Seven Veils",
                    level: 1,
                    icon: "assets/insights/insight_1.webp",
                    description: "When starting battle, enter the [Prelude] status and inflict 3 stacks of [Burn] on all enemies. At the end of the round, when the highest enemy [Burn] stack resolves and lose stacks, gain an equal number of [Heat] stacks in turn. When holding 15 stacks of [Heat], the [Prelude] status changes to [Interlude] status."
                },
                {
                    name: "Seven Veils",
                    level: 2,
                    icon: "assets/insights/insight_2.webp",
                    description: "ATK +5% when the caster enters battle."
                },
                {
                    name: "Seven Veils",
                    level: 3,
                    icon: "assets/insights/insight_3.webp",
                    description: "When holding 40 [Heat] stacks, the [Interlude] status changes to the [Finale] status."
                }
            ],
            effects: {
                "Prelude": "At the start of the round, grants 3 stacks of [Preignition] to all allies (undispellable).",
                "Interlude": "At the start of the round, grants 3 stacks of [Preignition] to all allies. When the highest enemy [Burn] stack reaches 6 or higher, casts [Intermezzo] (undispellable).",
                "Finale": "At the start of the round, grants 3 stacks of [Preignition] and 1 stack of [Power Burst] to all allies. When the highest enemy [Burn] stack reaches 6 or higher, casts [Intermezzo], and gain Incantation Might +15% for this attack (undispellable).",
                "Intermezzo": "Deal 50% Reality DMG to all enemies. For every stack of [Burn] a target has, deal Reality DMG 10% to that target.",
                "Burn": "Healing Taken -15%(unstackable). At the end of the round, takes (the holder's ATK x4%) Genesis DMG (stackable up to 30 times, multiple stacks of [Burn] is regarded as 1 [Neg Status], removes 50% of the stacks when triggered).",
                "Heat": "Converted from resolved [Burn] stacks.",
                "Preignition": "Before attacking, for each stack, inflicts 1 stack of [Burn] on the target (remove all after trigger).",
                "Power Burst": "DMG Bonus +25% when attacking (-1 stack after trigger)."
            },
            incantations: [
                {
                    name: "Twirling Melody",
                    type: "Arcane Skill",
                    image: "assets/incantations/isolde/skill1.webp",
                    ranks: [
                        {
                            rank: "✦✧✧",
                            rankType: "Debuff",
                            description: "<i>\"Ф I sing and twirl.\"</i><br>Mass Attack. Deals 150% Reality DMG to 2 enemies. Inflicts 2 stacks of [Burn] on the targets hit. When in the [Intermezzo] status, gain Penetration Rate +30% for this attack. When in the [Finale] status, gain Penetration Rate +50% for this attack."
                        },
                        {
                            rank: "✦✦✧",
                            rankType: "Debuff",
                            description: "<i>\"Ф I sing and twirl on stage.\"</i><br>Mass Attack. Deals 225% Reality DMG to 2 enemies. Inflicts 2 stacks of [Burn] on the targets hit. When in the [Intermezzo] status, gain Penetration Rate +30% for this attack. When in the [Finale] status, gain Penetration Rate +50% for this attack."
                        },
                        {
                            rank: "✦✦✦",
                            rankType: "Debuff",
                            description: "<i>\"Ф I sing and twirl on stage, for there is no place for me other than the stage.\"</i><br>Mass Attack. Deals 300% Reality DMG to 2 enemies. Inflicts 2 stacks of [Burn] on the targets hit. When in the [Intermezzo] status, gain Penetration Rate +30% for this attack. When in the [Finale] status, gain Penetration Rate +50% for this attack."
                        }
                    ]
                },
                {
                    name: "Desired Freedom",
                    type: "Arcane Skill",
                    image: "assets/incantations/isolde/skill2.webp",
                    ranks: [
                        {
                            rank: "✦✧✧",
                            rankType: "Debuff",
                            description: "<i>\"Ф I dance.\"</i><br>Mass debuff. Inflicts Critical DEF -25% and Reality DEF -15% (-20% to targets in the [Burn] status) on all enemies for 2 rounds."
                        },
                        {
                            rank: "✦✦✧",
                            rankType: "Debuff",
                            description: "<i>\"Ф I dance to recount my story.\"</i><br>Mass debuff. Inflicts Critical DEF -35% and Reality DEF -15% (-20% to targets in the [Burn] status) on all enemies for 2 rounds."
                        },
                        {
                            rank: "✦✦✦",
                            rankType: "Debuff",
                            description: "<i>\"Ф I dance to recount my story, so that others may hear me.\"</i><br>Mass debuff. Inflicts Critical DEF -50% and Reality DEF -15% (-20% to targets in the [Burn] status) on all enemies for 2 rounds."
                        }
                    ]
                },
                {
                    name: "Choking on Blood",
                    type: "Ultimate",
                    image: "assets/incantations/isolde/ult.webp",
                    ranks: [
                        {
                            rank: "✦✦✦",
                            description: "<i>\"Ф I hereby relieve you!\"</i><br>Mass Debuff. Inflicts 5 stacks of [Burn] on all enemies, and additional 5 stacks of [Burn] on the main target, at the same time, grants 1 stack of [Rousing Morale] to all allies, and then casts [Intermezzo] as a follow-up attack on the targets. For every excess stack of [Burn] on the main target, this [Intermezzo] gains Incantation Might +15%."
                        }
                    ]
                }
            ],
            gallery: [
                {
                    name: "Default",
                    image: "assets/gallery/isolde/default.webp",
                    description: "The king's daughter, the painter's beloved—a dazzling star, the hope of a family.",
                    source: "Obtain by obtaining Isolde"
                },
                {
                    name: "Polyphony",
                    image: "assets/gallery/isolde/insight2.webp",
                    description: "I am ... am I? I am. I AM!",
                    source: "Obtain by reaching Insight II with Isolde"
                },
                {
                    name: "And All That Jazz",
                    image: "assets/gallery/isolde/garment1.webp",
                    description: "The breeze halts in this place, where the bluebonnets flourish with grace.",
                    source: "Available from the Garment Shop in Version 2.1 and Version 2.5 for 1080/US$9.99"
                }
            ]
        }
    },
    { name: "J", rarity: 6, image: "assets/characters/J_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "A+", role: "Sub DPS" },
    { name: "Jessica", rarity: 6, image: "assets/characters/Jessica_Poster.webp", afflatus: "Plant", dmgType: "Reality", rank: "A+", role: "Sub DPS" },
    { name: "Jiu Niangzi", rarity: 6, image: "assets/characters/Jiu_Niangzi_Poster.webp", afflatus: "Mineral", dmgType: "Reality", rank: "S", role: "DPS" },
    { name: "Kaalaa Baunaa", rarity: 6, image: "assets/characters/Kaalaa_Baunaa_Poster.webp", afflatus: "Mineral", dmgType: "Mental", rank: "B", role: "DPS" },
    { name: "Kakania", rarity: 6, image: "assets/characters/Kakania_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "S+", role: "Support" },
    { name: "Kiperina", rarity: 6, image: "assets/characters/Kiperina_Poster_CN.webp", afflatus: "Star", dmgType: "Mental", rank: "S+", role: "Survival" },
    { name: "Liang Yue", rarity: 6, image: "assets/characters/Liang_Yue_Poster.webp", afflatus: "Star", dmgType: "Reality", rank: "S", role: "Sub DPS" },
    { name: "Lilya", rarity: 6, image: "assets/characters/Lilya_Poster.webp", afflatus: "Star", dmgType: "Reality", rank: "A", role: "DPS" },
    { name: "Lopera", rarity: 6, image: "assets/characters/Lopera_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "S", role: "Support" },
    { name: "Lucy", rarity: 6, image: "assets/characters/Lucy_Poster.webp", afflatus: "Intellect", dmgType: "Reality", rank: "S+", role: "DPS" },
    { name: "Marcus", rarity: 6, image: "assets/characters/Marcus_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "A", role: "DPS" },
    { name: "Medicine Pocket", rarity: 6, image: "assets/characters/Medicine_Pocket_Poster.webp", afflatus: "Beast", dmgType: "Mental", rank: "S", role: "Survival" },
    { name: "Melania", rarity: 6, image: "assets/characters/Melania_Poster.webp", afflatus: "Beast", dmgType: "Mental", rank: "S+", role: "Sub DPS" },
    { name: "Mercuria", rarity: 6, image: "assets/characters/Mercuria_Poster.webp", afflatus: "Spirit", dmgType: "Mental", rank: "S", role: "Support" },
    { name: "Moldir", rarity: 6, image: "assets/characters/Moldir_Poster_CN.webp", afflatus: "Beast", dmgType: "Reality", rank: "S", role: "Sub DPS" },
    { name: "Ms. NewBabel", rarity: 6, image: "assets/characters/Ms._NewBabel_Poster.webp", afflatus: "Mineral", dmgType: "Reality", rank: "S", role: "Survival" },
    { name: "Nautika", rarity: 6, image: "assets/characters/Nautika_Poster_CN.webp", afflatus: "Spirit", dmgType: "Reality", rank: "S+", role: "DPS" },
    { name: "Noire", rarity: 6, image: "assets/characters/Noire_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "A", role: "DPS" },
    { name: "Pickles", rarity: 6, image: "assets/characters/Pickles_Poster.webp", afflatus: "Mineral", dmgType: "Mental", rank: "S", role: "Support" },
    { name: "Recoleta", rarity: 6, image: "assets/characters/Recoleta_Poster.webp", afflatus: "Mineral", dmgType: "Reality", rank: "S+", role: "DPS" },
    { name: "Regulus", rarity: 6, image: "assets/characters/Regulus_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "A+", role: "Sub DPS" },
    { name: "Semmelweis", rarity: 6, image: "assets/characters/Semmelweis_Poster.webp", afflatus: "Mineral", dmgType: "Reality", rank: "S+", role: "Sub DPS" },
    { name: "Sentinel", rarity: 6, image: "assets/characters/Sentinel_Poster_CN.webp", afflatus: "Mineral", dmgType: "Reality", rank: "S", role: "Sub DPS" },
    { name: "Shamane", rarity: 6, image: "assets/characters/Shamane_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "B", role: "Support" },
    { name: "Sotheby", rarity: 6, image: "assets/characters/Sotheby_Poster.webp", afflatus: "Plant", dmgType: "Reality", rank: "S", role: "Survival" },
    { name: "Spathodea", rarity: 6, image: "assets/characters/Spathodea_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "A", role: "DPS" },
    { name: "Tooth Fairy", rarity: 6, image: "assets/characters/Tooth_Fairy_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "A", role: "Survival" },
    { name: "Tuesday", rarity: 6, image: "assets/characters/Tuesday_Poster.webp", afflatus: "Spirit", dmgType: "Mental", rank: "S", role: "Sub DPS" },
    { name: "Ulrich", rarity: 6, image: "assets/characters/Ulrich_Overture_1.webp", afflatus: "Intellect", dmgType: "Reality", rank: "S+", role: "Sub DPS" },
    { name: "Vila", rarity: 6, image: "assets/characters/Vila_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "A+", role: "Survival" },
    { name: "Voyager", rarity: 6, image: "assets/characters/Voyager_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "S", role: "Sub DPS" },
    { name: "Willow", rarity: 6, image: "assets/characters/Willow_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "S", role: "DPS" },
    { name: "Windsong", rarity: 6, image: "assets/characters/Windsong_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "S", role: "DPS" }
];