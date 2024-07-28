import React from "react";
import { Tag as TagType } from "@/types/blogs";
import Link from "next/link";

type TagProps = {
  tag: TagType;
};
export const Tag = ({ tag }: TagProps) => {
  return (
    <Link href={`/tags/${tag.tag}`}>
      <li
        key={tag.id}
        className="text-gray-800 text-s font-medium mr-2 mb-2 px-3 py-1 border border-gray-200 rounded-md "
      >
        <span className="text-gray-300">#</span>
        &nbsp;
        <span className="text-gray-500 hover:text-blue-400 transition-colors duration-100">
          {tag.tag}
        </span>
      </li>
    </Link>
  );
};
