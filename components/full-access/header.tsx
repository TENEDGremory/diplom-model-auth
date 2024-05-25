import AvatarUser from "@/components/full-access/avatar-user"
import HeaderLogo from "@/components/full-access//header-logo"
import NavigationPage from "@/components/full-access/navigation-page"


export const PublicHeader = () =>{
  return(
    <div className="relative top-0 left-0 right-0 backdrop-blur border-b flex items-center justify-around bg-transparent">
      <HeaderLogo />
      <NavigationPage />
      <AvatarUser />
    </div>
  )
}