"use client";

import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white px-3 shadow-md">
          {/* Site branding */}
          <div className="flex flex-1 items-center gap-2">
            <Logo width={90} height={36} />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#servicos"
              className="text-sm text-gray-700 transition hover:text-orange-500"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-sm text-gray-700 transition hover:text-orange-500"
            >
              Sobre
            </a>
            <a
              href="#resultados"
              className="text-sm text-gray-700 transition hover:text-orange-500"
            >
              Resultados
            </a>
          </nav>

          {/* CTA */}
          <div className="flex flex-1 items-center justify-end">
            <a
              href="https://wa.me/5511940754639"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm bg-linear-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
