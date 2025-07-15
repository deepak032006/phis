// src/utils/wp-api.ts
export async function getCategoryId(name: string): Promise<number | undefined> {
  const res = await fetch(`https://phishdefense.com/wp-json/wp/v2/categories?search=${encodeURIComponent(name)}`);
  const data = await res.json();
  if (!Array.isArray(data) || data.length === 0) return undefined;
  return data[0].id;
}