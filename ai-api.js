// AI API Integration Module
const AIAPI = {
    
    async generateWithAI(prompt, mataPelajaran, materi) {
        if (!CONFIG.AI_API.enabled || !CONFIG.AI_API.apiKey) {
            console.log('AI API not configured, using rule-based generation');
            return null;
        }
        
        try {
            const provider = CONFIG.AI_API.provider;
            
            switch(provider) {
                case 'gemini':
                    return await this.callGemini(prompt);
                case 'openai':
                    return await this.callOpenAI(prompt);
                case 'groq':
                    return await this.callGroq(prompt);
                default:
                    return null;
            }
        } catch (error) {
            console.error('AI API Error:', error);
            return null;
        }
    },
    
    async callGemini(prompt) {
        const url = `${CONFIG.AI_API.endpoints.gemini}?key=${CONFIG.AI_API.apiKey}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });
        
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    },
    
    async callOpenAI(prompt) {
        const url = CONFIG.AI_API.endpoints.openai;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.AI_API.apiKey}`
            },
            body: JSON.stringify({
                model: CONFIG.AI_API.models.openai,
                messages: [{
                    role: 'user',
                    content: prompt
                }],
                temperature: 0.7
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    },
    
    async callGroq(prompt) {
        const url = CONFIG.AI_API.endpoints.groq;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.AI_API.apiKey}`
            },
            body: JSON.stringify({
                model: CONFIG.AI_API.models.groq,
                messages: [{
                    role: 'user',
                    content: prompt
                }],
                temperature: 0.7
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    },
    
    // Generate diagnostic questions using AI
    async generateDiagnosticQuestionsAI(mataPelajaran, materi) {
        const prompt = `Buatkan 3 soal asesmen diagnostik untuk mata pelajaran ${mataPelajaran} dengan materi "${materi}". 
        Soal harus:
        1. Menguji pemahaman awal siswa
        2. Relevan dengan materi yang akan dipelajari
        3. Tidak terlalu sulit
        
        Format: Berikan 3 soal dalam bentuk list, tanpa penjelasan tambahan.`;
        
        const result = await this.generateWithAI(prompt, mataPelajaran, materi);
        if (result) {
            // Parse result into array
            return result.split('\n').filter(line => line.trim()).slice(0, 3);
        }
        return null;
    },
    
    // Generate summative questions using AI
    async generateSummativeQuestionsAI(mataPelajaran, materi) {
        const prompt = `Buatkan 3 soal asesmen sumatif untuk mata pelajaran ${mataPelajaran} dengan materi "${materi}".
        Soal harus:
        1. Menguji pemahaman mendalam siswa
        2. Mencakup aspek C4-C6 (analisis, evaluasi, kreasi)
        3. Kontekstual dan aplikatif
        4. Jika Kimia/Fisika/Matematika, sertakan perhitungan
        
        Format: Berikan 3 soal dalam bentuk list, tanpa penjelasan tambahan.`;
        
        const result = await this.generateWithAI(prompt, mataPelajaran, materi);
        if (result) {
            return result.split('\n').filter(line => line.trim()).slice(0, 3);
        }
        return null;
    }
};

// Export
if (typeof window !== 'undefined') {
    window.AIAPI = AIAPI;
}