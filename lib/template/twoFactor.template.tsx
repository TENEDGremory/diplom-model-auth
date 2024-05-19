import {
  Body,
  Button,
  Container,
  Html,
  Text,
  Tailwind,
  Img,
  Head,
  Preview,
  Section
} from "@react-email/components"
import { getUserByEmail } from "@/data/user";

const TwoFactorTemplateEmail = async ({token, email}: {token: string, email: string}) => {

  const user = await getUserByEmail(email);
  console.log(user);
  return (
    <Html> 
      <Head />
      <Preview>WERFEST</Preview>
      <Tailwind>
        <Body className="w-[500px] max-h-[400px] my-auto mx-auto border-black border border-solid rounded-[8px] box-content">
          <Container>
            <Section className="my-[10px]">
              <Img
                src="https://werfest.vercel.app/logo.png"
                width="100"
                height="100"
                alt="Vercel"
                className="my-0 mx-auto transform rotate-45"
              />
              <Text className=
                "text-4xl font-semibold drop-shadow-xl text-center"
              >
                WERFEST
              </Text>
            </Section>
            <Section className="px-[20px] text-center text-balance">
              <Text className="text-black text-[16px] leading-[24px]">
              Hello {user?.name}, you are trying to log into your account on the website <strong> werfest.vercel.app</strong>, to do this you need to enter the code below in the field that appears on the site to log into your account.
              </Text>
              <Text className="text-center mt-2 text-[20px]">
                {token}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}



export default TwoFactorTemplateEmail;