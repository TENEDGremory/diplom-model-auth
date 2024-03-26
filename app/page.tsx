import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {


  console.log("WHERE I AM?");
  return (
    <main className="flex flex-col items-center justify-center h-full  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400 to-orange-700">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md text-center",
          font.className
        )}>
          🔐 Auth
        </h1>
        <p className="text-white text-lg">
          A simple authenification service
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
