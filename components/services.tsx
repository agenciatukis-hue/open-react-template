import Spotlight from "@/components/spotlight";

export default function Services() {
  return (
    <section id="servicos">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-orange-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-orange-200/50">
              <span className="inline-flex bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                Nossos Serviços
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-orange-200),var(--color-gray-50),var(--color-orange-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Soluções completas para o seu negócio crescer
            </h2>
            <p className="text-lg text-orange-200/65">
              Somos uma agência full service. Cuidamos de toda a presença digital
              do seu negócio com estratégias integradas e foco em resultado.
            </p>
          </div>
          {/* Service cards */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-2">
            {/* Tráfego Pago */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="https://wa.me/5511940754639"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 md:p-8">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                    <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                        Tráfego Pago
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                    Google Ads & Meta Ads
                  </h3>
                  <p className="text-orange-200/65">
                    Campanhas estratégicas no Google, Facebook e Instagram para
                    atrair clientes qualificados e gerar vendas. Gestão completa
                    com foco em ROI e otimização constante do seu investimento.
                  </p>
                </div>
              </div>
            </a>

            {/* Social Media */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="https://wa.me/5511940754639"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 md:p-8">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                    <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                        Social Media
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                    Gestão de Redes Sociais
                  </h3>
                  <p className="text-orange-200/65">
                    Criação de conteúdo, planejamento editorial e gestão completa
                    das suas redes sociais. Construímos a presença digital da sua
                    marca com posts que engajam e convertem seguidores em clientes.
                  </p>
                </div>
              </div>
            </a>

            {/* SEO */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="https://wa.me/5511940754639"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 md:p-8">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                    <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                        SEO
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                    Otimização para Buscadores
                  </h3>
                  <p className="text-orange-200/65">
                    Posicione seu site nas primeiras posições do Google de forma
                    orgânica. Estratégias de SEO técnico, conteúdo e link building
                    para aumentar sua visibilidade e atrair tráfego qualificado.
                  </p>
                </div>
              </div>
            </a>

            {/* Google Meu Negócio */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="https://wa.me/5511940754639"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 md:p-8">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                    <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                        Google Meu Negócio
                      </span>
                    </span>
                  </div>
                  <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                    Presença Local no Google
                  </h3>
                  <p className="text-orange-200/65">
                    Otimização completa do seu perfil no Google Meu Negócio para
                    aparecer no mapa e nas buscas locais. Ideal para negócios
                    físicos que querem ser encontrados na sua região.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
