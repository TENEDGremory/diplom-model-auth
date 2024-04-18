interface RoutesNavigationProps {
  label: string
  href: string
}

export const routesNavigation : RoutesNavigationProps[] = [
  {label: "login", href: '/auth/login'},
  {label:"register", href: '/auth/register'},
  {label:"settings", href:'/api/settings'}
]
