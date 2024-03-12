import type { Component, ComponentProps } from "solid-js";

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
      class={`rounded-md bg-red-400 p-2 text-white hover:bg-red-500${c ? ` ${c}` : ""}`}
      onClick={() => {
        fetch(url, { method: "DELETE" });
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
