import {Heading, Flex, Text, Button, Avatar, RevealFx, Column, Icon, SmartLink} from "@/once-ui/components";
import {Projects} from "@/components/work/Projects";

import {baseURL, routes, bannerURL} from "@/app/resources";
import {home, about, person, contact} from "@/app/resources/lang/default/content";
import {Posts} from "@/components/blog/Posts";
import SchedulingButton from "@/components/SchedulingButton";
import {Contact} from "@/components/Contact";
import HeroHome from "@/components/hero-home/HeroHome";
import React from "react";
import CallToAction from "@/components/CallToAction";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  // const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
  const ogImage = `https://${baseURL}/${bannerURL}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <HeroHome/>
          <RevealFx translateY={"2"} fillWidth horizontal={"start"}>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem", flexDirection: "row-reverse"}}>
              <SchedulingButton variant={"primary"}/>

              <Button
                id="about"
                data-border="rounded"
                href={"mailto:devgabrielribeiro@gmail.com"}
                variant="primary"
                size="l"
              >
                <Flex gap="4" vertical="center">
                  <Icon
                    style={{marginLeft: "-0.75rem", marginRight: "0.25rem", border: "none"}}
                    paddingLeft="8" name="email" size={"s"} onBackground="info-weak"
                  />
                  {"Send me an email"}
                </Flex>
              </Button>
              
              <Button
                id="about"
                data-border="rounded"
                href="/about"
                variant="primary"
                size="l"
              >
                <Flex gap="4" vertical="center">
                  {about.avatar.display && (
                    <Avatar
                      style={{marginLeft: "-0.75rem", marginRight: "0.25rem", border: "none"}}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Flex>
              </Button>
            </div>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[4, 4]}/>
      </RevealFx>
      <RevealFx translateY="16" delay={0.7}>
        <Projects range={[6,6]}/>
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-s" wrap="balance" style={{fontWeight: 600}}>
              Latest from <SmartLink style={{marginLeft: "-0.15rem"}} href={"/blog"}>the blog</SmartLink>
            </Heading>
          </Flex>
          <Flex flex={3} wrap={true}>
            <Posts range={[1, 2]} columns="1"/>
          </Flex>
        </Flex>
      )}
      <RevealFx translateY="16" delay={0.8}>
        <Projects range={[1, 1]}/>
      </RevealFx>
      <RevealFx translateY="16" delay={0.9}>
        <Projects range={[2, 2]}/>
      </RevealFx>
      <CallToAction/>
      {contact.display && <Contact contact={contact}/>}
    </Column>
  );
}
