import type { Component, ComponentProps, JSX } from "solid-js";

import { Copy } from "@/components/icons";
import { css, cx } from "@/styled-system/css";

interface CopyButtonProps extends ComponentProps<"button"> {
  copyString: string;
}

export const CopyButton: Component<CopyButtonProps> = ({
  children,
  class: c,
  copyString,
  ...rest
}) => {
  const onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = () => {
    navigator.clipboard.writeText(copyString).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <button
      class={cx(
        css({
          _hover: {
            color: "gray.800",
            cursor: "pointer",
          },
        }),
        c,
      )}
      onClick={onClick}
      {...rest}
    >
      {children} <Copy />
    </button>
  );
};
