import localFont from "next/font/local";

const helveticaNowDisplayRegular = localFont({ src: "../fonts/HelveticaNowDisplay-Regular.woff2" });
const helveticaNowDisplayBold = localFont({ src: "../fonts/HelveticaNowDisplay-Bold.woff2" });

const About = () => {
  return (
    <section className="md:mt-[5rem] 2xl:mt-[8rem] mx-[5%]" id="about">
      <p className={`${helveticaNowDisplayRegular.className} leading-[1.6] text-[clamp(1rem,0.929rem_+_0.357vw,1.5rem)]  xl:w-[55%] mb-6`}>Hi, I&apos;m Charles Coke! I&apos;m passionate about crafting modern, user-friendly websites that make a positive impact. Over the past two years, I&apos;ve helped non-profit organizations and socially conscious businesses improve their online presence by building engaging experiences that are not only visually appealing but also functionally robust.</p>

      <p className={`${helveticaNowDisplayRegular.className} leading-[1.6] text-[clamp(1rem,0.929rem_+_0.357vw,1.5rem)]  xl:w-[55%] mb-6`}>I believe every website can be a powerful tool for connection and action. Whether you&apos;re a non-profit seeking to inspire donations, a small business owner building your brand, or an individual artist sharing your creative work, I can help you translate your vision into a website that resonates with your audience. I combine my expertise in accessibility, responsive design, and cutting-edge technologies to ensure your website not only looks great but also delivers results.</p>

      <p className={`${helveticaNowDisplayRegular.className} leading-[1.6] text-[clamp(1rem,0.929rem_+_0.357vw,1.5rem)]  xl:w-[55%] mb-6`}>Think of me as your partner in crafting a digital space that reflects your values, engages your audience, and achieves your goals. Let&apos;s collaborate to bring your online vision to life!</p>

      <div>
        <h2 className={`${helveticaNowDisplayBold.className} text-[clamp(1rem,0.929rem_+_0.357vw,1.5rem)] uppercase mt-[2rem] mb-[1rem]`}>Tech Stack Used:</h2>
        <span className={`${helveticaNowDisplayRegular.className} block text-[clamp(1rem,0.929rem_+_0.357vw,1.5rem)]`}>HTML5 / CSS3 / SCSS / SASS / JavaScript / TypeScript </span>
        <span className={`${helveticaNowDisplayRegular.className} block text-[clamp(1rem,0.929rem_+_0.357vw,1.5rem)]`}>React / Next / jQuery / GSAP / Framer Motion </span>
        <span className={`${helveticaNowDisplayRegular.className} block text-[clamp(1rem,0.929rem_+_0.357vw,1.5rem)]`}> WordPress / Sanity / Git (GitHub) / Figma / Photoshop</span>
      </div>
    </section>
  );
};
export default About;
