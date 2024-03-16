// @custom-media --sm (min-width: 30em);
// @custom-media --md (min-width: 48em);
// @custom-media --lg (min-width: 62em);
// @custom-media --xl (min-width: 80em);
// @custom-media --xxl (min-width: 96em);

const breakpoints = {
  mobile: '30em',
  tablet: '48em',
  laptop: '62em',
  desktop: '80em',
};

type Breakpoints = keyof typeof breakpoints;

type BreakpointFunction = (breakpoint: Breakpoints) => string;

type BetweenFunction = (firstBreakpoint: Breakpoints, secondBreakpoint: Breakpoints) => string;

export function getSizeFromBreakpoint(breakpointValue: Breakpoints) {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  } else if (parseInt(breakpointValue, undefined)) {
    return breakpointValue;
  } else {
    console.error('No valid breakpoint or size specified for media.');
    return '0';
  }
}

const max: BreakpointFunction = breakpoint =>
  `@media (max-width: ${getSizeFromBreakpoint(breakpoint)})`;

const min: BreakpointFunction = breakpoint =>
  `@media (min-width: ${getSizeFromBreakpoint(breakpoint)})`;

const between: BetweenFunction = (firstBreakpoint, secondBreakpoint) => `
    @media (min-width: ${getSizeFromBreakpoint(
      firstBreakpoint,
    )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint)})`;

export const media = {
  mobile: {
    min: `(min-width: ${getSizeFromBreakpoint('mobile')})`,
    max: `(max-width: ${getSizeFromBreakpoint('mobile')})`,
  },
  tablet: {
    min: `(min-width: ${getSizeFromBreakpoint('tablet')})`,
    max: `(max-width: ${getSizeFromBreakpoint('tablet')})`,
  },
  laptop: {
    min: `(min-width: ${getSizeFromBreakpoint('laptop')})`,
    max: `(max-width: ${getSizeFromBreakpoint('laptop')})`,
  },
  desktop: {
    min: `(min-width: ${getSizeFromBreakpoint('desktop')})`,
    max: `(max-width: ${getSizeFromBreakpoint('desktop')})`,
  },
  min,
  max,
  between,
};
