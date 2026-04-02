// Configuration for AI Generator
const CONFIG = {
    // AI API Configuration (Optional - untuk hasil lebih baik)
    AI_API: {
        enabled: false, // Set true untuk menggunakan AI API
        provider: 'gemini', // 'openai', 'gemini', 'groq', 'claude'
        apiKey: '', // Masukkan API key Anda di sini
        
        // API Endpoints
        endpoints: {
            openai: 'https://api.openai.com/v1/chat/completions',
            gemini: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
            groq: 'https://api.groq.com/openai/v1/chat/completions',
            claude: 'https://api.anthropic.com/v1/messages'
        },
        
        // Model names
        models: {
            openai: 'gpt-4-turbo-preview',
            gemini: 'gemini-pro',
            groq: 'mixtral-8x7b-32768',
            claude: 'claude-3-sonnet-20240229'
        }
    },
    
    // Fallback ke rule-based AI jika API tidak tersedia
    USE_ADVANCED_RULES: true,
    
    // Logging
    DEBUG: true
};

// Export config
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}