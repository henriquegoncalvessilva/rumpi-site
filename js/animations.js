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

    const descriptions = document.querySelectorAll(
        ".description-visualization p",
    );

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

    const ytMask = document.getElementById("yt-mask");
    const ytPlayBtn = document.getElementById("yt-play-btn");
    const ytSection = document.getElementById("video-youtube");

    if (ytMask && ytSection) {
        const ytTl = gsap.timeline({
            scrollTrigger: {
                trigger: ytSection,
                start: "50% 80%",
                end: "bottom bottom",
                scrub: 2,
            },
        });

        ytTl.to(ytMask, {
            clipPath: "circle(150% at 50% 50%)",
            ease: "none",
        });
    }

    const ytPopup = document.getElementById("yt-popup");
    const ytPopupClose = document.getElementById("yt-popup-close");
    const ytIframe = document.getElementById("yt-iframe");
    const ytVideoUrl = "https://www.youtube.com/embed/2SmGEyy85Vc?autoplay=1";

    if (ytPlayBtn && ytPopup) {
        ytPlayBtn.addEventListener("click", () => {
            ytIframe.src = ytVideoUrl;
            ytPopup.classList.add("active");
        });

        ytPopupClose.addEventListener("click", () => {
            ytPopup.classList.remove("active");
            ytIframe.src = "";
        });

        ytPopup.addEventListener("click", (e) => {
            if (e.target === ytPopup) {
                ytPopup.classList.remove("active");
                ytIframe.src = "";
            }
        });
    }

    const paths = document.querySelectorAll(".path-svg path");
    paths.forEach((path) => {
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;
        gsap.to(path.style, {
            strokeDashoffset: 10,
            ease: "none",
            scrollTrigger: {
                markers: true,
                trigger: path,
                start: "10% 80%",
                end: "bottom 150%",
                scrub: 2,
                duration: 2,
            },
        });
    });
});
