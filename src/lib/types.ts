import { FunctionComponent } from "@builder.io/qwik/jsx-runtime";

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

export type Icon = FunctionComponent<Record<string, any>>;
