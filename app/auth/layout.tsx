import { CloseButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

const AuthLayout = ({
    children
}:
    {
        children: React.ReactNode
    }) => {
    return (
        <div className="relative h-[90vh] flex items-center justify-center text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900">
            <CloseButton>
                <Button variant="outline" size="icon" className="text-black rounded-full absolute top-10 right-10">
                    X
                </Button>
            </CloseButton>

            {children}
        </div>
    )
}

export default AuthLayout;