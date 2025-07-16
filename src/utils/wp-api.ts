export async function getCategoryId(name: string): Promise<number | undefined> {
  try {
    const res = await fetch(`https://phishdefense.com/wp-json/wp/v2/categories?search=${encodeURIComponent(name)}`);

    if (!res.ok) {
      console.error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
      return undefined;
    }

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) return undefined;

    return data[0].id;
  } catch (error) {
    console.error('Error fetching category ID:', error);
    return undefined;
  }
}
