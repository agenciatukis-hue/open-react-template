export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-400"
              data-aos="fade-up"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0L10.2 5.4L16 6.2L11.8 10.1L12.9 16L8 13.1L3.1 16L4.2 10.1L0 6.2L5.8 5.4L8 0Z" />
              </svg>
              Agência Full Service
            </div>
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-orange-200),var(--color-gray-50),var(--color-orange-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Sua marca no digital com{" "}
              <span className="text-orange-500">estratégia</span> e{" "}
              <span className="text-orange-500">resultado</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-4 text-xl text-orange-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Unindo ROI (Retorno sobre Investimento) a um atendimento
                personalizado focado em resultados.
              </p>
              <p
                className="mb-8 text-lg text-gray-400"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Somos especialistas em Tráfego Pago, Social Media, SEO e Google
                Meu Negócio. Ajudamos donos de negócios locais e profissionais
                liberais a conquistar mais clientes todos os dias.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://wa.me/5511940754639"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                      Quero Mais Clientes
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#servicos"
                  >
                    Conheça Nossos Serviços
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
