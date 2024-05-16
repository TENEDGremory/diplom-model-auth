import {
  Body,
  Button,
  Container,
  Html,
  Link,
  Text,
  Tailwind,
  Img,
  Head,
  Preview,
  Section
} from "@react-email/components"

import logo from "@/public/logo.png"

const VerificationTemplateEmail = (confirmLink: string) => {
  return (
    <Html>
      <Head />
      <Preview>WERFEST</Preview>
      <Tailwind>
        <Body className="w-[500px] h-[300px] my-auto mx-auto border-black border border-solid rounded">
          <Container>
            <Section className="my-[10px]">
              <Img
                src="https://werfest.vercel.app/logo.png"
                width="100"
                height="100"
                alt="Vercel"
                className="my-0 mx-auto"
              />
              <Text className=
                "text-4xl font-semibold drop-shadow-xl text-center"
              >
                WERFEST
              </Text>
            </Section>
            <Section className="">
              <Link href={confirmLink}>
                Confirm
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}



export default VerificationTemplateEmail;