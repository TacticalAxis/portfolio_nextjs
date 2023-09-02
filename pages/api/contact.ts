import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check if the HTTP method is POST
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    // If it's a POST request, proceed with the logic
    try {
        const data = JSON.parse(req.body)

        // fetch the webhook url and send the data to it
        const response = await fetch(
            'https://discord.com/api/webhooks/1146574207535284355/IHe4D25etrmM-lp7QXqzQBJIoDA9Ey8BKgDlmGExzx_TuNjUhPv5KkI2RPAxajco91oA',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `__**Contact**__\n**Name:** ${data.name}\n**Email:** ${data.email}\n**Subject:** ${data.subject}\n**Message:** ${data.message}`,
                }),
            },
        );

        // Check if the webhook responded successfully
        if (!response.ok) {
            throw new Error('Failed to send data to Discord webhook');
        }

        // send a response back to the client
        res.status(200).json({ status: 'ok' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}
