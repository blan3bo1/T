export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;
        console.log('Received message:', message);
        res.status(200).json({ message: `Success! Received: "${message}"` });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
