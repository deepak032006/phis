import type { Metadata } from "next";
import { decode } from "html-entities";

// Make sure this matches the getPost function used in the page component
async function getPost(slug: string) {
  try {
    const res = await fetch(
      `https://phishdefense.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch post: ${res.status} ${res.statusText}`);
    }

    const posts = await res.json();
    return posts?.[0] || null;
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
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
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
  
  // Construct absolute URL for openGraph
  const url = new URL(`/blogs/${post.slug}`, "https://phishdefense.com").toString();

  // Base metadata
  const metadata: Metadata = {
    title,
    description: excerpt,
  };

  // Add openGraph only if image is available
  if (image) {
    metadata.openGraph = {
      title,
      description: excerpt,
      url,
      siteName: "PhishDefense",
      images: [{ url: image }],
      type: "article",
    };

    metadata.twitter = {
      card: "summary_large_image",
      title,
      description: excerpt,
      images: [image],
    };
  } else {
    // Fallback without images
    metadata.openGraph = {
      title,
      description: excerpt,
      url,
      siteName: "PhishDefense",
      type: "article",
    };

    metadata.twitter = {
      card: "summary",
      title,
      description: excerpt,
    };
  }

  return metadata;
}