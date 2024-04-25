"use client"

import { logout } from "@/actions/logout"

interface LogoutButtonProps{
  children?: React.ReactNode
}

export const LogoutButton = ({
  children
} : LogoutButtonProps) =>{
  const onClick = () =>{
    logout();
  }

  return(
    <span onClick={onClick} className="flex items-center justify-center cursor-pointer">
      {children}
    </span>
  );
};