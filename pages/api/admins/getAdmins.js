import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
    try {
        const admins = await prisma.user.findMany({
            where : {
                role : "admin"
            }
        });
        return res.json({
            admins
        });
    }catch (e){
        return res.json({
            error : e.message
        })
    }
}
