/* GENERATED FILE */
    
import { IconBase } from "../lib";
import type { Icon, IconProps } from "../lib";
import { $ } from '@builder.io/qwik';

export const Bold = $(() => <><path d="M178,78A84,84,0,1,0,78,178,84,84,0,1,0,178,78ZM220,160a60.75,60.75,0,0,1-.38,6.65l-44-44a83.62,83.62,0,0,0,4-19.39A59.83,59.83,0,0,1,220,160ZM36,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,36,96Zm67.28,83.66a83.62,83.62,0,0,0,19.39-4l44,44A60.75,60.75,0,0,1,160,220,59.83,59.83,0,0,1,103.28,179.66Zm88.53,31.18-46.73-46.73a85,85,0,0,0,19-19l46.73,46.73A60.45,60.45,0,0,1,191.81,210.84Z"/></>)
export const Duotone = $(() => <><path d="M232,160a72,72,0,0,1-143.6,7.6h0a73.37,73.37,0,0,0,7.6.4,72,72,0,0,0,72-72,73.37,73.37,0,0,0-.4-7.6h0A72,72,0,0,1,232,160Z" opacity="0.2"/><path d="M174.63,81.35a80,80,0,1,0-93.28,93.28,80,80,0,1,0,93.28-93.28ZM32,96a64,64,0,1,1,64,64A64.07,64.07,0,0,1,32,96ZM160,224A63.81,63.81,0,0,1,98,176,80.07,80.07,0,0,0,176,98,64,64,0,0,1,160,224Z"/></>)
export const Fill = $(() => <><path d="M174.63,81.35a80,80,0,1,0-93.28,93.28,80,80,0,1,0,93.28-93.28ZM96,160a64,64,0,1,1,64-64A64.07,64.07,0,0,1,96,160Z"/></>)
export const Light = $(() => <><path d="M172.91,83.08a78,78,0,1,0-89.83,89.83,78,78,0,1,0,89.83-89.83ZM226,160a65.31,65.31,0,0,1-.62,8.9l-53.76-53.77A77.84,77.84,0,0,0,174,96c0-.17,0-.34,0-.51A65.8,65.8,0,0,1,226,160Zm-79.29-4.81,55.5,55.5A66,66,0,0,1,182.52,222l-54.8-54.81A77.86,77.86,0,0,0,146.71,155.19Zm8.48-8.48a77.86,77.86,0,0,0,12-19L222,182.52a66,66,0,0,1-11.35,19.69ZM30,96a66,66,0,1,1,66,66A66.08,66.08,0,0,1,30,96Zm65.49,78H96a77.84,77.84,0,0,0,19.13-2.38l53.77,53.76A65.87,65.87,0,0,1,95.49,174Z"/></>)
export const Regular = $(() => <><path d="M174.63,81.35a80,80,0,1,0-93.28,93.28,80,80,0,1,0,93.28-93.28ZM224,160c0,1.52-.07,3-.18,4.51l-50-50A80.14,80.14,0,0,0,176,98,63.81,63.81,0,0,1,224,160Zm-77.4-2.09,52.61,52.62A64,64,0,0,1,183,219.7l-51.86-51.86A80.5,80.5,0,0,0,146.6,157.91Zm11.31-11.31a80.5,80.5,0,0,0,9.93-15.44L219.7,183a64,64,0,0,1-9.17,16.19ZM32,96a64,64,0,1,1,64,64A64.07,64.07,0,0,1,32,96ZM98,176a80.14,80.14,0,0,0,16.5-2.13l50,50c-1.49.11-3,.18-4.51.18A63.81,63.81,0,0,1,98,176Z"/></>)
export const Thin = $(() => <><path d="M171.17,84.82a76,76,0,1,0-86.35,86.35,76,76,0,1,0,86.35-86.35ZM228,160a68.63,68.63,0,0,1-1.27,13.07l-57.34-57.34A76,76,0,0,0,172,96c0-1,0-2-.07-2.94A67.79,67.79,0,0,1,228,160Zm-81.19-7.54,58.33,58.34A68.14,68.14,0,0,1,182,224.33l-57.78-57.78A76.35,76.35,0,0,0,146.81,152.46Zm5.65-5.65a76.35,76.35,0,0,0,14.09-22.6L224.33,182a68.14,68.14,0,0,1-13.53,23.15ZM28,96a68,68,0,1,1,68,68A68.07,68.07,0,0,1,28,96Zm65.06,75.93c1,0,2,.07,2.94.07a76,76,0,0,0,19.73-2.61l57.34,57.34A68.63,68.63,0,0,1,160,228,67.79,67.79,0,0,1,93.06,171.93Z"/></>)

const weights = {
  bold: Bold,
  duotone: Duotone,
  fill: Fill,
  light: Light,
  regular: Regular,
  thin: Thin
}

const Subtract: Icon<IconProps> = (props) => (
  <IconBase {...props} weights={weights} />
);

Subtract.displayName = "Subtract";

export default Subtract;
