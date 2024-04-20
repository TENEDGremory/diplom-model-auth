"use client"

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { routesNavigation } from '@/lib/routes-navigation';

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

const NavigationPage = () => {
  return (
    <div className={
      cn(
        "flex items-center justify-center gap-5 text-white",
        font.className
      )
    }>
      {routesNavigation.map((route) => (
        <Button
          key={route.label}
          variant="outline"
          size="lg"
          className="uppercase bg-zian-800 drop-shadow-md"
          >
          <Link href={route.href}>
            {route.label}
          </Link>
        </Button>
      ))}
    </div>
  )
}


export default NavigationPage;