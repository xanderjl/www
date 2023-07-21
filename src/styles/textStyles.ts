import { defineTextStyles } from '@pandacss/dev';

const textStyles = defineTextStyles({
  body: {
    value: {
      fontFamily: '\'DM Mono\', monospace',
      fontWeight: 'normal',
      fontSize: 'md',
      lineHeight: 1,
      letterSpacing: '0',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
});

export default textStyles;
