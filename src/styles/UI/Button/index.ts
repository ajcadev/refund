import { styled } from "../..";

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  cursor: 'pointer',

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: '$violet11',
        $$shadow: '$colors$blackA7',
        boxShadow: '0 2px 10px $$shadow',
        '&:hover': { backgroundColor: '$gray3' },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: '$green5',
        color: '$green11',
        '&:hover': { backgroundColor: '$green6' },
        '&:focus': {
          $$shadow: '$colors$green9', 
          boxShadow: '0 0 0 2px $$shadow'
        },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});