import {Flex} from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import {baseURL, bannerURL} from "@/app/resources";
import {gallery, person} from "@/app/resources/content";

export async function generateMetadata() {
  const title = gallery.title;
  const description = gallery.description;
  // const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
  const ogImage = `https://${baseURL}/${bannerURL}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/gallery`,
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

export default function Gallery() {
  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: gallery.title,
            description: gallery.description,
            url: `https://${baseURL}/gallery`,
            image: gallery.images.map((image) => ({
              "@type": "ImageObject",
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
            author: {
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
      <MasonryGrid/>
    </Flex>
  );
}
