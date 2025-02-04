export default function disableScroll(disabled: boolean) {
	const { Lenis } = window;
	if (!Lenis) return;
	if (disabled) {
		Lenis.stop();
	} else {
		Lenis.start();
	}
	document.body.style.setProperty('overflow', disabled ? 'hidden' : 'initial');
}
