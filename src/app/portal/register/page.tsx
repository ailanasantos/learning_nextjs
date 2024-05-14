import RegisterForm from "@/modules/auth/components/register-form";
import Link from "next/link";

export default function RegisterPage() {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <RegisterForm />
    <hr></hr>
    <nav>
      <Link className= 'text-blue-500' href="/portal">Acessar o portal</Link> ou <Link className= 'text-blue-500' href="/portal/register">Crie uma conta</Link>
    </nav>
    </main>
    );
}