// Configuration for AI Generator
const CONFIG = {
    // AI API Configuration (Optional - untuk hasil lebih baik)
    AI_API: {
        enabled: true, // Set true untuk menggunakan AI API (SANGAT DIREKOMENDASIKAN!)
        provider: 'gemini', // 'openai', 'gemini', 'groq', 'claude'
        apiKey: '', // ⚠️ WAJIB DIISI! Dapatkan gratis di: https://makersuite.google.com/app/apikey
        
        // API Endpoints
        endpoints: {
            openai: 'https://api.openai.com/v1/chat/completions',
            gemini: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
            groq: 'https://api.groq.com/openai/v1/chat/completions',
            claude: 'https://api.anthropic.com/v1/messages'
        },
        
        // Model names
        models: {
            openai: 'gpt-4-turbo-preview',
            gemini: 'gemini-1.5-flash',
            groq: 'mixtral-8x7b-32768',
            claude: 'claude-3-sonnet-20240229'
        },
        
        // Temperature untuk kreativitas (0.0 = konsisten, 1.0 = kreatif)
        // Untuk hasil terbaik, gunakan 0.8-0.9
        temperature: 0.85,
        
        // Max tokens (panjang output)
        // Untuk konten detail, gunakan 4096 atau lebih
        maxTokens: 8192
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