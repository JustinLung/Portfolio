// Simple state
export const isReact = $state<boolean>(false);

// Object state
// interface isReactType {
// 	isObject: boolean;
// 	name: string;
// }

// const isReact = $state<isReactType>({ isObject: true, name: 'isReact' });

// Class state, nice for having complex state
// export class isReact {
// 	#current = $state(false);

// 	get current() {
// 		return this.#current;
// 	}

// 	set current(value: boolean) {
// 		this.#current = value;
// 	}

// 	toggle() {
// 		//For example, do something with the state
// 		this.#current = !this.#current;
// 	}
// }
