const lenis = new Lenis({
    autoRaf: true,
});

const containerOffers = document.getElementById("offers-cards");
const cardsOffers = [
    {
        title: "Gestão do catálogo",
        description:
            "Possua controle sobre seu catálogo e todos os seus lançamentos em um só lugar.",
    },
    {
        title: "Monitore com precisão",
        description:
            "Acompanhe números atualizados de plays, receitas e engajamento, enquanto monitora sua evolução.",
    },
    {
        title: "Split de Royalties",
        description:
            "Gerencie a divisão de royalties entre os envolvidos de forma automática e precisa.",
    },
    {
        title: "Análise de dados",
        description:
            "Obtenha insights detalhados sobre o desempenho das suas músicas e tome decisões informadas.",
    },
    {
        title: "Organização de ativos musicais",
        description:
            "Mantenha todos os seus ativos musicais organizados e facilmente acessíveis.",
    },
    {
        title: "Previsão de royalties",
        description:
            "Projete seus ganhos futuros com base em dados históricos e tendências de mercado.",
    },
    {
        title: "Organização dos créditos",
        description:
            "Gerencie e atribua créditos corretamente para todos os colaboradores das suas músicas.",
    },
    {
        title: "Backup de Arquivos",
        description:
            "Garanta a segurança dos seus arquivos com backups automáticos e armazenamento confiável.",
    },

];
containerOffers.innerHTML = cardsOffers
    .map(
        (card, index) => `
        <div
            class="carousel-item min-h-[290px] flex-shrink-0 w-[205px] md:w-[316px] lg:w-[400px] bg-[#f4f5f5] border border-[#2810e8] shadow-[-16px_4px_0px_0px_#fff200] p-0 flex flex-col h-full">
          <div class="pl-[12px] py-[16px] px-[12px] border-b border-[#2810e8] ">
            <span class="text-[#2810e8] font-bold text-[1.25rem]">${index + 1} / ${cardsOffers.length}</span>
          </div>
          <div class="pl-[12px] py-[24px] border-b border-[#2810e8] border-opacity-0">
            <h3 class="text-[#2810e8] font-bold text-[1.5rem]">${card.title}</h3>
          </div>
          <div class="px-[12px] py-[24px]">
            <p class="text-[#2810e8] text-[1.25rem] tracking-[-0.08em] font-medium">
              ${card.description}
            </p>
          </div>
        </div>
    `,
    )
    .join("");

function initOffersCarousel() {
    const carousel = document.getElementById("offers-cards");
    const prevBtn = document.getElementById("offers-prev");
    const nextBtn = document.getElementById("offers-next");
    const indicatorsContainer = document.getElementById("offers-indicators");
    
    let currentIndex = 0;
    let itemsPerView = 1;
    
    function getItemsPerView() {
        const width = window.innerWidth;
        if (width >= 768) return 4;
        return 1;
    }
    
    function updateItemsPerView() {
        itemsPerView = getItemsPerView();
        updateCarousel();
        createIndicators();
    }
    
    function createIndicators() {
        const totalSlides = Math.ceil(cardsOffers.length / itemsPerView);
        indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = `carousel-indicator ${i === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
    }
    
    function updateCarousel() {
        if (!carousel.children.length) return;
        
        const width = window.innerWidth;
        const itemWidth = carousel.children[0].offsetWidth;
        
        const currentItemsPerView = getItemsPerView();
        if (currentItemsPerView !== itemsPerView) {
            itemsPerView = currentItemsPerView;
        }
        
        const totalSlides = Math.ceil(cardsOffers.length / itemsPerView);
        
        if (currentIndex >= totalSlides) {
            currentIndex = Math.max(0, totalSlides - 1);
        }
        
        let slideOffset;
        
        if (width >= 768) {
            const gridGap = 41;
            const columnsPerView = 2;
            slideOffset = currentIndex * (columnsPerView * itemWidth + gridGap);
        } else {
            const mobileGap = 30;
            slideOffset = currentIndex * itemsPerView * (itemWidth + mobileGap);
        }
        
        carousel.style.transform = `translateX(-${slideOffset}px)`;
        
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalSlides - 1;
        
        document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        const totalSlides = Math.ceil(cardsOffers.length / itemsPerView);
        currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
        updateCarousel();
    }
    
    function nextSlide() {
        const totalSlides = Math.ceil(cardsOffers.length / itemsPerView);
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateCarousel();
        }
    }
    
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const newItemsPerView = getItemsPerView();
            if (newItemsPerView !== itemsPerView) {
                currentIndex = 0;
                updateItemsPerView();
            }
        }, 250);
    });
    
    updateItemsPerView();
}

if (containerOffers) {
    initOffersCarousel();
}

const containerPricing = document.getElementById("pricing-cards");
const cardsPricing = [
    {
        header: "Plano 1 - Artista Independente",
        title: "Sugestão de perfil: até 10 mil seguidores no Spotify",
        price: "R$ 49.90",
        features: [
            "- Até 3 perfis para administrar",
            "- Até 10 splits automatizados na plataforma",
            "- Até 5 pagamentos para terceiros.",
            "- Até 100 MB de backup por conta.",
        ],
    },
    {
        header: "Plano 2 -  Artista emergente",
        title: "Sugestão: entre 10 e 100 mil seguidores no Spotify",
        price: "R$149.90",
        features: [
            "- Até 10 perfis para administrar",
            "- Até 50 splits automatizados na plataforma",
            "- Até 20 pagamentos para terceiros",
            "- Até 100 MB de backup por artista",
        ],
    },
    {
        header: "Plano 3 -  Artista estabelecido",
        title: "Sugestão:  Entre 100 mil e 1 milhão de seguidores no Spotify",
        price: "R$149.90",
        features: [
            "- Até 10 perfis para administrar",
            "- Até 100 splits automatizados na plataforma",
            "- Até 20 pagamentos para terceiros",
            "- Até 100 MB de backup por artista",
        ],
    },
    {
        header: "Plano 4 - Selos e Agências",
        title: "Sugestão: Até 30 perfis para administrar, com opção de organização por selo e sub-selos",
        price: "R$599.90",
        features: [
            "- Até 30 perfis para administrar, com opção de organização por selo e sub-selos",
            "- Até 200 split automatizados (para receber e cobrar)",
            "- Até 50 pagamentos para terceiros",
            "- Até 1GB de backup por artista + espaço extra para informações do selo/agência",
        ],
    },

    {
        header: "Plano 5 - Artista AAA",
        title: "Sugestão: Acima de 1 milhão de seguidores no Spotify",
        price: "A consultar",
        features: [
            "- Visualização de relatórios de royalties diferentes, no mesmo sistema",
            "- Previsão de royalties por faixa",
            "- Organização de catálogo (Fonograma e Obra)",
            "- Verificação de registros",
            "- Até 30 perfis para administrar, com opção de organização por selo e sub-selos",
            "- Até 200 split automatizados (para receber e cobrar)",
            "- Até 10 pagamentos para terceiros",
            "- Até 10 GB de backup por artista + espaço extra para informações do selo/agência",
        ],
    },
];
containerPricing.innerHTML = cardsPricing
    .map(
        (card) => `
      <div
              class="w-[305px] md:w-[520px] lg:w-[320px] bg-[#f4f5f5] border border-[#2810e8] shadow-[-16px_4px_0px_0px_#fff200] flex flex-col overflow-hidden ">
            <div class="pl-[18px] pr-[6px] py-[16px]">
              <span class="text-[#2810e8] font-bold text-[18px]">${card.header}</span>
            </div>
            <div class="pl-[18px] pr-[6px] py-[12px] border-b border-t border-[#2810e8]">
              <h3 class="text-[#2810e8] font-bold text-[16px]">${card.title}</h3>
            </div>
            <div class="pl-[18px] pr-[6px] py-[24px]">
              <ul class="text-[#2810e8] text-[14px] leading-relaxed space-y-2">
                ${card.features.map((feature) => `<li>${feature}</li>`).join("")}
              </ul>
            </div>
            <div class="w-full flex justify-center p-[24px]  border-t border-[#2810e8]">
              <button class="btn-animated w-[250px] font-bold text-lg text-center cursor-pointer" data-text="Tenho interesse">
                <span class="relative z-10">Tenho interesse</span>
              </button>
            </div>
          </div>
    `,
    )
    .join("");

const containerIntelligence = document.getElementById("intelligence-cards");
const cardsInteligence = [
    {
        title: "Democracia dos relatórios",

        description:
            "Tenha acesso aos relatórios, dados e relatórios das suas faixas. Conecte seu parceiro na plataforma e democratize os dados.",
    },
    {
        title: "Split de Royalties",

        description:
            " Descubra novas possibilidades de ganhos a partir de insights estratégicos do seu catálogo. Planeje lançamentos, ativações e movimentos de mercado com base em dados reais, não em suposições.",
    },
    {
        title: " Insight de dados",

        description:
            "Tenha acesso aos dados das lojas de música (DSP) em um só lugar, ao invés de ter que logar em cada loja. A união de dados gera insights estratégicos",
    },
    {
        title: "Catálogo unificado",

        description:
            "Organize todos os lançamentos em um só lugar, incluindo feats, participações e remixes. Além dos originais.",
    },
];
containerIntelligence.innerHTML = cardsInteligence
    .map(
        (card, index) => `
        <div
            
            class="w-[305px] md:w-[250px] lg:w-[480px] bg-[#f4f5f5] border border-[#2810e8] shadow-[16px_4px_0px_0px_#2810e8] flex flex-col h-full">
          <div class="px-[16px] py-[16px] border-b border-[#2810e8]">
            <span class="text-[#2810e8] font-bold text-xl">${index + 1} / ${cardsInteligence.length}</span>
          </div>
          <div class="border-b border-[#2810e8] py-[24px] px-[1rem]">
            <h3 class="text-[#2810e8] font-bold text-2xl">${card.title}</h3>
          </div>
          <div class="px-[16px] py-[24px] px-[1rem]">
            <p class="text-[#2810e8] text-[1.25rem] font-medium tracking-[-0.08em]">
              ${card.description}
            </p>
          </div>
        </div>
    `,
    )
    .join("");

const containerTeam = document.getElementById("team-cards");
const cardsTeam = [
    {
        name: "André Izidro",
        role: "CEO e fundador",
        image: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    {
        name: "Odilon Borges",
        role: "CEO e fundador",
        image: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    {
        name: "Renato Martins",
        role: "Líder de produto",
        image: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    {
        name: "André Gomes",
        role: "CFO",
        image: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    {
        name: "Henrique Gonçalves",
        role: "FrontEnd e UX",
        image: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
];
containerTeam.innerHTML = cardsTeam
    .map(
        (card) => `
         <div
            class="w-[306px] md:w-[220px] lg:w-[300px] bg-[#f4f5f5] border border-[#2810e8] rounded-[12px] shadow-[-16px_4px_0px_0px_#2810e8] p-[10px] flex flex-col gap-[16px]">
          <div
              class="w-[280px] md:w-[200px] lg:w-[280px] h-[324px] md:h-[240px] lg:h-[324px] rounded-[12px] overflow-hidden mx-auto">
            <img src="${card.image}" class="w-full h-full object-cover"
                alt="${card.name}" />
          </div>
          <div class="flex flex-col items-center gap-0 pb-4">
            <h3 class="text-[#2810e8] font-bold text-2xl text-center">
              ${card.name}
            </h3>
            <p class="text-[#2810e8] text-lg text-center">${card.role}</p>
          </div>
        </div>            
            `,
    )
    .join("");

const containerFaq = document.getElementById("faq-cards");
const cardsFaq = [
    {
        question: "O que é a plataforma Rump!?",
        answer: "A Rump! é uma plataforma completa de Asset Rights Management (ARM) que reúne todos os seus ativos musicais em um só lugar. Oferecemos gestão de catálogo, monitoramento de receitas, análise de performance e insights estratégicos para você ter total controle sobre sua carreira musical.",
    },
    {
        question: "Como funciona o monitoramento de receitas?",
        answer: "Através da nossa plataforma, você visualiza todas as suas fontes de renda em tempo real, acompanhando ganhos por lançamento, plataforma e período. Com dashboards intuitivos, você identifica o que gera mais retorno e otimiza sua estratégia financeira com dados precisos.",
    },
    {
        question: "Posso gerenciar múltiplos lançamentos?",
        answer: "Sim! A Rump! permite que você gerencie todo o seu catálogo musical em um único painel. Você pode acompanhar o desempenho de cada lançamento individualmente, comparar resultados entre diferentes projetos e ter uma visão completa do seu portfólio.",
    },
    {
        question: "Quais plataformas de streaming são monitoradas?",
        answer: "Monitoramos dados de todas as principais plataformas de streaming como Spotify, Apple Music, Deezer, YouTube Music, Amazon Music e outras. Consolidamos todas as informações em um só lugar para facilitar sua análise e tomada de decisão.",
    },
    {
        question: "Como os insights ajudam na minha estratégia?",
        answer: "Nossos insights baseados em dados reais revelam oportunidades de crescimento, territórios com maior potencial, horários de maior engajamento e quais músicas têm melhor performance. Assim, você toma decisões estratégicas fundamentadas, não baseadas em suposições.",
    },
    {
        question: "Quanto custa a plataforma Rump!?",
        answer: "Oferecemos diferentes planos de assinatura para atender desde artistas independentes até grandes catálogos. Entre em contato conosco para conhecer o plano ideal para o seu perfil e necessidades específicas.",
    },
    {
        question: "Meus dados estão seguros na plataforma?",
        answer: "Sim! A segurança dos seus dados é nossa prioridade. Utilizamos criptografia de ponta a ponta, servidores seguros e cumprimos todas as normas de proteção de dados (LGPD). Seus ativos musicais e informações financeiras estão totalmente protegidos.",
    },
    {
        question: "Posso exportar meus relatórios e dados?",
        answer: "Absolutamente! Você pode exportar todos os seus relatórios (receitas, performance, engajamento) em diversos formatos como PDF, Excel e CSV. Isso facilita compartilhar informações com sua equipe ou usar em apresentações.",
    },
];

const initialFaqCount = 5;
let showingAllFaqs = false;

function renderFaqs(count) {
    const faqsToShow = count === "all" ? cardsFaq : cardsFaq.slice(0, count);

    containerFaq.innerHTML = faqsToShow
        .map(
            (card) => `
        <div
            class="faq-item w-full bg-[#f4f5f5] border border-[#2810e8] shadow-[16px_4px_0px_0px_#2810e8] flex flex-col cursor-pointer transition-all z-1 ">
          
          <div class="border-b border-[#2810e8] py-[24px] pl-[1rem] pr-[1rem] flex justify-between items-center faq-question">
            <h3 class="text-[#2810e8] font-bold text-2xl pr-4">${card.question}</h3>
            <svg class="faq-icon w-6 h-6 flex-shrink-0 transition-transform" fill="none" stroke="#2810e8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div class="faq-answer px-[16px] px-[1rem] overflow-hidden transition-all" style="max-height: 0;">
            <p class="text-[#2810e8] text-[1.25rem] font-medium tracking-[-0.08em] py-[24px]">
              ${card.answer}
            </p>
          </div>
        </div>
    `,
        )
        .join("");

    attachFaqListeners();
}

function attachFaqListeners() {
    document.querySelectorAll(".faq-item").forEach((item) => {
        item.addEventListener("click", () => {
            const answer = item.querySelector(".faq-answer");
            const question = item.querySelector(".faq-question");
            const icon = item.querySelector(".faq-icon");
            const isOpen =
                answer.style.maxHeight && answer.style.maxHeight !== "0px";

            document.querySelectorAll(".faq-item").forEach((otherItem) => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector(".faq-answer");
                    const otherQuestion =
                        otherItem.querySelector(".faq-question");
                    const otherIcon = otherItem.querySelector(".faq-icon");
                    otherAnswer.style.maxHeight = "0";
                    otherIcon.style.transform = "rotate(0deg)";
                    otherQuestion.classList.remove("active");
                }
            });

            if (isOpen) {
                answer.style.maxHeight = "0";
                icon.style.transform = "rotate(0deg)";
                question.classList.remove("active");
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.style.transform = "rotate(180deg)";
                question.classList.add("active");
            }
        });
    });
}

renderFaqs(initialFaqCount);

const faqViewMoreBtn = document.getElementById("faq-view-more");
if (faqViewMoreBtn && cardsFaq.length > initialFaqCount) {
    faqViewMoreBtn.style.display = "flex";
    faqViewMoreBtn.addEventListener("click", () => {
        if (!showingAllFaqs) {
            renderFaqs("all");
            faqViewMoreBtn.querySelector("span").textContent = "Ver menos";
            showingAllFaqs = true;
        } else {
            renderFaqs(initialFaqCount);
            faqViewMoreBtn.querySelector("span").textContent = "Ver mais";

            showingAllFaqs = false;
            document
                .getElementById("faq")
                .scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
} else if (faqViewMoreBtn) {
    faqViewMoreBtn.style.display = "none";
}

const menuToggle = document.getElementById("menu-toggle");
const menuOverlay = document.getElementById("menu-overlay");
const menuLines = document.querySelectorAll(".menu-line");
const menuLinks = document.querySelectorAll(".menu-link");
let isMenuOpen = false;

function openMenu() {
    isMenuOpen = true;
    menuOverlay.style.opacity = "1";
    menuOverlay.style.pointerEvents = "auto";
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Fechar menu de navegação");

    menuLines[0].style.transform = "rotate(45deg) translateY(9px)";
    menuLines[1].style.opacity = "0";
    menuLines[2].style.transform = "rotate(-45deg) translateY(-9px)";
}

function closeMenu() {
    isMenuOpen = false;
    menuOverlay.style.opacity = "0";
    menuOverlay.style.pointerEvents = "none";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu de navegação");

    menuLines[0].style.transform = "rotate(0) translateY(0)";
    menuLines[1].style.opacity = "1";
    menuLines[2].style.transform = "rotate(0) translateY(0)";
}

menuToggle.addEventListener("click", () => {
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setTimeout(() => {
                closeMenu();
            }, 500);
        }
    });
});

function initSoundBars() {
    const containers = document.querySelectorAll(".sound-bars-container");
    if (!containers.length) return;

    const count = 200;

    containers.forEach((container) => {
        if (container.classList.contains("wave-azul")) {
            for (let i = 0; i < count; i++) {
                const bar = document.createElement("div");
                bar.className = "sound-bar team";
                container.appendChild(bar);
            }
        } else {
            for (let i = 0; i < count; i++) {
                const bar = document.createElement("div");
                bar.className = "sound-bar";
                container.appendChild(bar);
            }
        }
    });

    let styles = "";
    for (let i = 1; i <= count; i++) {
        const duration = (0.68 + Math.random() * 0.8).toFixed(2);
        const height = (58 + Math.random() * 42).toFixed(0);

        styles += `.sound-bar:nth-child(${i}) { animation: wave${i} ${duration}s ease-in-out infinite; }`;
        styles += `@keyframes wave${i} { 0%, 100% { height: 20px; } 50% { height: ${height}%; } }`;
    }

    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

initSoundBars();
