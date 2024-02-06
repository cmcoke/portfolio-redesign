import Link from "next/link";
import localFont from "next/font/local";

const helveticaNowDisplayRegular = localFont({ src: "../fonts/HelveticaNowDisplay-Regular.woff2" });

const Footer = () => {
  return (
    <footer className="mx-[5%] mt-[clamp(8rem,6.571rem_+_7.143vw,18rem)] mb-[2rem]">
      <div className="flex justify-between">
        <p className={`${helveticaNowDisplayRegular.className} text-[clamp(0.938rem,0.821rem_+_0.58vw,1.75rem)] uppercase leading-5 md:leading-8`}>
          Created <br /> by Charles Coke
        </p>
        <ul className="flex flex-col md:flex-row md:gap-6">
          <li>
            <Link href="https://www.linkedin.com/in/charles-coke/" rel="noopener noreferrer" target="_blank" className={`${helveticaNowDisplayRegular.className} text-[clamp(0.938rem,0.821rem_+_0.58vw,1.75rem)] uppercase`}>
              Github
            </Link>
          </li>
          <li>
            <Link href="https://github.com/cmcoke" rel="noopener noreferrer" target="_blank" className={`${helveticaNowDisplayRegular.className} text-[clamp(0.938rem,0.821rem_+_0.58vw,1.75rem)] uppercase`}>
              Linkedin
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
