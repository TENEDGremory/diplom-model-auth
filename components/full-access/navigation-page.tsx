"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { routesNavigation } from '@/lib/routes-navigation';

const NavigationPage = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      {routesNavigation.map((route) => (
        <Button
          key={route.label}
          variant="ghost"
          size="lg"
          className="uppercase"
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