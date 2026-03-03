export const metadata = {
  title: "Agência Tukis - Marketing Digital Full Service",
  description:
    "Agência de marketing digital full service focada em resultados. Tráfego Pago, Social Media, SEO e Google Meu Negócio.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Services from "@/components/services";
import About from "@/components/about";
import Results from "@/components/results";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Services />
      <About />
      <Results />
      <Cta />
    </>
  );
}
