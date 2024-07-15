import { client } from "@/lib/client";
import React from "react";
import type { Blog } from "@/types/blogs";
import DOMPurify from "dompurify";
import Body from "@/components/Body";

type Props = {
  params: {
    id: string;
  };
};
export default async function Blog({ params }: Props) {
  const data: Blog = await client.get({
    endpoint: "blogs",
    contentId: params.id,
  });

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>
        <h2>{data.title}</h2>
        <p>{data.createdAt}</p>
        <Body content={data.content} />
      </div>
    </main>
  );
}
