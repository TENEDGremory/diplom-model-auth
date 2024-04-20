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
    <main className="flex flex-col items-center justify-center h-full bg-zinc-800">
      <Image
        src="/logo.png"
        alt="werfest"
        width={300}
        height={300}
        className="flex items-center justify-center"
      />
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold drop-shadow-xl text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300",
          font.className
        )}>
          WERFEST
        </h1>
      </div>
    </main>
  );
}
