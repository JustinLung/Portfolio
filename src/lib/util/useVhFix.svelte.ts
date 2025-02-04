import { media } from '$lib/util/media';
import { MediaQuery } from 'svelte/reactivity';

export function useVhFix() {
	let clientHeight = 0;
	const isDesktop = new MediaQuery(media.tablet.min);

	$effect(() => {
		// VH Hack
		const _html = document.documentElement;
		let svh = _html.clientHeight * 0.01;
		_html.style.setProperty('--svh', `${svh.toFixed(2)}px`);

		clientHeight = _html.clientHeight;

		const doResize = () => {
			svh = _html.clientHeight * 0.01;
			const pxValue = `${svh.toFixed(2)}px`;

			if (isDesktop.current) {
				_html.style.setProperty('--svh', pxValue);
				return;
			}

			// Mobile only
			if (_html.clientHeight - clientHeight > 80 || _html.clientHeight - clientHeight < -80) {
				_html.style.setProperty('--svh', pxValue);
				clientHeight = _html.clientHeight;
			}
		};

		window.addEventListener('resize', doResize, { passive: true });
		return () => {
			window.removeEventListener('resize', doResize);
		};
	});
}
