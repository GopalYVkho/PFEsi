import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero.jsx';
import PopularServices from '../components/PopularServices.jsx';
import RevealOnScroll from '../components/RevealOnScroll.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Contact from './Contact.jsx';
import FAQ from './FAQ.jsx';
import Pricing from './Pricing.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const pageRef = useRef(null);

    useLayoutEffect(() => {
        const media = gsap.matchMedia();
        const context = gsap.context(() => {
            media.add('(prefers-reduced-motion: no-preference)', () => {
                const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

                heroTimeline
                    .from('.js-hero-item', { y: 34, duration: 0.7, stagger: 0.1 })
                    .from('.js-hero-visual', { x: 52, duration: 0.9 }, '-=0.55')
                    .from('.js-float-card', { scale: 0.82, duration: 0.5, stagger: 0.12 }, '-=0.35');

                gsap.to('.js-float-panel', {
                    y: -10,
                    duration: 2.8,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                });

                gsap.to('.js-float-card', {
                    y: (index) => index === 0 ? -9 : 9,
                    duration: 2.4,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    stagger: 0.2,
                });

                gsap.to('.js-hero-blob', {
                    x: (index) => index === 0 ? 22 : -20,
                    y: (index) => index === 0 ? -12 : 12,
                    duration: 6,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    stagger: 0.35,
                });

                gsap.utils.toArray('.js-section-reveal').forEach((section) => {
                    gsap.from(section, {
                        y: 28,
                        duration: 0.78,
                        delay: Number(section.dataset.revealDelay || 0) / 1000,
                        ease: 'power3.out',
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 86%',
                            once: true,
                        },
                    });
                });

                gsap.from('.js-service-card', {
                    y: 24,
                    duration: 0.65,
                    ease: 'power3.out',
                    stagger: 0.14,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: '.js-popular-services',
                        start: 'top 72%',
                        once: true,
                    },
                });

                gsap.from('.js-why-card', {
                    y: 18,
                    duration: 0.55,
                    ease: 'power3.out',
                    stagger: 0.12,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: '.js-why-us',
                        start: 'top 68%',
                        once: true,
                    },
                });
            });
        }, pageRef);

        return () => {
            media.revert();
            context.revert();
        };
    }, []);

    return (
        <div ref={pageRef}>
            <Hero />
            <RevealOnScroll>
                <PopularServices />
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
                <WhyChooseUs />
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
                <Pricing />
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
                <FAQ />
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
                <Contact />
            </RevealOnScroll>
        </div>
    );
}
