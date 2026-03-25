document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  const translations = {
    pt: {
      nav_h1: "A PLATAFORMA ONDE A LOGÍSTICA SEGURA ENCONTRA GOVERNANÇA",
      nav_home: "Home",
      nav_about: "Sobre",
      nav_expertise: "Expertise",
      nav_platform: "Plataforma",
      nav_calculator: "Calculadora",
      nav_contact: "Contato",

      hero_title: 'Governança e Gestão<br>em Segurança, Saúde<br>e Meio Ambiente na<br><red>Cadeia Logística</red>',

      about_title_prefix: "<red>Sobre</red> Apta Safe Logistics Consulting",
      about_p1: "Iniciamos em 2010 com foco no <red>compartilhamento e transferência</red> de conhecimento em <red>logística nacional e internacional</red>, sempre vinculados às melhores práticas de liderança e cultura de segurança, saúde e meio ambiente, desenvolvidas até então em <red>20 anos de atuação na indústria</red> e em prestadores de serviços.",
      about_p2: "São <red>centenas de trabalhos realizados</red> em <strong>compras de serviços, desenvolvimento e implementação de operações, auditorias, homologações, treinamentos e gestão de programas de segurança, saúde e meio ambiente com diversidade de modais e armazenagem, segurança de mercado e produtos, incluindo perigosos.</strong>",
      about_p3: "Na cadeia de suprimentos, desenvolvemos trabalhos de consultoria logística, sempre com foco em gestão, integração de todos os processos, na sustentabilidade das operações e perpetuação dos negócios.",
      about_p4: "<red>Em 2026, lançamos a plataforma APTA ONE, que propicia um ambiente integrado, governança, gestão e visibilidade, cultura de segurança, saúde e meio ambiente aplicados à cadeia logística.</red>",

      flow_inputs: "INSUMOS",
      flow_supplier: "FORNECEDOR",
      flow_manufacturing: "MANUFATURA",
      flow_distribution: "DISTRIBUIÇÃO",
      flow_client: "CLIENTE",
      flow_consumer: "CONSUMIDOR",

      about_banner: "Governança em Segurança, Saúde e Meio Ambiente",

      expertise_title: "Governança e Gestão em Segurança em Distribuição",
      expertise_subtitle: "Treinamentos | Sourcing & Logistics",

      service1_title: "Governança e Gestão em Segurança em Distribuição",
      service1_li1: "Visão sistêmica e integrada de modais, operações e agentes.",
      service1_li2: "Protocolos de gestão e conformidade legal.",
      service1_li3: "Metodologia suportada por cultura de segurança.",
      service1_li4: "Implementação de sistemas de gestão em distribuição.",
      service1_li5: "Jornada suportada pela plataforma Apta One.",

      service2_title: "Sourcing & Logistics",
      service2_li1: "Projetos e operações logísticas até a implementação.",
      service2_li2: "Modais rodoviário, ferroviário e marítimo.",
      service2_li3: "Armazenagem.",
      service2_li4: "Produtos perigosos e embalados a granel.",
      service2_li5: "Logística internacional.",
      service2_li6: "Isotanks.",

      service3_title: "Treinamentos",
      service3_li1: "Investigação de incidentes e ações corretivas.",
      service3_li2: "Percepção de riscos.",
      service3_li3: "Análise de riscos rodoviários.",
      service3_li4: "Programa de observações comportamentais.",
      service3_li5: "Liderança e cultura de segurança.",
      service3_li6: "Personalizados sob demanda.",

      platform_h1: "A PLATAFORMA ONDE A LOGÍSTICA SEGURA ENCONTRA GOVERNANÇA",
      platform_p1: "A <strong>PLATAFORMA APTA ONE</strong> agrega e dá visibilidade em único ambiente, às melhores práticas de governança e gestão de cultura de segurança, saúde e meio ambiente aplicados à cadeia logística.",
      platform_p2: "Não entregamos apenas diagnóstico, entregamos direção estratégica e uma ferramenta de <strong>governança e gestão.</strong>",
      slide_1: "SUBSTITUIR PELA FOTO / PRINT 1",
      slide_2: "SUBSTITUIR PELA FOTO / PRINT 2",
      slide_3: "SUBSTITUIR PELA FOTO / PRINT 3",

      benefits_title: "Benefícios ao utilizar da <tittle>Apta One</tittle>",
      benefit_1: "Integrar todos os processos da empresa à Segurança, Saúde e Meio Ambiente",
      benefit_2: "Reduzir, eliminar desvios, incidentes e acidentes",
      benefit_3: "Visibilidade em único ambiente",
      benefit_4: "Reduzir e eliminar perdas",
      benefit_5: "Obter maturidade em liderança e cultura de segurança",
      benefit_6: "Elevar a produtividade",
      benefit_7: "Performance sustentável",
      benefit_8: "Preservar a marca",
      benefit_9: "Reduzir a exposição a riscos",
      benefit_10: "Perpetuar o negócio",

      calculator_title: "Calculadora <tittle>Apta One</tittle>",
      calculator_intro: "Mensure a contribuição que a APTA ONE pode oferecer ao evitar o potencial impacto de um evento acidental em sua operação.",

      calc_p_1: "SUA RESPOSTA:",
      calc_label_1: "Qual é o nível de complexidade da operação logística?",
      calc_label_2: "Qual é o tipo de produto armazenado?",
      calc_label_3: "Quantos processos operacionais são padronizados e controlados?",
      calc_label_4: "Qual é o volume médio mensal movimentado?",
      calc_label_5: "Qual é o nível de controle e visibilidade do estoque?",
      calc_label_6: "A operação atende normas regulatórias e fiscais?",
      calc_label_7: "Qual a exposição a risco de transporte e distribuição?",
      calc_label_8: "Há plano de resposta a incidentes?",
      calc_label_9: "Qual o impacto financeiro potencial das falhas logísticas?",
      calc_label_10: "Existem auditorias internas ou externas regulares?",

      opt_high: "ALTA",
      opt_medium: "MÉDIA",
      opt_low: "BAIXA",
      opt_perishable: "PERECÍVEL",
      opt_high_value: "ALTO VALOR",
      opt_hazardous: "PERIGOSO",
      opt_common: "FRÁGIL",
      opt_standardized: "PADRONIZADO",
      opt_partial: "Parcialmente",
      opt_not_standardized: "NÃO PADRONIZADO",
      opt_large: "GRANDE",
      opt_medium_size: "MÉDIO",
      opt_small: "BAIXO",
      opt_low_m: "BAIXO",
      opt_medium_m: "MÉDIO",
      opt_high_m: "ALTO",
      opt_no: "NÃO ATENDE",
      opt_partially: "PARCIALMENTE",
      opt_yes: "ATENDE",
      opt_very_high: "MUITO ALTA",
      opt_medium_high: "POUCO ALTA",
      opt_low_f: "BAIXA",
      opt_no_short: "NÃO",
      opt_yes_short: "SIM",
      opt_very_high_m: "MUITO ALTO",
      opt_very_m: "MUITO",
      opt_low_p: "POUCO",
      opt_moderate: "MODERADO",
      opt_low_n: "BAIXO",
      opt_no_short2: "NÃO",
      opt_yes_short2: "SIM",

      calc_box_text: "Experimente, <strong>envie seus dados de contato, receba a sua estimativa</strong> e descubra como a <red>APTA ONE</red> pode contribuir para sua <strong>operação segura e sustentável.</strong>",
      calc_estimate_label: "Estimativa de exposição",
      calc_fill_fields: "Preencha os campos",
      calc_send_email: "ENVIAR NO MEU E-MAIL",

      disclaimer_text: "DISCLAIMER: A ferramenta utiliza critérios próprios e tem o objetivo de estimar o resultado do desembolso financeiro de um evento acidental conforme dados fornecidos pelo usuário. A utilização dos dados gerados é de total responsabilidade do usuário.",

      lead_name: "* Nome",
      lead_company: "* Empresa",
      lead_phone: "Telefone",
      lead_send: "Enviar",
      lead_required: "* Dados obrigatórios",

      contact_title: "Contato",
      contact_tagline: "A plataforma onde a logística segura encontra a governança.",
      contact_name: "Nome",
      contact_company: "Empresa",
      contact_phone: "Telefone",
      contact_message: "Mensagem",
      contact_send: "Enviar mensagem",

      footer_text: "AptaLog © 2026. Todos os direitos reservados."
    },

    en: {
      nav_h1: "THE PLATFORM WHERE SAFE LOGISTICS MEETS GOVERNANCE",
      nav_home: "Home",
      nav_about: "About",
      nav_expertise: "Expertise",
      nav_platform: "Platform",
      nav_calculator: "Calculator",
      nav_contact: "Contact",

      hero_title: 'Governance and Management<br>in Safety, Health<br>and Environment in the<br><red>Logistics Chain</red>',

      about_title_prefix: "<red>About</red> Apta Safe Logistics Consulting",
      about_p1: "We started in 2010 focused on <red>sharing and transferring</red> knowledge in <red>domestic and international logistics</red>, always connected to best practices in leadership and safety, health and environment culture, developed throughout <red>20 years of work in industry</red> and service providers.",
      about_p2: "There <red>are hundreds of projects carried</red> out <strong>in service procurement, development and implementation of operations, audits, approvals, training and management of safety, health and environment programs with a diversity of transport modes and storage, market safety and products, including hazardous goods.</strong>",
      about_p3: "In the supply chain, we develop logistics consulting work, always focused on management, integration of all processes, sustainability of operations and business continuity.",
      about_p4: "<red>In 2026, we launched the APTA ONE platform, which provides an integrated environment, governance, management and visibility, safety, health and environment culture applied to the logistics chain.</red>",

      flow_inputs: "INPUTS",
      flow_supplier: "SUPPLIER",
      flow_manufacturing: "MANUFACTURING",
      flow_distribution: "DISTRIBUTION",
      flow_client: "CLIENT",
      flow_consumer: "CONSUMER",

      about_banner: "Governance in Safety, Health and Environment",

      expertise_title: "Governance and Safety Management in Distribution",
      expertise_subtitle: "Training | Sourcing & Logistics",

      service1_title: "Governance and Safety Management in Distribution",
      service1_li1: "Systemic and integrated view of modes, operations and stakeholders.",
      service1_li2: "Management protocols and legal compliance.",
      service1_li3: "Methodology supported by safety culture.",
      service1_li4: "Implementation of management systems in distribution.",
      service1_li5: "Journey supported by the Apta One platform.",

      service2_title: "Sourcing & Logistics",
      service2_li1: "Logistics projects and operations through implementation.",
      service2_li2: "Road, rail and maritime modes.",
      service2_li3: "Storage.",
      service2_li4: "Hazardous and bulk packaged products.",
      service2_li5: "International logistics.",
      service2_li6: "Isotanks.",

      service3_title: "Training",
      service3_li1: "Incident investigation and corrective actions.",
      service3_li2: "Risk perception.",
      service3_li3: "Road risk analysis.",
      service3_li4: "Behavioral observation program.",
      service3_li5: "Leadership and safety culture.",
      service3_li6: "Customized on demand.",

      platform_h1: "THE PLATFORM WHERE SAFE LOGISTICS MEETS GOVERNANCE",
      platform_p1: "The <strong>APTA ONE PLATFORM</strong> brings together and provides visibility in a single environment to the best governance and management practices of safety, health and environment culture applied to the logistics chain.",
      platform_p2: "We do not deliver only diagnosis, we deliver strategic direction and a <strong>governance and management</strong> tool.",
      slide_1: "REPLACE WITH PHOTO / SCREEN 1",
      slide_2: "REPLACE WITH PHOTO / SCREEN 2",
      slide_3: "REPLACE WITH PHOTO / SCREEN 3",

      benefits_title: "Benefits of using <tittle>Apta One</tittle>",
      benefit_1: "Integrate all company processes with Safety, Health and Environment",
      benefit_2: "Reduce and eliminate deviations, incidents and accidents",
      benefit_3: "Visibility in a single environment",
      benefit_4: "Reduce and eliminate losses",
      benefit_5: "Achieve maturity in leadership and safety culture",
      benefit_6: "Increase productivity",
      benefit_7: "Sustainable performance",
      benefit_8: "Preserve brand reputation",
      benefit_9: "Reduce exposure to risks",
      benefit_10: "Sustain the business",

      calculator_title: "<tittle>Apta One</tittle> Calculator",
      calculator_intro: "Measure the contribution that APTA ONE can offer by avoiding the potential impact of an accidental event in your operation.",

      calc_p_1: "YOUR ANSWER:",
      calc_label_1: "What is the level of complexity of the logistics operation?",
      calc_label_2: "What type of product is stored?",
      calc_label_3: "How many operational processes are standardized and controlled?",
      calc_label_4: "What is the average monthly volume handled?",
      calc_label_5: "What is the level of stock control and visibility?",
      calc_label_6: "Does the operation comply with regulatory and tax standards?",
      calc_label_7: "What is the exposure to transport and distribution risk?",
      calc_label_8: "Is there an incident response plan?",
      calc_label_9: "What is the potential financial impact of logistics failures?",
      calc_label_10: "Are there regular internal or external audits?",

      opt_high: "HIGH",
      opt_medium: "MEDIUM",
      opt_low: "LOW",
      opt_perishable: "PERSIHABLE",
      opt_high_value: "HIGH VALUE",
      opt_hazardous: "HAZARDOUS",
      opt_common: "FRAGILE",
      opt_standardized: "STANDARDIZED",
      opt_partial: "PARTIALLY",
      opt_not_standardized: "NOT STANDARDIZED",
      opt_large: "LARGE",
      opt_medium_size: "MEDIUM",
      opt_small: "LOW",
      opt_low_m: "LOW",
      opt_medium_m: "MEDIUM",
      opt_high_m: "HIGH",
      opt_no: "DOES NOT COMPLY",
      opt_partially: "PARTIALLY",
      opt_yes: "COMPLIES",
      opt_very_high: "VERY HIGH",
      opt_medium_high: "LITTLE HIGH",
      opt_low_f: "LOW",
      opt_no_short: "NO",
      opt_yes_short: "YES",
      opt_very_high_m: "VERY HIGH",
      opt_very_m: "VERY",
      opt_low_p: "LITTLE",
      opt_moderate: "MODERATE",
      opt_low_n: "LOW",
      opt_no_short2: "NO",
      opt_yes_short2: "YES",

      calc_box_text: "Try it, <strong>send your contact information, receive your estimate</strong> and discover how <red>APTA ONE</red> can contribute to a <strong>safer and more sustainable operation.</strong>",
      calc_estimate_label: "Exposure estimate",
      calc_fill_fields: "Fill in the fields",
      calc_send_email: "Send my email",

      disclaimer_text: "DISCLAIMER: This tool uses its own criteria and aims to estimate the financial outlay result of an accidental event based on data provided by the user. The use of generated data is entirely the user's responsibility.",

      lead_name: "* Name",
      lead_company: "* Company",
      lead_phone: "Phone",
      lead_send: "Send",
      lead_required: "* Required fields",

      contact_title: "Contact",
      contact_tagline: "The platform where safe logistics meets governance.",
      contact_name: "Name",
      contact_company: "Company",
      contact_phone: "Phone",
      contact_message: "Message",
      contact_send: "Send message",

      footer_text: "AptaLog © 2026. All rights reserved."
    },

    es: {
      nav_h1: "La Plataforma Donde La Logística Segura Se Encuentra Con La Gobernanza",
      nav_home: "Inicio",
      nav_about: "Sobre",
      nav_expertise: "Experiencia",
      nav_platform: "Plataforma",
      nav_calculator: "Calculadora",
      nav_contact: "Contacto",

      hero_title: 'Gobernanza y Gestión<br>en Seguridad, Salud<br>y Medio Ambiente en la<br><red>Cadena Logística</red>',

      about_title_prefix: "<red>Sobre</red> Apta Safe Logistics Consulting",
      about_p1: "Comenzamos en 2010 con enfoque en <red>compartir y transferir</red> conocimiento en <red>logística nacional e internacional</red>, siempre vinculados a las mejores prácticas de liderazgo y cultura de seguridad, salud y medio ambiente, desarrolladas durante <red>20 años de actuación en la industria</red> y en prestadores de servicios.",
      about_p2: "Son <red>cientos de trabajos realizados</red> en <strong>compras de servicios, desarrollo e implementación de operaciones, auditorías, homologaciones, entrenamientos y gestión de programas de seguridad, salud y medio ambiente con diversidad de modos y almacenamiento, seguridad de mercado y productos, incluidos los peligrosos.</strong>",
      about_p3: "En la cadena de suministro, desarrollamos trabajos de consultoría logística, siempre con foco en gestión, integración de todos los procesos, sostenibilidad de las operaciones y continuidad de los negocios.",
      about_p4: "<red>En 2026, lanzamos la plataforma APTA ONE, que proporciona un ambiente integrado, gobernanza, gestión y visibilidad, cultura de seguridad, salud y medio ambiente aplicados a la cadena logística.</red>",

      flow_inputs: "INSUMOS",
      flow_supplier: "PROVEEDOR",
      flow_manufacturing: "MANUFACTURA",
      flow_distribution: "DISTRIBUCIÓN",
      flow_client: "CLIENTE",
      flow_consumer: "CONSUMIDOR",

      about_banner: "Gobernanza en Seguridad, Salud y Medio Ambiente",

      expertise_title: "Gobernanza y Gestión en Seguridad en Distribución",
      expertise_subtitle: "Entrenamientos | Sourcing & Logistics",

      service1_title: "Gobernanza y Gestión en Seguridad en Distribución",
      service1_li1: "Visión sistémica e integrada de modos, operaciones y agentes.",
      service1_li2: "Protocolos de gestión y conformidad legal.",
      service1_li3: "Metodología apoyada por cultura de seguridad.",
      service1_li4: "Implementación de sistemas de gestión en distribución.",
      service1_li5: "Jornada apoyada por la plataforma Apta One.",

      service2_title: "Sourcing & Logistics",
      service2_li1: "Proyectos y operaciones logísticas hasta la implementación.",
      service2_li2: "Modos carretero, ferroviario y marítimo.",
      service2_li3: "Almacenamiento.",
      service2_li4: "Productos peligrosos y envasados a granel.",
      service2_li5: "Logística internacional.",
      service2_li6: "Isotanks.",

      service3_title: "Entrenamientos",
      service3_li1: "Investigación de incidentes y acciones correctivas.",
      service3_li2: "Percepción de riesgos.",
      service3_li3: "Análisis de riesgos viales.",
      service3_li4: "Programa de observaciones conductuales.",
      service3_li5: "Liderazgo y cultura de seguridad.",
      service3_li6: "Personalizados bajo demanda.",

      platform_h1: "LA PLATAFORMA DONDE LA LOGÍSTICA SEGURA SE ENCUENTRA CON LA GOBERNANZA",
      platform_p1: "La <strong>PLATAFORMA APTA ONE</strong> integra y da visibilidad en un único ambiente a las mejores prácticas de gobernanza y gestión de cultura de seguridad, salud y medio ambiente aplicadas a la cadena logística.",
      platform_p2: "No entregamos solo diagnóstico, entregamos dirección estratégica y una herramienta de <strong>gobernanza y gestión.</strong>",
      slide_1: "REEMPLAZAR POR FOTO / PANTALLA 1",
      slide_2: "REEMPLAZAR POR FOTO / PANTALLA 2",
      slide_3: "REEMPLAZAR POR FOTO / PANTALLA 3",

      benefits_title: "Beneficios al utilizar <tittle>Apta One</tittle>",
      benefit_1: "Integrar todos los procesos de la empresa con Seguridad, Salud y Medio Ambiente",
      benefit_2: "Reducir y eliminar desvíos, incidentes y accidentes",
      benefit_3: "Visibilidad en un único ambiente",
      benefit_4: "Reducir y eliminar pérdidas",
      benefit_5: "Obtener madurez en liderazgo y cultura de seguridad",
      benefit_6: "Elevar la productividad",
      benefit_7: "Desempeño sostenible",
      benefit_8: "Preservar la marca",
      benefit_9: "Reducir la exposición a riesgos",
      benefit_10: "Perpetuar el negocio",

      calculator_title: "Calculadora <tittle>Apta One</tittle>",
      calculator_intro: "Mida la contribución que APTA ONE puede ofrecer al evitar el impacto potencial de un evento accidental en su operación.",

      calc_p_1: "TU RESPUESTA:",
      calc_label_1: "¿Cuál es el nivel de complejidad de la operación logística?",
      calc_label_2: "¿Cuál es el tipo de producto almacenado?",
      calc_label_3: "¿Cuántos procesos operativos están estandarizados y controlados?",
      calc_label_4: "¿Cuál es el volumen mensual promedio movilizado?",
      calc_label_5: "¿Cuál es el nivel de control y visibilidad del inventario?",
      calc_label_6: "¿La operación cumple normas regulatorias y fiscales?",
      calc_label_7: "¿Cuál es la exposición al riesgo de transporte y distribución?",
      calc_label_8: "¿Existe plan de respuesta a incidentes?",
      calc_label_9: "¿Cuál es el impacto financiero potencial de las fallas logísticas?",
      calc_label_10: "¿Existen auditorías internas o externas regulares?",

      opt_high: "ALTA",
      opt_medium: "MEDIA",
      opt_low: "BAJA",
      opt_perishable: "PERECEDERO",
      opt_high_value: "ALTO VALOR",
      opt_hazardous: "PELIGROSO",
      opt_common: "FRÁGIL",
      opt_standardized: "ESTANDARIZADO",
      opt_partial: "PARCIALMENTE",
      opt_not_standardized: "NO ESTANDARIZADO",
      opt_large: "GRANDE",
      opt_medium_size: "MEDIO",
      opt_small: "BAJO",
      opt_low_m: "BAJO",
      opt_medium_m: "MEDIO",
      opt_high_m: "ALTO",
      opt_no: "NO CUMPLE",
      opt_partially: "PARCIALMENTE",
      opt_yes: "CUMPLE",
      opt_very_high: "MUY ALTA",
      opt_medium_high: "PEQUEÑO ALTA",
      opt_low_f: "BAJA",
      opt_no_short: "NO",
      opt_yes_short: "SÍ",
      opt_very_high_m: "MUY ALTO",
      opt_very_m: "MUY",
      opt_low_p: "PEQUEÑO",
      opt_moderate: "MODERADO",
      opt_low_n: "BAJO",
      opt_no_short2: "NO",
      opt_yes_short2: "SÍ",

      calc_box_text: "Pruébelo, <strong>envíe sus datos de contacto, reciba su estimación</strong> y descubra cómo <red>APTA ONE</red> puede contribuir a una <strong>operación más segura y sostenible.</strong>",
      calc_estimate_label: "Estimación de exposición",
      calc_fill_fields: "Complete los campos",
      calc_send_email: "Enviar mi correo",

      disclaimer_text: "DISCLAIMER: La herramienta utiliza criterios propios y tiene como objetivo estimar el resultado del desembolso financiero de un evento accidental según los datos proporcionados por el usuario. El uso de los datos generados es de total responsabilidad del usuario.",

      lead_name: "* Nombre",
      lead_company: "* Empresa",
      lead_phone: "Teléfono",
      lead_send: "Enviar",
      lead_required: "* Datos obligatorios",

      contact_title: "Contacto",
      contact_tagline: "La plataforma donde la logística segura encuentra la gobernanza.",
      contact_name: "Nombre",
      contact_company: "Empresa",
      contact_phone: "Teléfono",
      contact_message: "Mensaje",
      contact_send: "Enviar mensaje",

      footer_text: "AptaLog © 2026. Todos los derechos reservados."
    }
  };

  function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        const content = dict[key];

        if (content.includes("<") && content.includes(">")) {
          element.innerHTML = content;
        } else {
          element.textContent = content;
        }
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
      const key = element.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        element.setAttribute("placeholder", dict[key]);
      }
    });

    applyHighlightStyle();

    localStorage.setItem("site-language", lang);
  }

  function applyHighlightStyle() {
    document.querySelectorAll("red").forEach(function (element) {
      element.style.color = "#e60000";
      element.style.fontWeight = 800;
    });

    document.querySelectorAll("strong").forEach(function (element) {
      element.style.color = "#4f4f4f";
      element.style.fontWeight = 700;
    });

    document.querySelectorAll("tittle").forEach(function (element) {
      element.style.color = "#7f7f7f";
      element.style.fontWeight = 700;
    });
  }

  document.querySelectorAll(".lang-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      const lang = button.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let activeIndex = 0;

// Função para mostrar o slide ativo
function showSlide(index) {
  // Remove a classe active de todos os slides e dots
  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  // Adiciona a classe active no slide e no ponto correspondente
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Função para avançar para o próximo slide
function nextSlide() {
  activeIndex = (activeIndex + 1) % slides.length;
  showSlide(activeIndex);
}

// Função para voltar para o slide anterior
function prevSlide() {
  activeIndex = (activeIndex - 1 + slides.length) % slides.length;
  showSlide(activeIndex);
}

// Evento para os botões de navegação
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Evento para os pontos de navegação
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    activeIndex = index;
    showSlide(activeIndex);
  });
});

// Avanço automático a cada 5 segundos
setInterval(nextSlide, 5000);

// Exibe o primeiro slide inicialmente
showSlide(activeIndex);

});