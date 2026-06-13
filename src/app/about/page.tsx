import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import {baseURL, bannerURL} from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import {person, about, social, review} from "@/app/resources/lang/default/content";
import SchedulingButton from "@/components/SchedulingButton";
import AnimatedComponents from "@/components/animated-components/animated-componets";
import {HeroAbout} from "@/components/HeroAbout";
import React, {JSX} from "react";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  // const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
  const ogImage = `https://${baseURL}/${bannerURL}`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
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

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/img/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />
      
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{top: "50%", transform: "translateY(-50%)"}}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          {/*@ts-ignore*/}
          <TableOfContents structure={structure} about={about}/>
        </Column>
      )}
      
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl"/>
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe"/>
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    <Text variant={"body-default-m"}>{language}</Text>
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <AnimatedComponents>
          <Column className={styles.blockAlign} flex={9} maxWidth={40}>
            <Column
              id={about.intro.title}
              fillWidth
              minHeight="160"
              vertical="center"
              marginBottom="32"
            >
              <SchedulingButton/>
              <HeroAbout/>
              
              {social.length > 0 && (
                <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                  {social.map(
                    (item) =>
                      item.link && (
                        <>
                          <Button
                            className="s-flex-hide"
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="l"
                            variant="secondary"
                          />
                          <IconButton
                            className="s-flex-show"
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </>
                      ),
                  )}
                </Flex>
              )}
            </Column>
            
            {about.intro.display && (
              <Column textVariant="body-default-m" fillWidth gap="m" marginBottom="xl">
                {about.intro.description}
              </Column>
            )}
            
            {about.work.display && (
              <>
                <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                  {about.work.title}
                </Heading>
                <Column fillWidth gap="l" marginBottom="40">
                  {about.work.experiences.map((experience, index) => (
                    <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                      <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4" gap={"s"} wrap={true}>
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      </Flex>
                      <Text variant="body-default-m" onBackground="brand-weak" marginBottom="m">
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="16">
                        {experience.achievements.map((achievement: JSX.Element, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ))}
                      </Column>
                      {experience.images.length > 0 && (
                        <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                          {experience.images.map((image, index) => (
                            <Flex
                              key={index}
                              border="neutral-medium"
                              radius="m"
                              //@ts-ignore
                              minWidth={image.width}
                              //@ts-ignore
                              height={image.height}
                            >
                              <SmartImage
                                enlarge
                                radius="m"
                                //@ts-ignore
                                sizes={image.width.toString()}
                                //@ts-ignore
                                alt={image.alt}
                                //@ts-ignore
                                src={image.src}
                              />
                            </Flex>
                          ))}
                        </Flex>
                      )}
                    </Column>
                  ))}
                </Column>
              </>
            )}
            
            {about.studies.display && (
              <>
                <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                  {about.studies.title}
                </Heading>
                <Column fillWidth gap="l" marginBottom="40">
                  {about.studies.institutions.map((institution, index) => (
                    <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                      <Text variant="heading-strong-l" onBackground={"neutral-strong"}>
                        {institution.name}
                      </Text>
                      <Text variant="body-default-m" onBackground={"brand-weak"}>
                        {institution.school}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                    </Column>
                  ))}
                </Column>
              </>
            )}
            
            {about.technical.display && (
              <>
                <Heading
                  as="h2"
                  id={about.technical.title}
                  variant="display-strong-s"
                  marginBottom="40"
                >
                  {about.technical.title}
                </Heading>
                <Column fillWidth gap="l">
                  {about.technical.skills.map((skill, index) => (
                    <Column key={`${skill}-${index}`} fillWidth gap="4">
                      <Text variant="heading-strong-l">{skill.title}</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {skill.description}
                      </Text>
                      {skill.images && skill.images.length > 0 && (
                        <Flex fillWidth paddingTop="s" gap="12" wrap>
                          {skill.images.map((image, index) => (
                            <Flex
                              key={index}
                              border="neutral-medium"
                              radius="m"
                              //@ts-ignore
                              minWidth={image.width}
                              //@ts-ignore
                              height={image.height}
                            >
                              <SmartImage
                                enlarge
                                radius="m"
                                //@ts-ignore
                                sizes={image.width.toString()}
                                //@ts-ignore
                                alt={image.alt}
                                //@ts-ignore
                                src={image.src}
                              />
                            </Flex>
                          ))}
                        </Flex>
                      )}
                    </Column>
                  ))}
                </Column>
              </>
            )}
            
            {
              social?.find(s => s.icon === "github") && (
                <Flex background={"brand-weak"} border={"brand-weak"} radius={"s"} padding={"s"} marginTop={"l"} gap="8" center={true}>
                  <Icon name={"github"} size={"s"} onBackground={"brand-weak"}/>
                  {/*@ts-ignore*/}
                  <Text onBackground={"brand-weak"}>Follow my work on <a href={social?.find(s => s.icon === "github")["link"]}>Github</a></Text>
                </Flex>
              )
            }
          </Column>
        </AnimatedComponents>
      </Flex>
    </Column>
  );
}
