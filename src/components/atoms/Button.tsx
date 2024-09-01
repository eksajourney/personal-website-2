import { ButtonProps } from "@/types/component";
import clsx from "clsx";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function Button({ route, name, variant }: ButtonProps) {
  let buttonStyles = "";
  let iconStyles = "";

  switch (variant) {
    case "primary":
      buttonStyles = "bg-amber-400 w-max";
      iconStyles = "group-hover:text-zinc-50";
      break;
    case "primary-border":
      buttonStyles = "border border-amber-400 hover:text-amber-400";
      break;
    case "email-primary":
      buttonStyles = "bg-amber-400 hover:bg-amber-500";
      iconStyles = "group-hover:text-zinc-50";
      break;
    case "email-secondary":
      buttonStyles = "w-full sm:w-max bg-zinc-950 text-zinc-50";
      iconStyles = "group-hover:text-amber-400";
      break;
    case "secondary":
      buttonStyles = "bg-zinc-950 text-zinc-50";
      iconStyles = "group-hover:text-amber-400";
      break;
    case "secondary-border":
      buttonStyles = "w-full sm:w-max border border-zinc-950 text-zinc-50";
      iconStyles = "group-hover:text-zinc-950";
      break;
    default:
      buttonStyles = "bg-gray-300 text-black px-4 py-2 rounded";
  }

  return (
    <Link
      href={route}
      className={clsx(
        "group flex items-center gap-2 overflow-hidden p-4 text-xl sm:px-8 sm:py-4 lg:text-lg",
        buttonStyles,
      )}
    >
      {(variant === "email-primary" || variant === "email-secondary") && (
        <BiLogoGmail
          className={clsx(
            "transition-transform duration-300 ease-in-out group-hover:scale-[10]",
            iconStyles,
          )}
        />
      )}{" "}
      <span className="z-10">{name}</span>{" "}
      {variant !== "email-primary" && variant !== "email-secondary" && (
        <FaArrowCircleRight
          className={clsx(
            "transition-transform duration-300 ease-in-out group-hover:-rotate-45 group-hover:scale-[10]",
            iconStyles,
          )}
        />
      )}
    </Link>
  );
}
