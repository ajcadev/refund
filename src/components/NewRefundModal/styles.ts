import { red } from "@radix-ui/colors";
import { styled } from "../../styles";
import { Button } from "../../styles/UI/Button";

export const SubmitButton = styled(Button, {
  '&[type="submit"]': {
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      transition: 'backgroundColor 0.2s',
    }, 
    marginTop: '1rem',
  }
})

export const FormRefund = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  'span': {
    color: '$gray11',
  }
})

export const Label = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  '& > p': {
    color: '$red10',
  },

  variants: {
    variant: {
      checkbox: {
        flexDirection: 'row', 
        gap: '0.5rem',
      }
    }
  }
})

export const Input = styled('input', {
  borderRadius: 4,
  padding: 8,
  $$bordercolor: '$colors$violet7',
  border: '1px solid $$bordercolor',
  outline: 'none',

  '&[type="checkbox"]': {
    width: '1.25rem',
    height: '1.25rem',
  },


  '&:not(textarea)': {
    lineHeight: 1,
    height: '2.25rem',
  },

  '&[type="file"]': {
    fontSize: '0.9rem',
    paddingTop: '0.35rem',
  },

  '&:focus': {
    $$shadow: '$colors$violet8', 
    boxShadow: '0 0 0 2px $$shadow',
  },
})
