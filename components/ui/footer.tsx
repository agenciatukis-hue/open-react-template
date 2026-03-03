import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-orange-200/65 transition hover:text-orange-500"
                  href="#servicos"
                >
                  Tráfego Pago
                </a>
              </li>
              <li>
                <a
                  className="text-orange-200/65 transition hover:text-orange-500"
                  href="#servicos"
                >
                  Social Media
                </a>
              </li>
              <li>
                <a
                  className="text-orange-200/65 transition hover:text-orange-500"
                  href="#servicos"
                >
                  SEO
                </a>
              </li>
              <li>
                <a
                  className="text-orange-200/65 transition hover:text-orange-500"
                  href="#servicos"
                >
                  Google Meu Negócio
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-orange-200/65 transition hover:text-orange-500"
                  href="#sobre"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  className="text-orange-200/65 transition hover:text-orange-500"
                  href="#resultados"
                >
                  Resultados
                </a>
              </li>
              <li>
                <a
                  className="text-orange-200/65 transition hover:text-orange-500"
                  href="https://wa.me/5511940754639"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              Para Quem é
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-orange-200/65">
                  Negócios Locais
                </span>
              </li>
              <li>
                <span className="text-orange-200/65">
                  Profissionais Liberais
                </span>
              </li>
              <li>
                <span className="text-orange-200/65">
                  Clínicas e Consultórios
                </span>
              </li>
              <li>
                <span className="text-orange-200/65">
                  Restaurantes e Bares
                </span>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              Contato
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-orange-200/65 transition hover:text-orange-500"
                  href="https://wa.me/5511940754639"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3 inline-block rounded-xl bg-white p-3 shadow-md">
              <Logo width={100} height={40} />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-orange-200/65">
                &copy; 2025 Agência Tukis
                <span className="text-gray-700"> &middot; </span>
                Todos os direitos reservados.
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-orange-500 transition hover:text-orange-400"
                    href="https://wa.me/5511940754639"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.296 18.91c-.395-.198-2.344-1.156-2.707-1.29-.363-.131-.628-.197-.893.199-.264.396-1.023 1.289-1.254 1.553-.23.264-.462.297-.857.099-.396-.199-1.673-.616-3.186-1.966-1.177-1.05-1.973-2.348-2.204-2.745-.23-.396-.024-.61.174-.808.178-.177.396-.462.594-.693.198-.231.264-.396.396-.662.132-.264.066-.495-.033-.693-.1-.198-.893-2.15-1.222-2.943-.322-.773-.65-.668-.893-.68-.23-.012-.495-.015-.76-.015-.264 0-.693.1-1.057.496-.363.396-1.386 1.354-1.386 3.305 0 1.95 1.419 3.833 1.617 4.098.198.264 2.793 4.266 6.769 5.981.946.41 1.684.653 2.26.836.95.302 1.814.26 2.497.157.761-.114 2.344-.958 2.675-1.884.33-.925.33-1.718.231-1.884-.099-.165-.363-.264-.76-.462m-7.23 9.877h-.005a13.16 13.16 0 01-6.708-1.837l-.481-.286-4.99 1.308 1.33-4.863-.314-.499a13.147 13.147 0 01-2.014-7.013c.002-7.267 5.915-13.179 13.184-13.179 3.52 0 6.83 1.374 9.318 3.864a13.1 13.1 0 013.858 9.326c-.004 7.267-5.916 13.179-13.178 13.179M27.277 4.69A15.748 15.748 0 0016.06 0C7.327 0 .214 7.113.211 15.857c0 2.795.73 5.523 2.118 7.926L.076 32l8.408-2.205a15.85 15.85 0 007.576 1.93h.007c8.733 0 15.847-7.114 15.85-15.858a15.762 15.762 0 00-4.64-11.177z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-orange-500 transition hover:text-orange-400"
                    href="#0"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 9.28A6.72 6.72 0 0 0 9.28 16 6.72 6.72 0 0 0 16 22.72 6.72 6.72 0 0 0 22.72 16 6.72 6.72 0 0 0 16 9.28Zm0 11.08A4.36 4.36 0 0 1 11.64 16 4.36 4.36 0 0 1 16 11.64 4.36 4.36 0 0 1 20.36 16 4.36 4.36 0 0 1 16 20.36Zm6.96-11.52a1.56 1.56 0 1 1-1.56-1.56 1.56 1.56 0 0 1 1.56 1.56ZM26.8 10.4a5.18 5.18 0 0 0-1.4-3.64 5.18 5.18 0 0 0-3.64-1.4c-1.44-.08-5.76-.08-7.2 0a5.18 5.18 0 0 0-3.64 1.4 5.18 5.18 0 0 0-1.4 3.64c-.08 1.44-.08 5.76 0 7.2a5.18 5.18 0 0 0 1.4 3.64 5.18 5.18 0 0 0 3.64 1.4c1.44.08 5.76.08 7.2 0a5.18 5.18 0 0 0 3.64-1.4 5.18 5.18 0 0 0 1.4-3.64c.08-1.44.08-5.76 0-7.2Zm-2.76 8.76a4.36 4.36 0 0 1-2.48 2.48c-1.72.68-5.8.52-7.56.52s-5.84.16-7.56-.52a4.36 4.36 0 0 1-2.48-2.48C3.28 17.44 3.44 13.36 3.44 11.6s-.16-5.84.52-7.56a4.36 4.36 0 0 1 2.48-2.48c1.72-.68 5.8-.52 7.56-.52s5.84-.16 7.56.52a4.36 4.36 0 0 1 2.48 2.48c.68 1.72.52 5.8.52 7.56s.16 5.84-.52 7.56Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
