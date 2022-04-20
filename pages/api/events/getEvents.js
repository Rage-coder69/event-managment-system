import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
    try {
        const events = await prisma.events.findMany({});
        return res.json({
            events
        });
    }catch (e){
        return res.json({
            message : e.message
        })
    }
}
