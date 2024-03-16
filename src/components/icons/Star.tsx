import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 18 18">
    <path
      fill="currentColor"
      d="m7.187 6.678-4.832.557 3.493 3.064-.995 4.786 3.966-2.319 4.282 2.359-1.04-4.463 3.595-3.347-4.57-.365-2.062-4.498-1.837 4.226zM9 0l2.75 6 6.25.5-4.833 4.5 1.416 6.083-5.75-3.167-5.416 3.167 1.333-6.417L0 6.5l6.5-.75L9 0z"
    />
  </svg>
);
export default SvgStar;
