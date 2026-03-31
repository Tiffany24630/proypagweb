import * as React from "react";

export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-orange-500 to-yellow-400 text-black shadow-lg hover:scale-105 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}