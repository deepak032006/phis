// src/app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import { getCategoryId } from '../../../../utils/wp-api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const page = parseInt(searchParams.get('page') || '1');
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';

  let url = `https://phishdefense.com/wp-json/wp/v2/posts?_embed&per_page=5&page=${page}`;

  if (search) url += `&search=${encodeURIComponent(search)}`;
  if (category) {
    const id = await getCategoryId(category);
    if (id) url += `&categories=${id}`;
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

    return NextResponse.json({
      posts: data,
      totalPages
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}