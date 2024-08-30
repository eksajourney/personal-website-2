import { ButtonSocialMediaItemProps } from "@/types/footer";
import Link from "next/link";

export default function ButtonSocialMediaItem({
  name,
  link,
  logo,
}: ButtonSocialMediaItemProps) {
  return (
    <Link
      className="text-3xl text-zinc-50 hover:text-amber-400"
      href={link}
      title={name}
    >
      {logo}
    </Link>
  );
}
