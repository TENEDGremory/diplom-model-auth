import TwoFactor from "@/lib/template/twoFactor.template"
import PasswordReset from "@/lib/template/passwordReset.template"
import VerificationEmail from "@/lib/template/verification.template";
import { Resend } from "resend"
import { render } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string,
) =>{

  const twoFactor = render(await TwoFactor({ token, email }));

  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "jenyabasenko@gmail.com",
    subject: "2FA Code",
    html: twoFactor
  })
}

export const sendPasswordResetEmail = async(
  email: string,
  token: string
) =>{
  // const resetLink = `${domain}/auth/new-password?token=${token}`;
  const resetLink = `https://werfest.vercel.app/auth/new-password?token=${token}`;
  const resetEmail = render(await PasswordReset({resetLink, email}));

  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: "jenyabasenko@gmail.com",
    subject: "Reset your password",
    html: resetEmail
  });
};

export const sendVerificationEmail = async (
  email: string,
  token: string
) =>{
  // const confirmLink = `${domain}/auth/new-verification?token=${token}`;
  const confirmLink = `https://werfest.vercel.app/auth/new-verification?token=${token}`;
  const verificationEmail = render(await VerificationEmail( {confirmLink, email}));

  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: "jenyabasenko@gmail.com",
    subject: "Confirm your email",
    html: verificationEmail
    // html: `<p>Click <a href="${confirmLink}" >here</a> to confirm email.</p>`
  })
}
