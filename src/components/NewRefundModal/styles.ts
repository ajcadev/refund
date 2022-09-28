import { red } from "@radix-ui/colors";
import { styled } from "../../styles";
import { Button } from "../../styles/UI/Button";

// export const Flex = styled('div', { display: 'flex' });

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

// export const Label = styled('label', {
//   display: 'block',
//   marginTop: '1.5rem',

//   variants: {
//     variant: {
//       checkbox: {
//         display: 'flex',
//         gap: 5,
//         alignItems: 'center',
//         width: 'none',
//       }
//     }
//   }
// })

// export const Span = styled('span', {
//   //base styles
//   color: '$gray11',
//   marginLeft: '0.5rem',
  
//   variants: {
//     variant: {
//       block: {
//         display: 'block',
//         marginBottom: '0.25rem',
//         marginLeft: 0,
//       }
//     }
//   }
// })

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
  borderRadius: 6,
  padding: 8,

  '&[type="checkbox"]': {
    width: '1.25rem',
    height: '1.25rem',
  },

  '&:focus': {
    $$shadow: '$colors$violet8', 
    boxShadow: '0 0 0 1px $$shadow'
  },
})
