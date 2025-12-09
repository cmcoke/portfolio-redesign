import localFont from "next/font/local";
import Link from "next/link";

const monumentextendedUltrabold = localFont({ src: "../fonts/monumentextended-ultrabold.otf" });

const Contact = () => {
  return (
    <section className="text-center mb-[11rem]">
      <h2 className={`${monumentextendedUltrabold.className} uppercase text-[clamp(1.8rem,0.986rem_+_4.071vw,7.5rem)] leading-[clamp(2rem,1.143rem_+_4.286vw,8rem)]`}>Got a Project?</h2>
      <Link href="mailto:c-coke@live.com" className={`${monumentextendedUltrabold.className} uppercase text-[clamp(1.8rem,0.986rem_+_4.071vw,7.5rem)] leading-[clamp(2rem,1.143rem_+_4.286vw,8rem)] underline decoration-[10px]`}>
        Let&apos;s Talk
      </Link>
    </section>
  );
};
export default Contact;
