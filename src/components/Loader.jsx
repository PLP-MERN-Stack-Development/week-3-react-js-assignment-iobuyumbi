import React from "react";

export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mr-3"></div>
      <span className="text-blue-500 font-medium">{text}</span>
    </div>
  );
}
