import type { Metadata } from "next";
import { decode } from "html-entities";

async function getPost(slug: string) {
  const res = await fetch(
    `https://phishdefense.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } }
  );
  const posts = await res.json();
  return posts?.[0] || null;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return {
      title: "Post not found",
      description: "This blog post could not be found.",
    };
  }

  const title = decode(post.title.rendered);
  const excerpt = decode(post.excerpt.rendered.replace(/<[^>]+>/g, ""));
  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://phishdefense.com/default-og.jpg";
  const url = `https://phishdefense.com/blogs/${post.slug}`;

  return {
    title, // This will plug into layout's title template
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      url,
      siteName: "PhishDefense",
      images: [{ url: image }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
      images: [image],
    },
  };
}
