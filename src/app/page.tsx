import { client } from "@/lib/client";
import Link from "next/link";
import type { BlogResponse } from "@/types/blogs";

export default async function Home() {
  const data: BlogResponse = await client.get({ endpoint: "blogs" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {data.contents.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}> {blog.title}</Link>
          </li>
        ))}
      </div>
    </main>
  );
}
