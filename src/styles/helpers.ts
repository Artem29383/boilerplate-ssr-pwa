import { css } from 'styled-components';

export const windowHeightValue = `var(--vh, 1vh) * 100`;

export const windowHeightMixin = css`
  height: calc(${windowHeightValue});
`;
