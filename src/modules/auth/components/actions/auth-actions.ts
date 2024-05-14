import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

async function createAccont(formData: FormData) {
    'user server';

    try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const hashedPassword = await hash(password, 10);
    
    await prisma.user.create({
        data:{
            name,
            email,
            password: '',
        }
    });


    alert('Conta criada com sucesso')
    redirect('/portal/login');
    


}catch (e) {
    console.error(e);
    alert('Erro ao criar conta');
    

}

}

const authActions = {
    createAccont
};

export default authActions;