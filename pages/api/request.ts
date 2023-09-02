import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check if the HTTP method is POST
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    // If it's a POST request, proceed with the logic
    try {
        const data = JSON.parse(req.body)
let respData = {
    status: 'ok'
}

        // fetch the webhook url and send the data to it
        fetch(
            'https://discord.com/api/webhooks/1146574207535284355/IHe4D25etrmM-lp7QXqzQBJIoDA9Ey8BKgDlmGExzx_TuNjUhPv5KkI2RPAxajco91oA',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `__**Hire Request**__\n**Name:** ${data.name}\n**Email:** ${data.email}\n**Subject:** ${data.subject}\n**Message:** ${data.message}`,
                }),
            },
        ).then((res) => {
            if (res.status === 200) {
                console.log('Message sent successfully!')
                respData = {
                    status: 'ok'
                }
            } else {
                console.log('Message failed to send.')
                respData = {
                    status: 'error - message failed to send (status code: ' + res + ')'
                }
            }
        })

        // send a response back to the client
        res.status(200).json({ status: 'ok' })
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}
