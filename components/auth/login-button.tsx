"use client"

import { useRouter } from "next/navigation";

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
}: SigninButtonProps) =>{
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