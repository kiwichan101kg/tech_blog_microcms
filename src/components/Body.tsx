"use client";
import React from "react";
import DOMPurify from "dompurify";

type BodyProps = {
  content: string;
};
const Body = ({ content }: BodyProps) => {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{
        __html: `${DOMPurify.sanitize(content)}`,
      }}
    ></div>
  );
};

export default Body;
