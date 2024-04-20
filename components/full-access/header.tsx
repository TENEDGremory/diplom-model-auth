import AvatarUser from "@/components/full-access/avatar-user"
import HeaderLogo from "@/components/full-access//header-logo"
import NavigationPage from "@/components/full-access/navigation-page"


export const PublicHeader = () =>{
  return(
    <div className="flex items-center justify-around bg-zinc-800">
      <HeaderLogo />
      <NavigationPage />
      <AvatarUser />
    </div>
  )
}