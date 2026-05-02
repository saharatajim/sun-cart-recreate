
"use client";

import { authClient } from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from 'react';


const RegisterPage = () => {
  const router=useRouter()
     const onSubmit = async(e) => {
    e.preventDefault();

    const name=e.target.name.value
    const image=e.target.image.value
    const email=e.target.email.value
    const password=e.target.password.value

    console.log({name,image,email,password})

    const {data,error}=await authClient.signUp.email({
      name:name,
      image:image,
      email:email,
      password:password
    })
    console.log({data,error})
 if(error){
  alert("Resitration Failed")
 }
 if(data){
  router.push('/')
 }
  };
    return (
        <div className="container mx-auto p-10 bg-neutral text-white flex justify-center "  >
             <div className="card border" >
                <h1 className="font-bold text-center text-2xl text-warning">Join Suncart</h1>
                <p className="text-center">Create your account</p>
                <Form className="flex w-96 text-white flex-col gap-4" onSubmit={onSubmit}>
     <div className="flex justify-center">
       <TextField
       className="w-[80%]"
        isRequired
        name="name"
        type="text"
        
      >
        <Label className="text-white">Name</Label>
        <Input placeholder="Your Name" />
        <FieldError />
      </TextField>
     </div>

     <div className="flex justify-center">
       <TextField className="w-[80%]"
        isRequired
        name="image"
        type="text"
        
      >
        <Label className="text-white">Image URL</Label>
        <Input placeholder="Image URL" />
        <FieldError />
      </TextField>
     </div>

     <div className="flex justify-center">
       <TextField className="w-[80%]"
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label className="text-white">Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
     </div>

      

      <div className="flex justify-center">
        <TextField  className="w-[80%]"
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label className="text-white">Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      </div>

      <div className="flex justify-center gap-2">
         <Button className="btn w-[80%] rounded-2xl" type="submit">
                
                  Register
                </Button>
   
      </div>
                 </Form>
                   <div className="divider px-10 divider-warning">Or</div>
              
                <p className="text-center">Have account?  <Link className="text-warning" href={'/signin'}>Sign In</Link></p>
             </div>
        </div>
    );
};

export default RegisterPage;