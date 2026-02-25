document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

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


    const descriptions = document.querySelectorAll(".description-visualization p");

    descriptions.forEach((description) => {
        const split = SplitText.create(description, { type: "words, chars" });
        gsap.from(split.words, {
            scrollTrigger: {
                trigger: description,
                start: "top 80%",
                end: "top 80%",
                toggleActions: "play play reverse reverse",
            },
            y: 10,
            autoAlpha: 0,
            stagger: 0.02,
        });
    });

    gsap.to("#text-scramble", {
        duration: 5,
        scrambleText: "Organize, controle e planeje tudo em um só lugar.",        
    });
});
