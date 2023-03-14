/* GENERATED FILE */
    
import { IconBase } from "../lib";
import type { Icon, IconProps } from "../lib";
import { $ } from '@builder.io/qwik';

export const Bold = $(() => <><path d="M241.73,135l-52,72a12,12,0,0,1-19.46,0L76,76.5,33.73,135A12,12,0,1,1,14.27,121l52-72a12,12,0,0,1,19.46,0L180,179.5,222.27,121A12,12,0,1,1,241.73,135Z"/></>)
export const Duotone = $(() => <><path d="M76,56l52,72H24Zm156,72H128l52,72Z" opacity="0.2"/><path d="M238.48,132.68l-52,72a8,8,0,0,1-13,0L76,69.66l-45.51,63a8,8,0,1,1-13-9.36l52-72a8,8,0,0,1,13,0l97.51,135,45.51-63a8,8,0,1,1,13,9.36Z"/></>)
export const Fill = $(() => <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-9.85,93.12-40,48A8,8,0,0,1,160,184h-.43a8,8,0,0,1-6.23-3.55l-58-87.09L62.15,133.12a8,8,0,0,1-12.3-10.24l40-48a8,8,0,0,1,12.81.68l58.05,87.09,33.14-39.77a8,8,0,1,1,12.3,10.24Z"/></>)
export const Light = $(() => <><path d="M236.86,131.51l-52,72a6,6,0,0,1-9.72,0L76,66.25,28.86,131.51a6,6,0,1,1-9.72-7l52-72a6,6,0,0,1,9.72,0L180,189.75l47.14-65.26a6,6,0,0,1,9.72,7Z"/></>)
export const Regular = $(() => <><path d="M238.48,132.68l-52,72a8,8,0,0,1-13,0L76,69.66l-45.51,63a8,8,0,1,1-13-9.36l52-72a8,8,0,0,1,13,0l97.51,135,45.51-63a8,8,0,1,1,13,9.36Z"/></>)
export const Thin = $(() => <><path d="M235.24,130.34l-52,72a4,4,0,0,1-6.48,0L76,62.83,27.24,130.34a4,4,0,1,1-6.48-4.68l52-72a4,4,0,0,1,6.48,0L180,193.17l48.76-67.51a4,4,0,0,1,6.48,4.68Z"/></>)

const weights = {
  bold: Bold,
  duotone: Duotone,
  fill: Fill,
  light: Light,
  regular: Regular,
  thin: Thin
}

const WaveTriangle: Icon<IconProps> = (props) => (
  <IconBase {...props} weights={weights} />
);

WaveTriangle.displayName = "WaveTriangle";

export default WaveTriangle;
