"use client";

import { authClient } from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";

import React from 'react';


const SignInPage = () => {
     const onSubmit = async(e) => {
    e.preventDefault();
        const email=e.target.email.value
    const password=e.target.password.value
     console.log({
     
      email,
      password
    })
    const {data,error}=await authClient.signIn.email({               
          email,
          password,
           callbackURL: "/"
    })
    console.log( {data,error})
 
  };
    return (
        <div className="container mx-auto p-10 bg-neutral text-white flex justify-center "  >
             <div className="card border" >
                <h1 className="font-bold text-center text-2xl text-warning">Welcome Back</h1>
                <p className="text-center">Access your summer collection</p>
                <Form className="flex w-96 text-white flex-col gap-4" onSubmit={onSubmit}>
     <div className="flex justify-center">
       <TextField
      className="w-[80%]"
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
        <TextField
       className="w-[80%]"
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
      <div className="flex gap-2 justify-center">
        <Button className="btn rounded-2xl w-[80%] " type="submit">
        
          Login
        </Button>
      
      </div>
                 </Form>
                   <div className="divider px-10   divider-warning">Or</div>

              <div className="flex justify-center ">
                   <button className="btn w-[80%] rounded-2xl bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
                </button>
              </div>
                <p className="text-center">New here?<Link className="text-warning" href={'/register'}>Register</Link></p>
             </div>
        </div>
    );
};

export default SignInPage;