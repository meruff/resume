// @ts-nocheck
import React from "react";

export default function BoxIcon({
  name,
  type = "regular",
  colorLight = "#0B979E",
  colorDark = "#38B2AC",
  size = "sm",
  additionalClasses = "",
}) {
  return (
    <>
      <span className={`inline-flex dark:hidden ${additionalClasses}`}>
        <box-icon
          name={name}
          type={type}
          size={size}
          color={colorLight}
          className="block"
        ></box-icon>
      </span>
      <span className={`hidden dark:inline-flex ${additionalClasses}`}>
        <box-icon
          name={name}
          type={type}
          size={size}
          color={colorDark}
          className="block"
        ></box-icon>
      </span>
    </>
  );
}
