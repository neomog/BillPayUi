"use client";

import Prism from "prismjs";
// import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";

const Code = ({ code }: { code?: any }) => {
  // Init
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-javascript">{code}</code>
    </pre>
  );
};

export default Code;
