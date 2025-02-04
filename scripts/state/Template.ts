// // Simple state
export const STATE = $state<boolean>(false);

// // Object state
// interface STATEType {
// 	isObject: boolean;
// 	name: string;
// }

// const STATE = $state<STATEType>({ isObject: true, name: 'STATE' });

// // Class state, nice for having complex state
// export class STATE {
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
