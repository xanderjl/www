import type { Component, ComponentProps, JSX } from "solid-js";

import { Copy } from "@/components/icons";

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
      class={`hover:cursor-pointer hover:text-gray-800${c ? ` ${c}` : ""}`}
      onClick={onClick}
      {...rest}
    >
      {children} <Copy />
    </button>
  );
};
