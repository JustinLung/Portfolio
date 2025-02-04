// See https://svelte.dev/docs/kit/types#app.d.ts

import type Lenis from 'lenis';

type PlausibleProps = { [key: string]: string | boolean | number | undefined };
type Plausible = (name: string, props: PlausibleProps) => void;

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	declare interface Window {
		Lenis: Lenis;
		plausible?: Plausible;
	}
}

export {};
