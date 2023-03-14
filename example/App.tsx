import { $, component$, useSignal } from "@builder.io/qwik";
import * as Icons from "../src/icons";
import type { IconWeight } from "../src";

export default component$(() => {
  const color = useSignal<string>("crimson");
  const weight = useSignal<IconWeight>("regular");

  const onHeartClick = $(() => {
    color.value = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  });

  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <p
        style={{
          verticalAlign: "middle",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick$={onHeartClick}
      >
        Made with{" "}
        <Icons.Heart
          size={32}
          color={color}
          style={{ verticalAlign: "middle" }}
          weight="fill"
          alt="heart symbol"
        />{" "}
        from Bub Tub.
      </p>
      <div>
        <Icons.SpinnerGap class="loader" size={32} />
      </div>
      <Icons.Cube
        style={{ cursor: "pointer" }}
        color="darkorange"
        size={32}
        weight="duotone"
        onClick$={() => (weight.value = "duotone")}
      />
      <Icons.Cube
        style={{ cursor: "pointer" }}
        color="darkmagenta"
        size={32}
        weight="fill"
        onClick$={() => (weight.value = "fill")}
      />
      <Icons.Cube
        style={{ cursor: "pointer" }}
        color="royalblue"
        size={32}
        weight="bold"
        onClick$={() => (weight.value = "bold")}
      />
      <Icons.Cube
        style={{ cursor: "pointer" }}
        size={32}
        weight="regular"
        onClick$={() => (weight.value = "regular")}
      >
        <title>I have children!</title>
      </Icons.Cube>
      <Icons.Cube
        style={{ cursor: "pointer" }}
        color="crimson"
        size={32}
        weight="light"
        onClick$={() => (weight.value = "light")}
      />
      <Icons.Cube
        style={{ cursor: "pointer" }}
        color="teal"
        size={32}
        weight="thin"
        onClick$={() => (weight.value = "thin")}
      />
      {Object.entries(Icons).map(([name, I]) => {
        return (
          <div class="row" key={I.displayName}>
            <span class="name">{I.displayName}</span>
            <div class="icons" title={I.displayName}>
              <I />
              <I mirrored color="darkorange" size={24} />
              <I mirrored color="darkmagenta" size={24} />
              <I mirrored color="royalblue" size={24} />
              <I weight={weight.value} size={32} />
              <I weight={weight.value} color="crimson" size={32} />
              <I weight={weight.value} color="teal" size={32} />
              <I weight="thin" color={color} size={48} />
              <I weight="light" color={color} size={48} />
              <I weight="regular" color={color} size={48} />
              <I weight="bold" color={color} size={48} />
              <I weight="fill" color={color} size={48} />
              <I weight="duotone" color={color} size={48} />
            </div>
          </div>
        );
      })}
    </div>
  );
});
