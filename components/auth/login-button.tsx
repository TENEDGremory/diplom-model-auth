"use client"

import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { LoginForm } from "@/components/auth/login-form";

interface LoginButtonProps {
  children: React.ReactNode,
  mode?: 'modal' | 'redirect',
  asChild?: boolean;
};

interface SigninButtonProps {
  children: React.ReactNode,
  mode?: 'modal' | 'redirect',
  asChild?: boolean;
};

interface CloseButtonProps {
  children: React.ReactNode,
  mode?: 'modal' | 'redirect',
  asChild?: boolean;
};

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild
}: LoginButtonProps) =>{
  const router = useRouter();
  const onClick = () =>{
    router.push('/auth/login');
  }

  if(mode === 'modal'){
    return(
      <Dialog>
        <DialogTrigger asChild={asChild}>
          {children}
        </DialogTrigger>
        <DialogContent className="p-0 w-auto bg-trasparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    )
  }

  return(
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}

export const SigninButton = ({
  children,
  mode = "redirect",
  asChild
}: SigninButtonProps) =>{
  const router = useRouter();
  const onClick = () =>{
    router.push('/auth/register');
  }

  if(mode === 'modal'){
    return(
      <span>
        TODO: Implement modal
      </span>
    )
  }

  return(
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}

export const CloseButton = ({
  children,
  mode = "redirect",
  asChild
}: CloseButtonProps) =>{
  const router = useRouter();
  const onClick = () =>{
    router.push('/');
  }

  if(mode === 'modal'){
    return(
      <span>
        TODO: Implement modal
      </span>
    )
  }

  return(
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}