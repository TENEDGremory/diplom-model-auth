"use client"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const HeaderLogo = () => {
  return (
    <Link href="/">
      <Avatar className="h-16 w-16">
        <AvatarImage src="/logo.png" />
        <AvatarFallback>W</AvatarFallback>
      </Avatar>
    </Link>
  )
}


export default HeaderLogo;