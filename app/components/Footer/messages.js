/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Footer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Remember the basic safety rules.',
  },
  subheader: {
    id: `${scope}.subheader`,
    defaultMessage:
      '',
  },
  ul_li1: {
    id: `${scope}.ul_li1`,
    defaultMessage:
      '',
  },
  ul_li2: {
    id: `${scope}.ul_li2`,
    defaultMessage:
      '',
  },
  warning: {
    id: `${scope}.warning`,
    defaultMessage:
      '',
  },
  footer: {
    id: `${scope}.footer`,
    defaultMessage:
      'This site uses cookies to provide services at the highest level. By clicking or navigating the site, you agree to allow our collection of information on through cookies. For more information on security, please visit:',
  },
  buttonContent: {
    id: `${scope}.buttonContent`,
    defaultMessage: 'Privacy rules',
  },
});
