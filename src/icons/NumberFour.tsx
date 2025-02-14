/* GENERATED FILE */
    
import { IconBase } from "../lib";
import type { Icon, IconProps } from "../lib";
import { $ } from '@builder.io/qwik';

export const Bold = $(() => <><path d="M188,152a12,12,0,0,1-12,12H164v44a12,12,0,0,1-24,0V164H72a12,12,0,0,1-11.3-16l40-112A12,12,0,1,1,123.3,44L89,140h51V96a12,12,0,0,1,24,0v44h12A12,12,0,0,1,188,152Z"/></>)
export const Duotone = $(() => <><path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2"/><path d="M184,152a8,8,0,0,1-8,8H160v48a8,8,0,0,1-16,0V160H72a8,8,0,0,1-7.53-10.69l40-112a8,8,0,0,1,15.06,5.38L83.35,144H144V96a8,8,0,0,1,16,0v48h16A8,8,0,0,1,184,152Z"/></>)
export const Fill = $(() => <><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM168,152h-8v32a8,8,0,0,1-16,0V152H88a8,8,0,0,1-7.43-11l32-80A8,8,0,0,1,127.43,67L99.82,136H144V104a8,8,0,0,1,16,0v32h8a8,8,0,0,1,0,16Z"/></>)
export const Light = $(() => <><path d="M182,152a6,6,0,0,1-6,6H158v50a6,6,0,0,1-12,0V158H72a6,6,0,0,1-5.65-8l40-112a6,6,0,0,1,11.3,4L80.51,146H146V96a6,6,0,0,1,12,0v50h18A6,6,0,0,1,182,152Z"/></>)
export const Regular = $(() => <><path d="M184,152a8,8,0,0,1-8,8H160v48a8,8,0,0,1-16,0V160H72a8,8,0,0,1-7.53-10.69l40-112a8,8,0,0,1,15.06,5.38L83.35,144H144V96a8,8,0,0,1,16,0v48h16A8,8,0,0,1,184,152Z"/></>)
export const Thin = $(() => <><path d="M180,152a4,4,0,0,1-4,4H156v52a4,4,0,0,1-8,0V156H72a4,4,0,0,1-3.77-5.35l40-112a4,4,0,1,1,7.54,2.69L77.68,148H148V96a4,4,0,0,1,8,0v52h20A4,4,0,0,1,180,152Z"/></>)

const weights = {
  bold: Bold,
  duotone: Duotone,
  fill: Fill,
  light: Light,
  regular: Regular,
  thin: Thin
}

const NumberFour: Icon<IconProps> = (props) => (
  <IconBase {...props} weights={weights} />
);

NumberFour.displayName = "NumberFour";

export default NumberFour;
