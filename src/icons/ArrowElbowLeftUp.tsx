/* GENERATED FILE */
    
import { IconBase } from "../lib";
import type { Icon, IconProps } from "../lib";
import { $ } from '@builder.io/qwik';

export const Bold = $(() => <><path d="M236,192a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V77L40.49,104.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48a12,12,0,0,1-17,17L92,77V180H224A12,12,0,0,1,236,192Z"/></>)
export const Duotone = $(() => <><path d="M128,96H32L80,48Z" opacity="0.2"/><path d="M224,184H88V104h40a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,32,104H72v88a8,8,0,0,0,8,8H224a8,8,0,0,0,0-16ZM80,59.31,108.69,88H51.31Z"/></>)
export const Fill = $(() => <><path d="M232,192a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V104H32a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,128,104H88v80H224A8,8,0,0,1,232,192Z"/></>)
export const Light = $(() => <><path d="M230,192a6,6,0,0,1-6,6H80a6,6,0,0,1-6-6V62.49L36.24,100.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48a6,6,0,1,1-8.48,8.48L86,62.49V186H224A6,6,0,0,1,230,192Z"/></>)
export const Regular = $(() => <><path d="M232,192a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V67.31L37.66,101.66A8,8,0,0,1,26.34,90.34l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L88,67.31V184H224A8,8,0,0,1,232,192Z"/></>)
export const Thin = $(() => <><path d="M228,192a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V57.66L34.83,98.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48a4,4,0,0,1-5.66,5.66L84,57.66V188H224A4,4,0,0,1,228,192Z"/></>)

const weights = {
  bold: Bold,
  duotone: Duotone,
  fill: Fill,
  light: Light,
  regular: Regular,
  thin: Thin
}

const ArrowElbowLeftUp: Icon<IconProps> = (props) => (
  <IconBase {...props} weights={weights} />
);

ArrowElbowLeftUp.displayName = "ArrowElbowLeftUp";

export default ArrowElbowLeftUp;
