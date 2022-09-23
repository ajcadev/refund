import { styled } from "../../styles";
import { Button } from "../../styles/UI/Button";

export const Flex = styled('div', { display: 'flex' });

export const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,
});

export const Label = styled('label', {
  fontSize: 15,
  color: '$violet11',
  width: 90,
  textAlign: 'right',
});

export const Input = styled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: '$violet11',
  $$shadow: '$colors$violet7',
  boxShadow: '0 0 0 1px $$shadow',
  height: 35,

  '&:focus': {
    $$shadow: '$colors$violet8', 
    boxShadow: '0 0 0 2px $$shadow'
  },
});

export const SubmitButton = styled(Button, {
  '&[type="submit"]': {
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      transition: 'backgroundColor 0.2s',
    }



  }
})
