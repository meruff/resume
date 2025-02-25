// @ts-nocheck
import React from "react";

export default function BoxIcon({
  name,
  type,
  colorLight,
  colorDark,
  additionalClasses = "",
}) {
  return (
    <>
      <box-icon
        name={name}
        type={type}
        color={colorLight}
        className={`inline-block dark:hidden ${additionalClasses}`}
      ></box-icon>
      <box-icon
        name={name}
        type={type}
        color={colorDark}
        className={`hidden dark:inline-block ${additionalClasses}`}
      ></box-icon>
    </>
  );
}
