"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(rootSelector: string) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(`${rootSelector} [data-reveal]`).forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(`${rootSelector} [data-reveal-stagger]`).forEach((group) => {
        gsap.fromTo(
          group.children,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(`${rootSelector} [data-parallax]`).forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, [rootSelector]);
}
