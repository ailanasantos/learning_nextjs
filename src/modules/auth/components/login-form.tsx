import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginForm() {
    return(
        <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>faça login para continuar</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
            <div className="grid w-full items-center gap-4">

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type= "email" required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" name="password" type= "password" required/>
            </div>

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">

        <Button>Entrar</Button>
        <Link href="/portal/login" className= {buttonVariants({variant: 'link'})}
        >
            Criar conta
        </Link>
      </CardFooter>
    </Card>
    )

}