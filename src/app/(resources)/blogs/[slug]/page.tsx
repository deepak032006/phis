import { notFound } from "next/navigation";
import { decode } from "html-entities";
import Image from "next/image";

// Fetch all slugs at build time
export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://phishdefense.com/wp-json/wp/v2/posts?per_page=100&_fields=slug",
      { next: { revalidate: 3600 } } // Revalidate every hour
    );
    
    if (!res.ok) return [];
    
    const posts = await res.json();
    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}

type PageProps = {
  params: {
    slug: string;
  };
};

// Fetch single post by slug
async function getPost(slug: string) {
  try {
    const res = await fetch(
      `https://phishdefense.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch post: ${res.status} ${res.statusText}`);
    }

    const posts = await res.json();
    return posts?.[0] || null;
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}

export default async function PostPage({ params }: PageProps) {
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