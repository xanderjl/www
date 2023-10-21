import type { PutBlobResult } from "@vercel/blob";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createSignal, Show } from "solid-js";

import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

export const UploadForm: Component<ComponentProps<"form">> = () => {
  let inputRef: HTMLInputElement | undefined;
  const [blob, setBlob] = createSignal<PutBlobResult | null>(null);
  const [errorMessage, setErrorMessage] = createSignal<string | null>(null);

  const onSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = async (
    event,
  ) => {
    event.preventDefault();

    if (!inputRef?.files?.length) {
      setErrorMessage("Please select a file to submit");
      throw new Error("No file selected");
    }

    const file = inputRef?.files[0];
    const res = await fetch(`/api/resume/upload?filename=${file.name}`, {
      body: file,
      method: "POST",
    });
    const newBlob = (await res.json()) as PutBlobResult;

    setBlob(newBlob);
  };

  return (
    <form
      onSubmit={onSubmit}
      class={flex({
        alignItems: "start",
        flexDir: "column",
        gap: 2,
      })}
    >
      <div class={flex({ alignItems: "center", gap: 2 })}>
        <label
          for="file"
          class={css({
            _hover: {
              bg: "teal.500",
            },
            bg: "teal.400",
            borderRadius: "md",
            color: "white",
            p: 2,
          })}
        >
          Choose File
          <input
            type="file"
            id="file"
            name="file"
            ref={inputRef}
            class={css({ display: "none" })}
            onClick={() => setErrorMessage(null)}
          />
        </label>
        <Show when={errorMessage()}>
          <p>{errorMessage()}</p>
        </Show>
      </div>
      <button
        type="submit"
        aria-disabled={Boolean(errorMessage())}
        disabled={Boolean(errorMessage())}
        class={css({
          _disabled: {
            _hover: {
              bg: "gray.500",
            },
            bg: "gray.400",
          },
          _hover: {
            bg: "teal.500",
          },
          bg: "teal.400",
          borderRadius: "md",
          color: "white",
          p: 2,
        })}
      >
        Submit
      </button>
      <Show when={blob()}>
        <p>File uploaded!</p>
        <p>
          <a href={blob()?.url} target="_blank" rel="noopener noreferrer">
            {blob()?.url}
          </a>
        </p>
      </Show>
    </form>
  );
};
