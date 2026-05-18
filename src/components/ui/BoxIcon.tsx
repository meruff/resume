// @ts-nocheck
import React from "react";

const PREFIX = { regular: "bx-", solid: "bxs-", logo: "bxl-" };
const SIZE_CLASS = { xs: "bx-xs", sm: "bx-sm", md: "bx-md", lg: "bx-lg" };

export default function BoxIcon({
  name,
  type = "regular",
  colorLight = "#0B979E",
  colorDark = "#38B2AC",
  size = "sm",
  additionalClasses = "",
}) {
  const iconClass = ["bx", `${PREFIX[type]}${name}`, SIZE_CLASS[size]]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <i
        className={`${iconClass} inline-block align-middle dark:hidden ${additionalClasses}`}
        style={{ color: colorLight }}
        aria-hidden
      />
      <i
        className={`${iconClass} hidden align-middle dark:inline-block ${additionalClasses}`}
        style={{ color: colorDark }}
        aria-hidden
      />
    </>
  );
}
