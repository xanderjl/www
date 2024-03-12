import type { PutBlobResult } from "@vercel/blob";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createSignal, Show } from "solid-js";

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
    const res = await fetch(`/api/blob/upload?filename=${file.name}`, {
      body: file,
      method: "POST",
    });
    const newBlob = (await res.json()) as PutBlobResult;

    setBlob(newBlob);
  };

  return (
    <form onSubmit={onSubmit} class="flex flex-col items-start gap-2">
      <div class="flex items-center gap-2">
        <label
          for="file"
          class="rounded-md bg-teal-400 p-2 text-white hover:bg-teal-500"
        >
          Choose File
          <input
            type="file"
            id="file"
            name="file"
            ref={inputRef}
            class="hidden"
            onClick={() => setErrorMessage(null)}
          />
        </label>
        <Show when={errorMessage()}>
          <p>{errorMessage()}</p>
        </Show>
        <Show when={Boolean(inputRef?.files?.length)}>
          <p>{inputRef?.files![0].name}</p>
        </Show>
      </div>
      <button
        type="submit"
        aria-disabled={Boolean(errorMessage())}
        disabled={Boolean(errorMessage())}
        class="hover:bg-tea-500 cursor-not-allowed rounded-md bg-teal-400 p-2 text-white disabled:bg-gray-400 disabled:hover:bg-gray-500"
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
