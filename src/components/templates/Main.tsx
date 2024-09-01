import { MainProps } from "@/types/main";

export default function Main({ children }: MainProps) {
  return (
    <main className="relative mx-auto mt-20 w-full max-w-7xl p-4 sm:px-8 lg:px-16">
      <div className="absolute -top-20 right-0 h-96 w-40 bg-amber-500 sm:w-80 lg:w-96" />
      {children}
    </main>
  );
}
