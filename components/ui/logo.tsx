import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo-tukis.png";

export default function Logo({ width = 160, height = 90 }: { width?: number; height?: number }) {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Agência Tukis">
      <Image src={logo} alt="Agência Tukis" width={width} height={height} className="object-contain drop-shadow-md" style={{ width: "auto", maxWidth: "none" }} />
    </Link>
  );
}
