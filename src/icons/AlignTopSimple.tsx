/* GENERATED FILE */
    
import { IconBase } from "../lib";
import type { Icon, IconProps } from "../lib";
import { $ } from '@builder.io/qwik';

export const Bold = $(() => <><path d="M212,32a12,12,0,0,1-12,12H56a12,12,0,0,1,0-24H200A12,12,0,0,1,212,32ZM180,80V224a20,20,0,0,1-20,20H96a20,20,0,0,1-20-20V80A20,20,0,0,1,96,60h64A20,20,0,0,1,180,80Zm-24,4H100V220h56Z"/></>)
export const Duotone = $(() => <><path d="M168,72V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h64A8,8,0,0,1,168,72Z" opacity="0.2"/><path d="M208,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,32ZM176,72V224a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V72A16,16,0,0,1,96,56h64A16,16,0,0,1,176,72Zm-16,0H96V224h64Z"/></>)
export const Fill = $(() => <><path d="M208,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,32ZM160,56H96A16,16,0,0,0,80,72V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V72A16,16,0,0,0,160,56Z"/></>)
export const Light = $(() => <><path d="M206,32a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,32ZM174,72V224a14,14,0,0,1-14,14H96a14,14,0,0,1-14-14V72A14,14,0,0,1,96,58h64A14,14,0,0,1,174,72Zm-12,0a2,2,0,0,0-2-2H96a2,2,0,0,0-2,2V224a2,2,0,0,0,2,2h64a2,2,0,0,0,2-2Z"/></>)
export const Regular = $(() => <><path d="M208,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,32ZM176,72V224a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V72A16,16,0,0,1,96,56h64A16,16,0,0,1,176,72Zm-16,0H96V224h64Z"/></>)
export const Thin = $(() => <><path d="M204,32a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,32ZM172,72V224a12,12,0,0,1-12,12H96a12,12,0,0,1-12-12V72A12,12,0,0,1,96,60h64A12,12,0,0,1,172,72Zm-8,0a4,4,0,0,0-4-4H96a4,4,0,0,0-4,4V224a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4Z"/></>)

const weights = {
  bold: Bold,
  duotone: Duotone,
  fill: Fill,
  light: Light,
  regular: Regular,
  thin: Thin
}

const AlignTopSimple: Icon<IconProps> = (props) => (
  <IconBase {...props} weights={weights} />
);

AlignTopSimple.displayName = "AlignTopSimple";

export default AlignTopSimple;
