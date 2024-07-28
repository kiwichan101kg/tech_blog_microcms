import React from "react";
import { CalendarIcon } from "./SVG/CalendarIcon";
import { ReloadIcon } from "./SVG/ReloadIcon";
import { formatDate } from "@/utils/formatDate";

type DateProps = {
  createdAt: string;
  updatedAt: string;
};
export const Date = ({ createdAt, updatedAt }: DateProps) => {
  return (
    <div className="flex gap-2">
      <time
        // dateTime={new Date(createdAt).toISOString()}
        className="text-gray-500 text-sm flex"
      >
        <span className="pr-0.5">
          <CalendarIcon />
        </span>
        {formatDate(createdAt)}
      </time>
      <time
        // dateTime={new Date(updatedAt).toISOString()}
        className="text-gray-500 text-sm mb-2 flex"
      >
        <span className="pr-0.5">
          <ReloadIcon />
        </span>
        {formatDate(updatedAt)}
      </time>
    </div>
  );
};
