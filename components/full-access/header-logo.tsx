"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const HeaderLogo = () =>{
  return(
    <Avatar className="h-16 w-16">
      <AvatarImage src="/logo.png"/>
      <AvatarFallback>W</AvatarFallback>
    </Avatar>
  )
}


export default HeaderLogo;