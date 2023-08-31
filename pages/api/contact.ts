// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // need to parse the body to JSON
    const data = JSON.parse(req.body)

    // fetch the webhook url and send the data to it
    fetch(
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
    )

    // send a response back to the client
    res.status(200).json({ status: 'ok' })
}
