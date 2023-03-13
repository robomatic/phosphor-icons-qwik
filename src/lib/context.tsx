import {
  useContextProvider,
  component$,
  useStore,
  Slot,
  createContextId,
} from "@builder.io/qwik";
import type { IconProps } from "./types";

export const IconContext = createContextId("phosphor.icons.icon-context");

export const IconContextProvider = component$((props: IconProps) => {
  const store = useStore<IconProps>({
    color: (props.color ?? "currentColor"),
    size: (props.size ?? "1em"),
    weight: (props.weight ?? "regular"),
    mirrored: (props.mirrored ?? false),
    ...props
  });

  useContextProvider(IconContext, store);

  return (
    <>
      <Slot />
    </>
  );
});
