/* GENERATED FILE */
    
import { IconBase } from "../lib";
import type { Icon } from "../lib";
import { $ } from '@builder.io/qwik';

export const Bold = $(() => <><path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"/></>)
export const Duotone = $(() => <><path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" opacity="0.2"/><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"/></>)
export const Fill = $(() => <><path d="M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,60a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z"/></>)
export const Light = $(() => <><path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z"/></>)
export const Regular = $(() => <><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"/></>)
export const Thin = $(() => <><path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z"/></>)

const weights = {
  bold: Bold,
  duotone: Duotone,
  fill: Fill,
  light: Light,
  regular: Regular,
  thin: Thin
}

const Dot: Icon = (props) => (
  <IconBase {...props} weights={weights} />
);

export default Dot;
