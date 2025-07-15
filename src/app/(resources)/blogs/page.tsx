// src/app/(resources)/blogs/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { decode } from 'html-entities';
import { useSearchParams, useRouter } from 'next/navigation';

const categories = [
  "Blog",
  "Cybersecurity",
  "Financial",
  "Growth",
  "Marketing",
  "Retail",
  "Tech",
];

// Fetch blog posts
async function getPosts({
  page = 1,
  search = "",
  category = "",
}: {
  page: number;
  search: string;
  category: string;
}) {
  let url = `/api/blogs?page=${page}`;

  if (search) url += `&search=${encodeURIComponent(search)}`;
  if (category) url += `&category=${encodeURIComponent(category)}`;

  const res = await fetch(url);

  if (!res.ok) {
    if (res.status === 400 || res.status === 404) {
      return { posts: [], totalPages: 1 };
    }
    throw new Error("Failed to fetch posts");
  }

  return await res.json();
}

// Main Blog Page Component
export default function BlogPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  
  const search = searchParams.get('search') || '';
  const selectedCategory = searchParams.get('category') || '';
  const pageParam = parseInt(searchParams.get('page') || '');
  const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getPosts({
          page: currentPage,
          search,
          category: selectedCategory,
        });
        setPosts(result.posts);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, search, selectedCategory]);

  const buildQuery = (page: number) => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (selectedCategory) params.set('category', selectedCategory);
    params.set('page', page.toString());
    return `/blogs?${params.toString()}`;
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get('search') as string;
    
    const params = new URLSearchParams();
    if (searchValue) params.set('search', searchValue);
    if (selectedCategory) params.set('category', selectedCategory);
    params.set('page', '1');
    
    router.push(`/blogs?${params.toString()}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">All Blog Posts</h1>

      {/* Search */}
      <form onSubmit={handleSearch} className="mb-6 flex gap-3">
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search blogs..."
          className="w-full border px-4 py-2 rounded"
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/blogs?category=${encodeURIComponent(cat)}${search ? `&search=${search}` : ''}`}
            className={`px-4 py-1 border rounded text-sm ${selectedCategory.toLowerCase() === cat.toLowerCase()
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
              }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="text-center py-10">
          <p>Loading posts...</p>
        </div>
      )}

      {/* Blog List */}
      <ul className="space-y-10">
        {!loading && posts.length === 0 ? (
          <p className="text-center text-gray-500">No blog posts found.</p>
        ) : (
          posts.map((post: any) => {
            const title = decode(post.title.rendered);
            const excerpt = decode(post.excerpt.rendered.replace(/<[^>]+>/g, ""));
            const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
            const date = new Date(post.date).toLocaleDateString();
            const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

            return (
              <li
                key={post.id}
                className="bg-white shadow-sm hover:shadow-md border rounded overflow-hidden transition"
              >
                <Link href={`/blogs/${post.slug}`}>
                  <div className="md:flex">
                    {image ? (
                      <div className="md:w-1/3 h-52 relative">
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="md:w-1/3 h-52 bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                        No image available
                      </div>
                    )}
                    <div className="p-5 md:w-2/3">
                      <h2 className="text-2xl font-semibold mb-2 text-gray-900 hover:underline">
                        {title}
                      </h2>
                      <p className="text-gray-600 mb-3 text-sm">{excerpt}</p>
                      <div className="text-sm text-gray-500 flex gap-4">
                        <span>📅 {date}</span>
                        <span>🏷️ {category}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })
        )}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-2 flex-wrap">
        {currentPage > 1 && (
          <Link
            href={buildQuery(currentPage - 1)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded"
          >
            ← Prev
          </Link>
        )}

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <Link
              key={page}
              href={buildQuery(page)}
              className={`px-3 py-2 text-sm rounded ${page === currentPage
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {page}
            </Link>
          );
        })}

        {currentPage < totalPages && (
          <Link
            href={buildQuery(currentPage + 1)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded"
          >
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}