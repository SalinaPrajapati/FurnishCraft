"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

const formSchema = z.object({
  username: z.string().trim().min(1, {
    message: "Username must be at least 5 characters",
  }),
  email: z.string().trim().min(1, {
    message: "Email must be valided",
  }),
  password: z.string().trim().min(1, {
    message: "Password should have minimum of 8 character",
  }),
  confirmpassword: z.string().trim().min(1, {
    message: "Password confirmation is required",
  }),
});
export default function UserAuthForm() {
    const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: values.username,
            email: values.email,
            password: values.password
        })
    })
    if(response.ok) {
       router.push('/login')
    }else{
        console.log('Failed to create account')
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono">Username</FormLabel>
              <FormControl>
                <Input placeholder="john" {...field} />
              </FormControl>
              <FormMessage />
              <FormLabel className="font-mono">Email</FormLabel>
              <FormControl>
                <Input placeholder="john@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
              <FormLabel className="font-mono">Password</FormLabel>
              <FormControl>
                <Input type="password" />
              </FormControl>
              <FormMessage />
              <FormLabel className="font-mono">Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-5 text-white bg-yellow-600 hover:bg-yellow-500"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
