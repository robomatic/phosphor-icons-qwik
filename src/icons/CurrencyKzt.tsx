/* GENERATED FILE */
    
import { IconBase } from "../lib";
import type { Icon, IconProps } from "../lib";
import { $ } from '@builder.io/qwik';

export const Bold = $(() => <><path d="M212,100a12,12,0,0,1-12,12H140V212a12,12,0,0,1-24,0V112H56a12,12,0,0,1,0-24H200A12,12,0,0,1,212,100ZM56,64H200a12,12,0,0,0,0-24H56a12,12,0,0,0,0,24Z"/></>)
export const Duotone = $(() => <><path d="M200,56V96H56V56Z" opacity="0.2"/><path d="M208,96a8,8,0,0,1-8,8H136V216a8,8,0,0,1-16,0V104H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM56,64H200a8,8,0,0,0,0-16H56a8,8,0,0,0,0,16Z"/></>)
export const Fill = $(() => <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm48,96H136v72a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"/></>)
export const Light = $(() => <><path d="M206,96a6,6,0,0,1-6,6H134V216a6,6,0,0,1-12,0V102H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,96ZM56,62H200a6,6,0,0,0,0-12H56a6,6,0,0,0,0,12Z"/></>)
export const Regular = $(() => <><path d="M208,96a8,8,0,0,1-8,8H136V216a8,8,0,0,1-16,0V104H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM56,64H200a8,8,0,0,0,0-16H56a8,8,0,0,0,0,16Z"/></>)
export const Thin = $(() => <><path d="M204,96a4,4,0,0,1-4,4H132V216a4,4,0,0,1-8,0V100H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,96ZM56,60H200a4,4,0,0,0,0-8H56a4,4,0,0,0,0,8Z"/></>)

const weights = {
  bold: Bold,
  duotone: Duotone,
  fill: Fill,
  light: Light,
  regular: Regular,
  thin: Thin
}

const CurrencyKzt: Icon<IconProps> = (props) => (
  <IconBase {...props} weights={weights} />
);

CurrencyKzt.displayName = "CurrencyKzt";

export default CurrencyKzt;
