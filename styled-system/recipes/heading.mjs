import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const headingFn = createRecipe('heading', {
  "size": "xl"
}, [])

const variantKeys = [
  "size"
]

function splitVariantProps(props) {
  return splitProps(props, variantKeys)
}

export const heading = Object.assign(headingFn, {
  __recipe__: true,
  variantKeys,
  variantMap: {
  "size": [
    "4xl",
    "3xl",
    "2xl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs"
  ]
},
  splitVariantProps,
})