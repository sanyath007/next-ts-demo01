// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        res.status(200).json({ name: 'Get Employees' })
    } else if (req.method === 'POST') {
        
    } else if (req.method === 'PUT') {
        
    } else if (req.method === 'DELETE') {

    }
}