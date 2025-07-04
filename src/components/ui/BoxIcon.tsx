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
      <box-icon
        name={name}
        type={type}
        size={size}
        color={colorLight}
        className={`inline-block dark:hidden ${additionalClasses}`}
      ></box-icon>
      <box-icon
        name={name}
        type={type}
        size={size}
        color={colorDark}
        className={`hidden dark:inline-block ${additionalClasses}`}
      ></box-icon>
    </>
  );
}
