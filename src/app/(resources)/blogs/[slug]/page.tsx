import { notFound } from "next/navigation";
import { decode } from "html-entities";
import Image from "next/image";
import type { Metadata } from "next";

// ✅ Fetch the post by slug
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

// ✅ Used exactly how Next.js expects
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const res = await fetch(
      "https://phishdefense.com/wp-json/wp/v2/posts?per_page=100&_fields=slug",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const posts = await res.json();

    return (posts as { slug: string }[]).map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}

// ✅ Inline the props instead of using custom type
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post not found",
      openGraph: {
        title: "Post not found",
        description: "This blog post could not be found.",
        url: `https://phishdefense.com/blogs/${params.slug}`,
        siteName: "PhishDefense",
        images: [{ url: "https://phishdefense.com/default-og.jpg" }],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: "Post not found",
        description: "This blog post could not be found.",
        images: ["https://phishdefense.com/default-og.jpg"],
      },
    };
  }

  const title = decode(post.title.rendered);
  const excerpt = decode(post.excerpt.rendered.replace(/<[^>]+>/g, ""));
  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://phishdefense.com/default-og.jpg";
  const url = `https://phishdefense.com/blogs/${post.slug}`;

  return {
    title,
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

// ✅ Page component with correct inline typing
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  const title = decode(post.title.rendered);
  const content = post.content.rendered;
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

  return (
    <article className="max-w-4xl mx-auto px-5 py-26">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>

      <div className="text-gray-500 text-sm mb-6">
        <span>📅 {date}</span> &nbsp; | &nbsp; <span>🏷️ {category}</span>
      </div>

      {image && (
        <div className="mb-6">
          <Image
            src={image}
            alt={title}
            width={800}
            height={400}
            className="rounded-md object-cover w-full"
            priority
          />
        </div>
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
