import { Expo } from 'gsap';
import { animate, stagger, type Easing } from 'motion';

interface Params extends IntersectionObserverInit {
    options?: IntersectionObserverInit;
    duration?: number;
    replay?: {
        duration?: number;
        delay?: number;
        staggerStart?: number;
    };
    delay?: number;
    y?: number;
    stagger?: number;
    staggerStart?: number;
    loop?: boolean;
    easing?: any;
    trackPage?: boolean;
    animationValues?: {
        start: any;
        end: any;
    };
}

const defaultsParams: Params = {
    duration: 0.6,
    delay: 0,
    y: 20,
    stagger: undefined,
    staggerStart: 0.1,
    loop: false,
    options: {},
    easing: Expo.easeOut,
    trackPage: true
};

export const fadein = (node: HTMLElement, params?: Params) => {
    const {
        options,
        duration,
        replay,
        delay,
        loop,
        y = 20,
        animationValues,
        staggerStart,
        trackPage,
        easing,
        stagger: _stagger
    } = { ...defaultsParams, ...params };
    if (!params) {
        return;
    }
    let animatedOnce = false;
    let played = false;

    animate(
        _stagger && node.children.length
            ? (node.children as unknown as Element[])
            : node,
        {
            opacity: 0,
            y: y,
            ...animationValues?.start
        },
        {
            duration: 0.00001
        }
    );

    let animation = animate(
        _stagger && node.children.length
            ? (node.children as unknown as Element[])
            : node,
        {
            opacity: [0, 1],
            y: [y, 0],
            ...animationValues?.end
        },
        {
            duration,
            easing: easing,
            delay: delay ? 0.2 + delay : stagger(_stagger, { start: staggerStart })
        }
    );

    animation.stop();
    animation.finished.then(() => {
        animatedOnce = true;

        animation = animate(
            _stagger && node.children.length
                ? (node.children as unknown as Element[])
                : node,
            {
                opacity: [0, 1],
                y: [y, 0],
                ...animationValues?.end
            },
            {
                duration: animatedOnce && (replay?.duration ?? duration),
                easing: easing,
                delay: delay
                    ? 0.2 + (animatedOnce && (replay?.delay ?? delay))
                    : stagger(_stagger, {
                        start: animatedOnce && (replay?.staggerStart ?? staggerStart)
                    })
            }
        );

        animation.cancel();

        if (!loop) {
            observer.disconnect();
        }
    });

    const observer = new IntersectionObserver((entries) => {
        const intersect = entries[0].isIntersecting;

        if (intersect && !played) {
            animation.play();
            played = true;
        }
        if (!intersect && loop) {
            played = false;
            animation.cancel();
            animation.currentTime = 0;
        }
    }, options);

    if (trackPage) {
        observer.observe(node);
    }

    return {
        update(params: Params) {
            if (!params) {
                return;
            }

            if (!params.trackPage) return;
            observer.observe(node);
        },
        destroy() {
            if (!params) {
                return;
            }

            observer.disconnect();
            animation.stop();
        }
    };
};
