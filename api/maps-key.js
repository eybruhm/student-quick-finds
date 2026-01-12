// Vercel Serverless Function to securely serve API key
export default function handler(req, res) {
    // Only allow requests from your domain
    const allowedOrigins = [
        'http://localhost:5500',
        'http://127.0.0.1:5500',
        'https://student-quick-finds.app',
        'https://eybruhm.github.io'
    ];
    
    const origin = req.headers.origin;
    
    if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
        res.setHeader('Access-Control-Allow-Origin', origin || '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
    }
    
    // Return the API key from environment variable
    res.status(200).json({ 
        apiKey: process.env.GOOGLE_MAPS_API_KEY 
    });
}
