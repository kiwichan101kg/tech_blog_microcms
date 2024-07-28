import { client } from "@/lib/client";
import type { BlogResponse } from "@/types/blogs";
import Card from "@/components/Card";

export default async function Home() {
  const data: BlogResponse = await client.get({ endpoint: "blogs" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">技術記事一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.contents.map((blog) => (
            <Card key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}
