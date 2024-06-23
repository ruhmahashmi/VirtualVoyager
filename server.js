import express, { static } from 'express';
import fetch from 'node-fetch';
const app = express();
const port = process.env.PORT || 3000;

// Replace 'YOUR_APP_ID' with your actual Wolfram Alpha App ID
const WOLFRAM_APP_ID = '5HYQH6-VHG8WV3WHU';

app.use(static('public')); // Serve static files from the 'public' directory

app.get('/query', async (req, res) => {
    const query = req.query.input;
    if (!query) {
        return res.status(400).send({ error: 'Query input is required' });
    }

    const apiUrl = `https://api.wolframalpha.com/v2/query?input=${encodeURIComponent(query)}&format=plaintext&output=JSON&appid=${WOLFRAM_APP_ID}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data from Wolfram Alpha');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Error fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
