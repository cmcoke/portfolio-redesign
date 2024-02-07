import localFont from "next/font/local";
import Link from "next/link";
import Experience from "./Experience";

const monumentextendedUltrabold = localFont({ src: "../fonts/monumentextended-ultrabold.otf" });
const helveticaNowDisplayBold = localFont({ src: "../fonts/HelveticaNowDisplay-Bold.woff2" });
const helveticaNowDisplayRegular = localFont({ src: "../fonts/HelveticaNowDisplay-Regular.woff2" });

const Projects = () => {
  return (
    <section className="mx-[5%] mt-[clamp(4rem,3.143rem_+_4.286vw,10rem)] mb-[clamp(6rem,3.714rem_+_11.429vw,22rem)]" id="work">
      <ul className={`${monumentextendedUltrabold.className}`}>
        <li className="mb-4 lg:mb-0">
          <Link href="https://standishfoundation.org/" rel="noopener noreferrer" target="_blank" className="uppercase text-[clamp(1.7rem,1.157rem_+_2.714vw,5.5rem)] leading-7 lg:leading-normal">
            Standish Foundation
          </Link>
        </li>

        <li className="mb-4 lg:mb-0">
          <Link href="https://spartan-fitness.netlify.app/" rel="noopener noreferrer" target="_blank" className="uppercase text-[clamp(1.7rem,1.157rem_+_2.714vw,5.5rem)] leading-7 lg:leading-normal">
            Spartan Fitness
          </Link>
        </li>

        <li className="mb-4 lg:mb-0">
          <Link href="https://www.houstonsciencefestival.org/" rel="noopener noreferrer" target="_blank" className="uppercase text-[clamp(1.7rem,1.157rem_+_2.714vw,5.5rem)] leading-7 lg:leading-normal">
            Houston Science Festival
          </Link>
        </li>

        <li className="mb-4 lg:mb-0">
          <Link href="https://cmc-uflix.vercel.app/" rel="noopener noreferrer" target="_blank" className="uppercase text-[clamp(1.7rem,1.157rem_+_2.714vw,5.5rem)] leading-7 lg:leading-normal">
            The Uflix App
          </Link>
        </li>

        <li className="mb-4 lg:mb-0">
          <Link href="https://www.worldhungerteam.org/" rel="noopener noreferrer" target="_blank" className="uppercase text-[clamp(1.7rem,1.157rem_+_2.714vw,5.5rem)] leading-7 lg:leading-normal">
            World Hunger Team
          </Link>
        </li>
      </ul>

      <div className="mt-[6rem]">
        <h2 className={`${helveticaNowDisplayBold.className} text-[clamp(1rem,0.929rem_+_0.357vw,1.5rem)] uppercase mt-[2rem] mb-[1rem]`}>Experience:</h2>
        <Experience />
      </div>
    </section>
  );
};
export default Projects;
