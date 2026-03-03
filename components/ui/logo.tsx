import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo-tukis.png";

export default function Logo({ width = 120, height = 48 }: { width?: number; height?: number }) {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Agência Tukis">
      <Image src={logo} alt="Agência Tukis" width={width} height={height} />
    </Link>
  );
}
