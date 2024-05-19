import { getUserByEmail } from "@/data/user";
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

const VerificationTemplateEmail = async ({confirmLink, email}: {confirmLink: string, email: string}) => {

  const user = await getUserByEmail(email);
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
                Hello {user?.name}, you are trying to log into the website <strong> werfest.vercel.app</strong>, for this you need to follow the link below to confirm your identity.
              </Text>
              <Button target="_blank" href={confirmLink} className="py-3 px-6 text-[16px] mb-[10px] border-solid border-2 border-black rounded-[8px]">
                Confirm email
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}



export default VerificationTemplateEmail;