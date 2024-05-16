"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LoginButton, SigninButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

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
        <Avatar>
          {user.image && <AvatarImage src={user.image!} />}
          <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
        </Avatar>
      }
    </span>
  )
}


export default AvatarUser;