"use client"
import { gql } from "@apollo/client";
import { useMutation } from '@apollo/client';
import { redirect } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  
  const MYPROFILE = gql`
    mutation {
      login(email: "john@mail.com", password: "changeme") {
        access_token
        refresh_token
      }
    }
  `;

  const [addTodo, { data, loading, error }] = useMutation(MYPROFILE);
  // let acesstoken = data.login.access_token
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) return <p>{data.login.access_token}</p>


    // return redirect("/dashboard");
    

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button
        onClick={e => {
          e.preventDefault();
          addTodo();          
        }} 
        className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
  )
}
