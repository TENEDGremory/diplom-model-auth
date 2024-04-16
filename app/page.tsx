import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { LoginButton, SigninButton } from "@/components/auth/login-button";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {


  console.log("WHERE I AM?");
  return (
    <main className="flex flex-col items-center justify-center h-full  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-800 to-teal-950">
      <Image
        src="/logo.png"
        alt="werfest"
        width={300}
        height={300}
        className="flex items-center justify-center"
      />
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md text-center",
          font.className
        )}>
          🍁 WERFEST
        </h1>

        <div className="grid grid-cols-2">
          <SigninButton>
            <Button variant="secondary" size="lg">
              SignIn
            </Button>
          </SigninButton>
          <LoginButton>
            <Button variant="secondary" size="lg">
              LogIn
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
