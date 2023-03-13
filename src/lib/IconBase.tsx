import { IconContext } from './context'
import type { IconProps } from './types'
import {
  component$,
  type JSXChildren,
  useContext,
  Slot,
  useTask$,
  useStore,
} from '@builder.io/qwik'

interface IconBaseProps extends IconProps {
  weights: { [index: string]: JSXChildren }
}

const IconBase = component$((props: IconBaseProps) => {
  const { alt, color, size, weight, mirrored, weights, ...restProps } = props

  const {
    color: contextColor = 'currentColor',
    size: contextSize,
    weight: contextWeight = 'regular',
    mirrored: contextMirrored = false,
    ...restContext
  } = useContext<IconProps>(IconContext) ?? {}

  const store = useStore<{ weight: any }>({ weight: undefined })

  useTask$(async ({ track }) => {
    track(() => weight)
    const theWeight = weight ?? contextWeight
    store.weight = weights[theWeight]
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? 'scale(-1, 1)' : undefined}
      {...restContext}
      {...restProps}
    >
      {!!alt && <title>{alt}</title>}
      <Slot />
      <store.weight />
    </svg>
  )
})

export default IconBase
