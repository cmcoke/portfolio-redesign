import localFont from "next/font/local";

const monumentextendedUltrabold = localFont({ src: "../fonts/monumentextended-ultrabold.otf" });

const Hero = () => {
  return (
    <section className="mt-[clamp(1rem,-0.143rem_+_5.714vw,9rem)] mx-[5%]">
      <h1 className={`${monumentextendedUltrabold.className} text-[clamp(1.9rem,0.243rem_+_8.286vw,13.5rem)] uppercase leading-[0.85] mb-16`}>
        Front-end <br /> developer <br /> based in kgn, jamaica{" "}
      </h1>
    </section>
  );
};
export default Hero;
