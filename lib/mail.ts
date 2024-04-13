import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
  email: string,
  token: string
) =>{
<<<<<<< HEAD
  const confirmLink = `https://diplom-model-auth.vercel.app/auth/new-verification?token=${token}`;
=======
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
>>>>>>> 762808bcecf07385ca7cb6077a45dda93aa018ad

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}" >here</a> to confirm email.</p>`
  })
}