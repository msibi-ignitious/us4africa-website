import {Router} from 'express';
import {prisma} from '../db.js';
const router=Router();
router.get('/',async(_req,res)=>{try{await prisma.$queryRaw`SELECT 1`;res.json({status:'ok',database:'connected',service:'US4Africa API'});}catch{res.status(503).json({status:'error',database:'unavailable'});}});
export default router;
