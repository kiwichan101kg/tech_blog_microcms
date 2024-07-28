/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Blog } from "@/types/blogs";
import { Date } from "@/components/Date";

type CardProps = {
  blog: Blog;
};
const Card = ({ blog }: CardProps) => {
  return (
    <div
      key={blog.id}
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <Link href={`blog/${blog.id}`}>
        <div className="cursor-pointer">
          {blog?.eyecatch?.url && (
            <img
              src={blog.eyecatch.url}
              alt=""
              width={blog.eyecatch.width}
              height={blog.eyecatch.height}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6">
            <div className="flex gap-2">
              <Date createdAt={blog.createdAt} updatedAt={blog.updatedAt} />
            </div>
            <h2 className="text-xl font-semibold mb-4">{blog.title}</h2>
            <ul className="flex flex-wrap"></ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
