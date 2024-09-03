import { TitleWithDescriptionProps } from "@/types/component";
import clsx from "clsx";

export default function TitleWithDescriptionSection({
  title,
  description,
  titleVariant,
  descriptionVariant,
  isWithDash = true,
}: TitleWithDescriptionProps) {
  const titleVariantClass = {
    primary: "text-amber-400",
    secondary: "text-zinc-950",
  }[titleVariant];

  const descriptionVarianClass = {
    primary: "text-amber-400",
    secondary: "text-zinc-950",
  }[descriptionVariant];

  return (
    <>
      <h2
        className={clsx(titleVariantClass, "text-3xl", {
          "flex w-full items-center gap-2 whitespace-nowrap": isWithDash,
        })}
      >
        <span className="font-bold">{title}</span>
        {isWithDash && (
          <span
            className={clsx("h-[0.1rem] w-2/4 rounded-full", {
              "bg-zinc-950": titleVariant === "secondary",
              "bg-amber-400": titleVariant === "primary",
            })}
          />
        )}
      </h2>
      <p className={clsx("text-xl lg:text-lg", descriptionVarianClass)}>
        {description}
      </p>
    </>
  );
}
