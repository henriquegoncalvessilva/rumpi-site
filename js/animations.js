document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const mosaicItems = document.querySelectorAll(".mosaic-item");

    mosaicItems.forEach((item, index) => {
        gsap.fromTo(
            item,
            {
                opacity: 0,
                scale: 0,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "elastic.out(1, 1)",
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    end: "top 90%",
                    toggleActions: "play none none reverse",
                },
                delay: index * 0.2,
            },
        );
    });

    const stackCards = document.querySelectorAll(".stack-card");

    if (stackCards.length > 0) {
        stackCards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,

                    ease: "elastic.out(1, 1)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "top center",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        });
    }

    let split = SplitText.create(".text-hero", { type: "words, chars" });
    let tl = gsap.timeline();
    tl.from(split.chars, {
        duration: 0.4,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
    }).to(
        ".rumpi-span",
        {
            opacity: 1,
            backgroundColor: "#2810e8",
        },
        "+=0.05",
    );
});
