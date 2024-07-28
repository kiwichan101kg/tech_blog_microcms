import { client } from "@/lib/client";
import React from "react";
import type { Blog } from "@/types/blogs";
import { sanitize } from "@/lib/sanitize";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";

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

  // codeにシンタックスハイライトを当てる
  const $ = cheerio.load(data.content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
        {" "}
        <h2>{data.title}</h2>
        <p>{data.createdAt}</p>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: `${sanitize($.html())}`,
          }}
        ></div>
      </div>
    </main>
  );
}
