import {getPosts} from "@/app/utils/utils";
import {Card, Column, Flex, Grid, Heading, RevealFx, Text} from "@/once-ui/components";
import {Projects} from "@/components/work/Projects";
import {baseURL, bannerURL} from "@/app/resources";
import {person, review, work} from "@/app/resources/lang/default/content";

export async function generateMetadata() {
  const title = work.title;
  const description = work.description;
  // const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
  const ogImage = `https://${baseURL}/${bannerURL}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/`,
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

export default function Work() {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/projects`,
            image: `${baseURL}/og?title=Design%20Projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
      <Projects variant={"work-page"}/>
      {
        review?.display && (
          <RevealFx>
            <Flex marginTop={"xl"} direction={"column"} gap={"l"}>
              <Heading variant={"display-strong-s"}>{review.title}</Heading>
              <Grid columns={2} gap="8">
                {
                  [...review.data].map((r, i) => {
                    return (
                      <Card key={i} border={"brand-alpha-medium"} radius={"m"} padding={"0"} cursor={"default"}>
                        <Flex style={{background: "", width: "100%", justifyContent: "center"}} padding={"m"} direction={"column"} gap={"xs"}>
                          <Text variant={"body-default-m"} onBackground={"info-medium"} align={"center"}>{r.content}</Text>
                          <Flex style={{justifyContent: "center", background: "", width: "100%"}} wrap={true} align={"center"} direction={"column"} gap={"4"} paddingTop={"m"}>
                            <Text variant={"body-default-m"} onBackground={"brand-medium"} align={"center"}>{r.author}</Text>
                            <Text variant={"body-default-m"} onBackground={"brand-weak"} align={"center"} style={{textWrap: "balance"}}>{r.project}</Text>
                          </Flex>
                        </Flex>
                      </Card>
                    )
                  })
                }
              </Grid>
            </Flex>
          </RevealFx>
        )
      }
    </Column>
  );
}
