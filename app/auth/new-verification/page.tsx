import NewVerificationForm from "@/components/auth/new-verification-form";
import { Suspense } from "react"

const NewVerificationPAge = () =>{
  return(
    <Suspense>
      <NewVerificationForm />
    </Suspense>
  )
}

export default NewVerificationPAge;