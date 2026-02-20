document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  const mosaicItems = document.querySelectorAll('.mosaic-item');
  
  mosaicItems.forEach((item, index) => {
    gsap.fromTo(item,
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
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.2
      }
    );
  });

 });