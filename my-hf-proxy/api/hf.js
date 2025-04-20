export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST allowed' });
    }

    const input = req.body.inputs;

    try {
        const hfRes = await fetch("https://api-inference.huggingface.co/models/gpt2", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputs: input }),
        });

        const data = await hfRes.json();
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
}
