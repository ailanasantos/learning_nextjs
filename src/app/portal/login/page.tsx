import LoginForm from "@/modules/auth/components/login-form";

export default function loginPage() {
    return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <LoginForm/>
    </main>
    )
}