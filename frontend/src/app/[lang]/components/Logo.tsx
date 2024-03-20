import Link from "next/link";
import Image from "next/image";

export default function Logo({
  src,
}: {
  src: string | null;
}) {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
    >
      {src && <Image src={src} alt="logo" width={320} height={64} priority={true} />}
    </Link>
  );
}