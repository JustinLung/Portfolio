import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 20 14">
    <path fill="currentColor" d="m13 14 7-7-7-7-1.05 1.05 5.2 5.2H0v1.5h17.15l-5.2 5.2L13 14Z" />
  </svg>
);
export default SvgArrow;
