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
          start: "top 90%",
          end: "top 90%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.2
      }
    );
  });

  const stackCards = document.querySelectorAll('.stack-card');
  
  if (stackCards.length > 0) {
    stackCards.forEach((card, index) => {
      
      const isEven = index % 2 === 0;
      const startX = isEven ? 800 : -800; 
      
      gsap.set(card, {
        x: startX,
        opacity: 0,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "top 40%",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          
          const x = startX * (1 - progress);
          const opacity = progress; 
          
          gsap.to(card, {
            x: x,
            opacity: opacity,
            duration: 0,
            ease: "none",
          });
        },
        onComplete: () => {
          gsap.set(card, {
            x: 0,
            opacity: 1,
          });
        },
      });
    });
  }

 });