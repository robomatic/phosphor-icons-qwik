import { FunctionComponent, JSXNode, QwikIntrinsicElements } from "@builder.io/qwik";

export type IconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

export interface IconProps extends Record<string, any> {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
}

export type Icon<PROPS> = (props: PROPS) => JSXNode<string | FunctionComponent<Record<string, any>>> | null;
