/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type HeadingVariant = {
  size: "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs"
}

type HeadingVariantMap = {
  [key in keyof HeadingVariant]: Array<HeadingVariant[key]>
}

export type HeadingVariantProps = {
  [key in keyof HeadingVariant]?: ConditionalValue<HeadingVariant[key]>
}

interface HeadingRecipe {
  __type: HeadingVariantProps
  (props?: HeadingVariantProps): string
  variantMap: HeadingVariantMap
  variantKeys: Array<keyof HeadingVariant>
  splitVariantProps<Props extends HeadingVariantProps>(props: Props): [HeadingVariantProps, Pretty<Omit<Props, keyof HeadingVariantProps>>]
}

/** Styles for heading components */
export declare const heading: HeadingRecipe