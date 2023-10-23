import type { Component, ComponentProps } from "solid-js";

import { css, cx } from "@/styled-system/css";

interface DeleteBlobButtonProps extends ComponentProps<"button"> {
  url: string;
}

export const DeleteBlobButton: Component<DeleteBlobButtonProps> = ({
  children,
  class: c,
  url,
  ...rest
}) => {
  return (
    <button
      class={cx(
        css({
          _hover: {
            bg: "red.500",
          },
          bg: "red.400",
          borderRadius: "md",
          color: "white",
          p: 2,
        }),
        c,
      )}
      onClick={() => {
        fetch(url, { method: "DELETE" });
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
