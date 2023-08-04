import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// User CRUD
// creating a user or data we use post request

// Create user
router.post('/', async (req, res) => {
    const { email, name, username } = req.body;
    console.log(email, name, username);
    const result = await prisma.user.create({
        data: {
            email,
            name,
            username,
            bio: "Hello I am new on twitter",
        },
    });

    res.json(result);
});

// list users
router.get('/', async (req, res) => {
    const allUser = await prisma.user.findMany();

    res.json(allUser);
});

// get one user
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const user = await prisma.user.findUnique({ where: {id: Number(id)} });

    res.json(user);
});

// update user
router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({
        error: 'Not Implemented: ${id}'
    });
});

// delete user
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({
        error: 'Not Implemented: ${id}'
    });
});

export default router;