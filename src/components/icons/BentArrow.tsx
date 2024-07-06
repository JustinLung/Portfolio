import * as React from "react";
import type { SVGProps } from "react";
const SvgBentArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 8 9">
    <path
      fill="#324434"
      d="M.9 0H0v7.668h5.22v1.176l2.136-1.596L5.22 5.652v1.176H.9V0Z"
    />
  </svg>
);
export default SvgBentArrow;
