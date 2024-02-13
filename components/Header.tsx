import localFont from "next/font/local";
import Link from "next/link";

const HelveticaNowDisplayBold = localFont({ src: "../fonts/HelveticaNowDisplay-Bold.woff2" });

const Header = () => {
  return (
    <header>
      <nav className="mx-[3%] lg:mx-[4%] mt-[2.5rem] md:mt-[3.5rem]">
        <ul className="flex justify-end gap-x-3 md:gap-x-8">
          <li>
            <Link href="#about" className={`${HelveticaNowDisplayBold.className} uppercase`}>
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className={`${HelveticaNowDisplayBold.className} uppercase`}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="mailto:c-coke@live.com" className={`${HelveticaNowDisplayBold.className} uppercase`}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
