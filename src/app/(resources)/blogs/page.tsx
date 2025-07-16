import React, { Suspense } from 'react';
import BlogClient from './BlogClient';  // client component ko import karenge

export const metadata = {
  title: 'Blogs',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading blogs...</div>}>
      <BlogClient />
    </Suspense>
  );
}
