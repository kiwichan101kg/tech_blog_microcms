/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Blog } from "@/types/blogs";
import { formatDate } from "@/utils/formatDate";
import { CalendarIcon } from "./SVG/CalendarIcon";
import { ReloadIcon } from "./SVG/ReloadIcon";

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
              <time
                dateTime={new Date(blog.createdAt).toISOString()}
                className="text-gray-500 text-sm flex"
              >
                <span className="pr-0.5">
                  <CalendarIcon />
                </span>
                {formatDate(blog.createdAt)}
              </time>
              <time
                dateTime={new Date(blog.updatedAt).toISOString()}
                className="text-gray-500 text-sm mb-2 flex"
              >
                <span className="pr-0.5">
                  <ReloadIcon />
                </span>
                {formatDate(blog.updatedAt)}
              </time>
            </div>

            <h2 className="text-xl font-semibold mb-4">{blog.title}</h2>
            <ul className="flex flex-wrap">
              {blog.tags.map((i) => (
                <li
                  key={i.id}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
                >
                  #&nbsp;{i.tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
