
import { useEffect } from 'react';
import Lenis from 'lenis';

const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) =>
                Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        let rafId = 0;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        const handleAnchorClick = (event: Event) => {
            const target = event.currentTarget as HTMLAnchorElement;
            const href = target.getAttribute('href');

            // Gestisce solo link interni del tipo #sezione
            if (!href || !href.startsWith('#') || href.length <= 1) {
                return;
            }

            const targetElement = document.getElementById(href.slice(1));

            if (targetElement) {
                event.preventDefault();
                lenis.scrollTo(targetElement);
            }
        };

        const anchors = document.querySelectorAll('a[href^="#"]');

        anchors.forEach((anchor) => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            anchors.forEach((anchor) => {
                anchor.removeEventListener('click', handleAnchorClick);
            });

            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);
};

export default useLenis;
