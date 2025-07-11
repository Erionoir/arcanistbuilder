// Configuration constants and mappings

// Mappings for Big Brain Mode reasoning slider
export const budgetMap = {
    '-1': -1, '0': 0, '1': 4096, '2': 8192,
    '3': 12288, '4': 18432, '5': 24576
};

export const budgetLabelMap = {
    '-1': 'Dynamic', '0': 'Fastest', '1': 'Quick', '2': 'Balanced',
    '3': 'Deep', '4': 'Rich', '5': 'Maximum'
};

export const budgetDescriptionMap = {
    '-1': 'Dynamic Reasoning: The model adapts its reasoning level as needed.',
    '0': 'No Reasoning: Fastest response, minimal logical steps.',
    '1': 'Minimal Reasoning: Low latency with some logical steps.',
    '2': 'Balanced Speed & Quality: A good mix for general use.',
    '3': 'Deeper Reasoning: Slower responses with higher quality analysis.',
    '4': 'Rich Analysis: Very slow with highly detailed and rich responses.',
    '5': 'Maximum Reasoning: The model uses its full capacity for analysis.'
};

// API Configuration
export const API_CONFIG = {
    GEMINI_API_KEY: "AIzaSyBdflNZ8DmJrc1HadPYoxbFFyerdg6rrJE",
    MODELS: {
        STANDARD: 'gemini-2.0-flash',
        BIG_BRAIN: 'gemini-2.5-flash'
    }
};

// App Constants
export const APP_CONSTANTS = {
    MAX_SELECTED_CHARACTERS: 2,
    MAX_AFFLATUS_RESTRICTIONS: 3,
    DEFAULT_TEAM_COUNT: 1,
    NOTIFICATION_DURATION: 4000
};