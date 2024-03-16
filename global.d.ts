import type Lenis from '@studio-freight/lenis';

declare global {
  interface Window {
    Lenis: Lenis;
    Spacing: any;
  }
}
