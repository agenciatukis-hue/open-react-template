export default function Results() {
  return (
    <section id="resultados">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-gray-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-orange-200),var(--color-gray-50),var(--color-orange-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-orange-200/65">
              Resultados que falam por si. Veja como ajudamos negócios locais
              e profissionais liberais a crescerem no digital.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <article
              className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-orange-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-orange-200/65 before:content-['\u201C'] after:content-['\u201D']">
                  A Agência Tukis transformou a presença digital da minha clínica.
                  Em 3 meses, triplicamos o número de agendamentos vindos do Google.
                  O atendimento é excepcional e os resultados falam por si!
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20 text-sm font-semibold text-orange-400">
                    RM
                  </div>
                  <div className="text-sm font-medium text-gray-200">
                    <span>Dr. Ricardo Mendes</span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-orange-200/65">Clínica Odontológica</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Testimonial 2 */}
            <article
              className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-orange-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-orange-200/65 before:content-['\u201C'] after:content-['\u201D']">
                  Sempre tive medo de investir em marketing digital, mas a equipe
                  da Tukis me passou confiança desde o primeiro contato. Hoje meu
                  restaurante lota todos os dias graças às campanhas no Instagram.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20 text-sm font-semibold text-orange-400">
                    AF
                  </div>
                  <div className="text-sm font-medium text-gray-200">
                    <span>Ana Ferreira</span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-orange-200/65">Restaurante & Bistrô</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Testimonial 3 */}
            <article
              className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-orange-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-orange-200/65 before:content-['\u201C'] after:content-['\u201D']">
                  O trabalho de SEO e Google Meu Negócio da Tukis colocou meu
                  escritório de advocacia na primeira página do Google. Os
                  leads qualificados aumentaram em mais de 200%. Recomendo demais!
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20 text-sm font-semibold text-orange-400">
                    ML
                  </div>
                  <div className="text-sm font-medium text-gray-200">
                    <span>Dr. Marcos Lima</span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-orange-200/65">Escritório de Advocacia</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
