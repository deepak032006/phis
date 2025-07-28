import { NextResponse } from 'next/server';
import { getCategoryId } from '../../../../utils/wp-api';


// Static export configuration
export const dynamic = "force-static";
export const revalidate = false;  

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const pageParam = searchParams.get('page');
  const page = pageParam && !isNaN(Number(pageParam)) && Number(pageParam) > 0 ? Number(pageParam) : 1;

  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';

  let url = `https://phishdefense.com/wp-json/wp/v2/posts?_embed&per_page=5&page=${page}`;

  if (search) url += `&search=${encodeURIComponent(search)}`;

  if (category) {
    try {
      const id = await getCategoryId(category);
      if (id) url += `&categories=${id}`;
    } catch (error) {
      console.error(`Error fetching category ID for "${category}":`, error);
      // Optionally return error response here or continue without filtering by category
    }
  }

  try {
    const res = await fetch(url);

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch posts' },
        { status: res.status }
      );
    }

    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
    const data = await res.json();

    return NextResponse.json(
      {
        posts: data,
        totalPages
      },
      {
        headers: {
          'Cache-Control': 'public, max-age=60', // cache for 1 minute
        },
      }
    );
  } catch (err) {
    console.error('Failed to fetch WordPress posts:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
