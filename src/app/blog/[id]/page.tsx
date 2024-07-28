/* eslint-disable @next/next/no-img-element */
import { client } from "@/lib/client";
import React from "react";
import type { Blog } from "@/types/blogs";
import { sanitize } from "@/lib/sanitize";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import { Date } from "@/components/Date";
import { Tag } from "@/components/Tag";

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
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="bg-white shadow-md rounded-lg p-6 w-full md:max-w-3xl">
        <div className="flex justify-center">
          <img
            src={data.eyecatch.url}
            alt={data.title}
            width={data.eyecatch.width}
            height={data.eyecatch.height}
            className="rounded-lg w-full"
          />
        </div>
        <div className="py-6">
          <Date createdAt={data.createdAt} updatedAt={data.updatedAt} />
          <h1 className="text-4xl font-bold mt-4">{data.title}</h1>

          <ul className="flex flex-wrap">
            {data.tags.map((i) => (
              <Tag key={i.id} tag={i} />
            ))}
          </ul>
        </div>

        <hr />
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
