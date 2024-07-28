// lib/sanitize.ts
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

// JSDOMを使ってDOMPurifyのインスタンスを作成
const window = new JSDOM("").window;
const DOMPurifyInstance = DOMPurify(window);

export const sanitize = (dirty: string) => {
  return DOMPurifyInstance.sanitize(dirty);
};
