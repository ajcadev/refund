import { styled } from "..";
import { Button } from "../UI/Button";

export const RefundContainer = styled('div', {
  width: '100%',
  maxWidth: 1120,
  margin: '64px auto 0',
  padding: '0 24px',
})

export const NewRefundButton = styled(Button, {})

export const RefundsTable = styled('table', {
  borderCollapse: 'collapse',
  margin: '25px 0',
  fontSize: '0.9em',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
  width: '100%',
  backgroundColor: 'white',
  color: '$gray11',

  'thead tr': {
    backgroundColor: '#009879',
    color: '#ffffff',
    textAlign: 'left',
    textTransform: 'uppercase',

    'th:first-child': {
      borderTopLeftRadius: 8,
    },

    'th:last-child': {
      borderTopRightRadius: 8,
    }
  },

  'th, td': {
    padding: '12px 15px',
  },

  'tbody tr': {
    borderBottom: 'thin solid #dddddd',
  },

  'tbody tr:last-of-type': {
    borderBottom: '2px solid #009879',
  },

})

export const State = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: 999,
  padding: '4px 5px',

  variants: {
    variant: {
      processing: {
        color: '$yellow11',
      },
      success: {
        color: '$green11',
      },
      failed: {
        color: '$red11',
      },
    }
  },
  defaultVariants: {
    variant: 'processing',
  },
})