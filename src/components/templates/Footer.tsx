import ButtonSocialMediaList from "../molecules/ButtonSocialMediaList";
import NavigationFooter from "../organisms/NavigationFooter";
import Logo from "../atoms/Logo";

export default function Footer() {
  return (
    <footer className="bg-zinc-950">
      <div className="mx-auto max-w-7xl p-4 sm:justify-between md:flex lg:px-8 [&>div]:border-b [&>div]:border-zinc-400 [&>div]:py-6 md:[&>div]:border-none">
        <div className="md:flex md:flex-col md:items-center">
          <Logo width={120} height={120} isWithText={false} isDark={true} />
          <p className="mt-4 text-sm text-zinc-50">
            Let's Connect and Grow Together!
          </p>
          <ButtonSocialMediaList />
        </div>
        <NavigationFooter />
      </div>
      <p className="mx-auto max-w-7xl px-4 py-6 text-zinc-50 lg:px-8">
        © 2024, Made with ☕ & ❤️ by <span className="font-bold">EKSA</span>.
      </p>
    </footer>
  );
}
