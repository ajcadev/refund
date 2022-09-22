import { createStitches } from "@stitches/react";
import { blue, green, red, yellow, gray, blackA, violet } from '@radix-ui/colors';

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      ...blue, ...green, ...red, ...yellow, ...gray, ...blackA, ...violet
    },
  }
})