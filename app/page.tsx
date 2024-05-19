import { Poppins } from "next/font/google";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { LoginButton, SigninButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <Image
        src="/logo.png"
        alt="werfest"
        width={300}
        height={300}
        className="flex items-center justify-center drop-shadow-lg"
        />
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold drop-shadow-xl text-center text-transparent bg-clip-text bg-gradient-to-b from-orange-600 to-yellow-400",
          font.className
        )}>
          WERFEST
        </h1>
        <div>
          <LoginButton mode="modal" asChild>
            <Button
            className="
            transition-colors duration-300  font-semibold 
            "

            variant="secondary"
            size="lg"
            >
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
