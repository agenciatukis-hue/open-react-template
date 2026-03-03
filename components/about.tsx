export default function About() {
  return (
    <section id="sobre" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-gray-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-orange-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-orange-200/50">
              <span className="inline-flex bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                Por Que a Tukis?
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-orange-200),var(--color-gray-50),var(--color-orange-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Resultados reais para o seu negócio
            </h2>
            <p className="text-lg text-orange-200/65">
              Não somos apenas mais uma agência. Entendemos a realidade de
              empreendedores e profissionais liberais que precisam de resultados
              concretos e mensuráveis.
            </p>
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article data-aos="fade-up">
              <svg
                className="mb-3 fill-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Atendimento Personalizado
              </h3>
              <p className="text-orange-200/65">
                Cada negócio é único. Criamos estratégias sob medida para as
                suas necessidades, com um atendimento próximo e consultivo.
              </p>
            </article>
            <article data-aos="fade-up" data-aos-delay={100}>
              <svg
                className="mb-3 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Foco em ROI
              </h3>
              <p className="text-orange-200/65">
                Cada real investido é monitorado. Otimizamos suas campanhas
                constantemente para garantir o melhor retorno sobre investimento.
              </p>
            </article>
            <article data-aos="fade-up" data-aos-delay={200}>
              <svg
                className="mb-3 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Equipe Especializada
              </h3>
              <p className="text-orange-200/65">
                Profissionais certificados em Google Ads, Meta Ads e SEO
                dedicados a potencializar os resultados do seu negócio.
              </p>
            </article>
            <article data-aos="fade-up" data-aos-delay={300}>
              <svg
                className="mb-3 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Relatórios Transparentes
              </h3>
              <p className="text-orange-200/65">
                Relatórios claros e objetivos com métricas que importam.
                Você sempre sabe exatamente onde seu investimento está indo.
              </p>
            </article>
            <article data-aos="fade-up" data-aos-delay={400}>
              <svg
                className="mb-3 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Estratégia Integrada
              </h3>
              <p className="text-orange-200/65">
                Todas as frentes do marketing digital trabalhando juntas:
                tráfego, redes sociais, SEO e presença local em sinergia.
              </p>
            </article>
            <article data-aos="fade-up" data-aos-delay={500}>
              <svg
                className="mb-3 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Suporte Ágil
              </h3>
              <p className="text-orange-200/65">
                Atendimento rápido e direto pelo WhatsApp. Sem burocracia,
                sem espera. Estamos sempre disponíveis quando você precisar.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
