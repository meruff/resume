import React from "react";

export default function Card({ children }) {
  return (
    <div className="relative p-6 bg-gradient-to-br from-gray-200/25 via-gray-200/25 to-custom-light/10 dark:from-gray-900 dark:via-custom-dark/10 rounded-lg shadow-lg">
      {children}
    </div>
  );
}
