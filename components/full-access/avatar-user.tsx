import { auth } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LoginButton, SigninButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

const AvatarUser = async () => {
  const session = await auth();
  return (
    <span>
      {
        !session &&
        <div className="grid grid-cols-2">
          <SigninButton>
            <Button variant="link" size="lg" className="text-white">
              SignIn
            </Button>
          </SigninButton>
          <LoginButton>
            <Button variant="link" size="lg" className="text-white">
              LogIn
            </Button>
          </LoginButton>
        </div>
      }
      {
        session &&
        <Avatar>
          {session && session.user.image && <AvatarImage src={session?.user.image!} />}
          <AvatarFallback>{session?.user.name?.charAt(0)}</AvatarFallback>
        </Avatar>
      }
    </span>
  )
}


export default AvatarUser;