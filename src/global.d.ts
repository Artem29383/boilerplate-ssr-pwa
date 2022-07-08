/* eslint-disable no-var */
/* eslint-disable vars-on-top */

declare module 'mini-css-extract-plugin';

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.woff' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module 'flubber' {
  export const interpolate: (
    input: string,
    output: string
  ) => (progress: number) => string;
}
