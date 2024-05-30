"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { LoginButton, SigninButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { 
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"
import { LogoutButton } from "../auth/logout-button";
import { ExitIcon } from "@radix-ui/react-icons";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const AvatarUser = () => {
  const user = useCurrentUser();
  return (
    <span>
      {
        !user &&
        <div className="grid grid-cols-2 gap-4">
          <SigninButton mode="modal" asChild>
            <Button
            className="
              transition-colors duration-300 font-semibold text-white
            "

            variant="link"
            size="lg"
            >
              Sign in
            </Button>
          </SigninButton>
          <LoginButton mode="modal" asChild>
            <Button
            className="
              transition-colors duration-300 font-semibold text-white
            "

            variant="link"
            size="lg"
            >
              Log in
            </Button>
          </LoginButton>
        </div>
      }
      {
        user &&
        <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""}/>
          <AvatarFallback>
            <FaUser />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem>
        <Link href="/settings">
          <Button
            
            variant="outline"
            size="lg"
            className="uppercase bg-zian-800 drop-shadow-md"
          >
            Settings
          </Button>
        </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      }
    </span>
  )
}


export default AvatarUser;