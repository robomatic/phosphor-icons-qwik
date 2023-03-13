/* GENERATED FILE */
    
import { IconBase } from "../lib";
import type { Icon } from "../lib";
import { $ } from '@builder.io/qwik';

export const Bold = $(() => <><path d="M212,56V200a12,12,0,0,1-24,0V140H68v60a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0v60H188V56a12,12,0,0,1,24,0Z"/></>)
export const Duotone = $(() => <><path d="M200,56V200H56V56Z" opacity="0.2"/><path d="M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z"/></>)
export const Fill = $(() => <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,176a8,8,0,0,1-16,0V136H88v40a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v40h80V80a8,8,0,0,1,16,0Z"/></>)
export const Light = $(() => <><path d="M206,56V200a6,6,0,0,1-12,0V134H62v66a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v66H194V56a6,6,0,0,1,12,0Z"/></>)
export const Regular = $(() => <><path d="M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z"/></>)
export const Thin = $(() => <><path d="M204,56V200a4,4,0,0,1-8,0V132H60v68a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0v68H196V56a4,4,0,0,1,8,0Z"/></>)

const weights = {
  bold: Bold,
  duotone: Duotone,
  fill: Fill,
  light: Light,
  regular: Regular,
  thin: Thin
}

const TextH: Icon = (props) => (
  <IconBase {...props} weights={weights} />
);

export default TextH;
