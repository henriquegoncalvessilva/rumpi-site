document.body.classList.add('loading');

window.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  
  if (preloader) {
    preloader.classList.add('fade-out');
    
    setTimeout(() => {
      preloader.style.display = 'none';
      document.body.classList.remove('loading');
      preloader.remove()
    }, 600);
  }
});


const lenis = new Lenis({
    autoRaf: true,
});

const mosaicItems = [
    {
        video: "assets/videos/video1.webm",
        poster: "assets/preloadvideo1.webp",
        classes: "w-full h-[280px] md:col-span-2 md:row-span-2 md:h-auto",
        ariaLabel: "Video 1 mosaico",
    },
    {
        video: "assets/videos/video05.mp4",
        poster: "assets/preloadvideo5.webp",
        classes: "w-full h-[350px] md:col-span-4 md:row-span-3 md:h-auto",
        ariaLabel: "Video 2 mosaico",
    },
    {
        video: "assets/videos/video3.webm",
        poster: "assets/preloadvideo3.webp",
        classes: "w-full h-[250px] md:col-span-2 md:row-span-2 md:h-auto",
        ariaLabel: "Video 3 mosaico",
        title: "Video 3 mosaico",
    },
    {
        video: "assets/videos/video4.mp4",
        poster: "assets/preloadvideo4.webp",
        classes: "w-full h-[250px] md:col-span-2 md:row-span-2 md:h-auto",
        ariaLabel: "Video 4 mosaico",
        title: "Video 4 mosaico",
    },
    {
        video: "assets/videos/video2.mp4",
        poster: "assets/preloadvideo2.webp",
        classes: "w-full h-[250px] md:col-span-2 md:row-span-2 md:h-auto",
        ariaLabel: "Video 2 mosaico",
        title: "Video 2 mosaico",
    },
    {
        video: "assets/videos/video06.mp4",
        poster: "assets/preloadvideo6.webp",
        classes: "w-full h-[250px] md:col-span-2 md:row-span-2 md:h-auto",
        ariaLabel: "Video 6 mosaico",
        title: "Video 6 mosaico",
    },
    {
        isPlaceholder: true,
        classes: "hidden md:block md:col-span-4 md:row-span-1 bg-[#2810e8]",
    },
];

function generateMosaic() {
    const container = document.getElementById("mosaic-container");

    if (!container) return;

    mosaicItems.forEach((item) => {
        const div = document.createElement("div");
        div.className = `mosaic-item ${item.classes} overflow-hidden rounded-[12px] shadow-lg`;

        if (item.isPlaceholder) {
            container.appendChild(div);
        } else {
            const video = document.createElement("video");
            video.src = item.video;
            video.poster = item.poster;
            video.className = "w-full h-full object-cover ";
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            video.preload = "none";
            video.setAttribute("aria-label", item.ariaLabel);

            if (item.title) {
                video.title = item.title;
            }

            div.appendChild(video);
            container.appendChild(div);
        }
    });
}

document.addEventListener("DOMContentLoaded", generateMosaic);

const cardsStackContainer = document.getElementById("cards-stack");
const cardsOffers = [
    {
        title: "Gestão do catálogo",
        description:
            "Possua controle sobre seu catálogo e todos os seus lançamentos em um só lugar.",
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
    {
        title: " O bank SaaS da música",
        description:
            "Ofereça serviços financeiros para artistas e selos, facilitando a gestão de receitas e pagamentos.",
    },
];

if (cardsStackContainer) {
    cardsStackContainer.innerHTML = cardsOffers
        .map(
            (card, index) => `
           
            <div class="stack-card" data-index="${index}">
            
                <div class="stack-card-inner">
                    <div class="stack-card-header">
                        <span class="text-[#2810e8] font-bold text-[16px]">${index + 1} / ${cardsOffers.length}</span>
                    </div>
                    <div class="stack-card-title">
                        <h3 class="text-[#2810e8] font-bold  md:text-[1.5rem]">${card.title}</h3>
                    </div>
                    <div class="stack-card-description">
                        <p class="text-[#2810e8] text-[1rem] tracking-[-0.08em] font-medium">
                            ${card.description}
                        </p>
                    </div>
                </div>

            </div>
        `,
        )
        .join("");
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
        header: "Plano 2 - Artistas Emergentes",
        title: "Sugestão de perfil: entre 10 e 100 mil seguidores no Spotify",
        price: "R$ 149.90",
        features: [
            "- Até 20 perfis para administrar",
            "- Até 50 splits automatizados na plataforma",
            "- Até 20 pagamentos para terceiros",
            "- Até 100 MB de backup por artista.",
        ],
    },
    {
        header: "Plano 3 - Artistas Consolidados",
        title: "Sugestão de perfil: entre 100 mil e 1 milhão de seguidores no Spotify",
        price: "R$ 299.90",
        features: [
            "- Até 30 perfis para administrar",
            "- Até 200 splits automatizados na plataforma",
            "- Até 20 pagamentos para terceiros",
            "- Até 100 MB de backup por artista.",
        ],
    },
    {
        header: "Plano 4 - Selos Musicais",
        title: "Sugestão de perfil: Selos Musicais",
        price: "R$ 599.90",
        features: [
            "- Até 50 perfis para administrar, com opção de organização por selo e sub-selos.",
            "- Até 300 splits automatizados (para receber e cobrar)",
            "- Até 50 pagamentos para terceiros.",
            "- Até 1GB de backup por artista + espaço extra para informações do selo/agência.",
        ],
    },
    {
        header: "Plano 5 - Artistas Mainstream",
        title: "Sugestão de perfil: Acima de 1 milhão de seguidores no Spotify",
        price: "",
        features: [
            "- Entre em contato para saber mais sobre o nosso plano customizado para artistas Mainstream.",
        ],
    },

    
];
containerPricing.innerHTML = cardsPricing
    .map(
        (card) => `
      <div
              class="w-[305px] md:w-[520px] lg:w-[320px] bg-[#f4f5f5] border border-[#2810e8] shadow-[-16px_4px_0px_0px_#fff200] flex flex-col overflow-hidden self-start">
            <div class="pl-[18px] pr-[6px] py-[16px]">
              <span class="text-[#2810e8] font-bold text-[18px]">${card.header}</span>
            </div>
             <div class="pl-[18px] pr-[6px] py-[12px] border-t border-[#2810e8]${card.price ? "" : " hidden"}">
              <h3 class="text-[#2810e8] font-bold text-[30px] inline">${card.price} </h3>
              <strong class="inline text-[#2810e8]">/ mês</strong>
            </div>
            <div class="pl-[18px] pr-[6px] py-[12px] border-b border-t border-[#2810e8]">
              <h3 class="text-[#2810e8] font-bold text-[16px]">${card.title}</h3>
            </div>
           
            <div class="pl-[18px] pr-[6px] py-[24px]  ${!card.price ? "h-[300px]" : ""}">
              <ul class="text-[#2810e8] text-[14px] leading-relaxed space-y-2">
                ${card.features.map((feature) => `<li>${feature}</li>`).join("")}
              </ul>
            </div>
            <div class="w-full flex justify-center p-[24px]  border-t border-[#2810e8] ${!card.price ? "h-full" : ""}">
              <button class="btn-animated w-[250px] font-bold text-lg text-center cursor-pointer ${!card.price ? "self-start" : ""} data-text="Tenho interesse">
                <span class="relative z-10"> ${!card.price ? "Fale conosco" : "Tenho interesse"}</span>
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
            <span class="text-[#2810e8] font-bold">${index + 1} / ${cardsInteligence.length}</span>
          </div>
          <div class="border-b border-[#2810e8] py-[24px] px-[1rem]">
            <h3 class="text-[#2810e8] font-bold text-[1.5rem]">${card.title}</h3>
          </div>
          <div class="px-[16px] py-[24px] px-[1rem]">
            <p class="text-[#2810e8] text-[16px] font-medium tracking-[-0.08em]">
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
        image: "assets/team_2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
        name: "Odilon Borges",
        role: "CEO e fundador",
        image: "assets/team_1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
        name: "Renato Martini",
        role: "Líder de produto",
        image: "assets/team_3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
        name: "André Gomes",
        role: "CTO",
        image: "assets/team_4.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
        name: "Henrique Gonçalves",
        role: "FrontEnd e UX",
        image: "assets/team_5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
];
containerTeam.innerHTML = cardsTeam
    .map(
        (card) => `
         <div
            class="team-card relative w-[306px] md:w-[220px] lg:w-[300px] bg-[#f4f5f5] border border-[#2810e8] rounded-[12px] shadow-[-16px_4px_0px_0px_#2810e8] p-[10px] flex flex-col gap-[16px] cursor-pointer transition-transform hover:scale-105">
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
          
          <!-- Overlay -->
          <div class="team-overlay absolute inset-0 bg-[#2810e8]/95 rounded-[12px] flex flex-col items-center justify-center p-6 pointer-events-none">
            <button class="close-overlay absolute top-4 right-4 w-8 h-8 bg-[#fff200] rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="#2810e8" viewBox="0 0 24 24" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h4 class="text-[#fff200] font-bold text-xl md:text-2xl text-center mb-2">${card.name}</h4>
            <p class="text-[#fff200] text-sm md:text-base text-center mb-4">${card.role}</p>
            <p class="text-white text-sm md:text-base text-center leading-relaxed">${card.description}</p>
          </div>
        </div>            
            `,
    )
    .join("");

document.querySelectorAll('.team-card').forEach(card => {
    const overlay = card.querySelector('.team-overlay');
    const closeBtn = card.querySelector('.close-overlay');
    
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.close-overlay')) {
            overlay.classList.add('active');
            overlay.classList.remove('pointer-events-none');
            overlay.classList.add('pointer-events-auto');
        }
    });
    
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        overlay.classList.remove('active');
        overlay.classList.remove('pointer-events-auto');
        overlay.classList.add('pointer-events-none');
    });
});

const containerFaq = document.getElementById("faq-cards");
const cardsFaq = [
   
    {
        question: "O que é a Rumpi?",
        answer: "A Rumpi é uma plataforma para músicos, selos e gravadoras. Organizamos e processamos as principais informações relacionadas a música, desde royalties, direitos conexos, contratos, ISRC até catálogo, distribuição, análise de dados e marketing musical, trazendo diversas funcionalidades com o fim de otimizar as músicas do seu catálogo. É uma plataforma completa para músicos, intérpretes, compositores e todos os agentes do mercado da música. Com a Rumpi você pode gerenciar todo o seu catálogo, analisar os dados das suas músicas, processar business intelligence de forma a atingir o melhor resultado, pensar em estratégias de marketing digital e ter todas as ferramentas para promover sua música em um só lugar.",
    },
    {
        question: "O que são royalties digitais e como eles funcionam?",
        answer: "Os royalties digitais são valores pagos pelo uso de uma obra ou de um fonograma, no caso da música, a reprodução (play ou stream, em inglês) em uma DSP (Digital Service Provider, em outras palavra, as lojas de música como Spotify). Cada execução em uma loja de música (DSP) gera um determinado valor, que é acumulado e pago para o artista pelas agregadoras digitais (conhecidas como distribuidoras). Por exemplo: quando uma música é reproduzida no Spotify, isso gera um valor que poderá ser sacado pelo artista.",
    },
    {
        question: "Como vou receber royalties pela Rumpi?",
        answer: "Com a Rumpi, você poderá conectar todas as músicas que distribuiu em agregadoras e gravadoras diferentes, para unificar o pagamento em um só lugar. Também é possível processar a divisão dos royalties (royalty split), automatizando o pagamento para outros artistas que participam da mesma música, como receber de músicas em que você participa como convidado (feat).",
    },
    {
        question: "Quanto vou ganhar com a minha música?",
        answer: "A Rumpi, como solução de catálogo e marketing digital para músicos, fará um uso inteligente de todos os dados recebidos pelas distribuidoras digitais e DSPs para comparar a sua faixa com outras similares e projetar o provável valor que você receberá pela sua música e reproduções. Vamos analisar como cada faixa está performando em cada loja de música (como Spotify, Deezer e Youtube Music) para te dar uma estimativa de valor.",
    },
    {
        question: "Quais soluções de marketing digital a Rumpi oferece?",
        answer: `Focada em ajudar os profissionais da música, na Rumpi vamos reunir as principais ferramentas usadas na promoção de uma faixa para facilitar a vida do músico.
        
        <br><br>- Será possível criar smartlinks do seu lançamento para promover as faixas (com o link direto para os players de música) ou para promover suas redes sociais (agregando todos os links em um só lugar).
        
        <br><br>- Link de pré-save para suas faixas e análise dos resultados do lançamento.
        
        <br><br>- Com a Rumpi, também será possível obter templates para criar, modificar, enviar e assinar contratos com artistas de forma digital, rápida e prática.
        
        <br><br>- Além disso, depois de enviar o contrato ao artista, ele poderá se cadastrar na Rumpi e facilitar a divisão dos royalties para receber no futuro.
        
        <br><br>- Mapeamento dos locais, públicos e informações relacionadas às execuções digitais e públicas da sua faixa.

        <br><br>- Armazenamento de todos os dados relativos à sua obra e seu fonograma, tais como capa, criativos em geral, masters, press releases, ficha técnica, dentre outros.
        
        <br><br>- Acompanhamento de oportunidades atingidas por sua música, inclusive eventuais playlists.
        
        <br><br>- Ferramentas para produzir arte para redes sociais**
`
    },
    {
        question: "O que posso fazer com os dados musicais do meu catálogo na Rumpi?",
        answer: "A Rumpi possui um sistema de análise de dados que gera KPI e indicadores de resultado para o seu perfil de artista, projetando se o resultado está dentro do esperado para o lançamento. Cada artista e cada lançamento terá um dashboard específico para acompanhamento da performance em tempo real.",
    },
    {
        question: "Como funciona o time de relacionamento da Rumpi?",
        answer: "Possuímos também um time de relacionamento que pode ser contratado à parte para fazer o pitching ou re-pitching de uma música com as lojas, a partir da análise de dados e cruzamento de possibilidades que a faixa possui para entrar em playlists editoriais. Dentre os principais planos de ação estão: um novo plano de marketing para a música, uma sugestão de mídia e tráfego pago, assessoria de imprensa, otimização de tags e SEO para plataformas digitais.",
    },
    {
        question: "O que é uma distribuidora digital?",
        answer: "Uma distribuidora digital, ou agregadora digital, é uma empresa que recebe as músicas dos artistas e as distribui para os aplicativos de música (lojas digitais ou DSPs). Não é possível o artista enviar a faixa direto para o Spotify, por exemplo. O artista precisa subir as faixas pela distribuidora que será responsável pelo envio de todas as informações da música, como ISRC, capa, arquivo, créditos etc.",
    },
    {
        question: "Após o envio da música, como funciona o pagamento de royalties?",
        answer: "Após o envio da música, ela ficará disponível para o público ouvir e a cada reprodução, isso gera um valor de royalty que será pago à distribuidora e então repassado ao artista, selo e/ou gravadora que distribuiu a música.",
    },
    {
        question: "A Rumpi é uma distribuidora também?",
        answer: "A Rumpi não é uma distribuidora, ela é uma solução musical para artistas gerirem todas as faixas que lançaram pelas lojas. Por exemplo: se um artista começou a distribuir pela OneRPM e em seguida fez uma colaboração com uma gravadora que distribui pela Believe, este artista poderá conferir todas as informações relacionadas às execuções das faixas pela Rumpi, sem ter que contatar a OneRPM ou a Believe. As informações estarão todas concentradas no mesmo lugar.",
    },
    {
        question: "Como usar o ISRC na Rumpi?",
        answer: "O ISRC é como o RG da música, ele é o código de identificação universal da sua música e será usado para encontrar suas faixas nas distribuidoras e gerir seu catálogo na Rumpi. Você poderá organizá-los para entender como suas faixas estão performando em cada distribuidora. Caso você faça participação de alguma outra faixa, com o ISRC você poderá ver os resultados desta faixa também.",
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
