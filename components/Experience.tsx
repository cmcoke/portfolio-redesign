import localFont from "next/font/local";

const helveticaNowDisplayRegular = localFont({ src: "../fonts/HelveticaNowDisplay-Regular.woff2" });

const Experience = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h2 className={`${helveticaNowDisplayRegular.className} text-[clamp(1.8rem,1.762rem_+_0.188vw,2.063rem)]`}>Bridges To Science</h2>
          <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}>Freelance WordPress Developer </p>
        </div>
        <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}>Jun. 2023 - Present</p>
      </div>

      <hr className="border border-solid border-[#969696] mt-[2.5rem]" />

      <div className="mt-[4rem]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className={`${helveticaNowDisplayRegular.className} text-[clamp(1.8rem,1.762rem_+_0.188vw,2.063rem)]`}>World Hunger Team</h2>
            <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}>Freelance WordPress Developer </p>
          </div>
          <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}>Nov. 2022 - Jan. 2023</p>
        </div>
      </div>

      <hr className="border border-solid border-[#969696] mt-[2.5rem]" />

      <div className="mt-[4rem]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className={`${helveticaNowDisplayRegular.className} text-[clamp(1.8rem,1.762rem_+_0.188vw,2.063rem)]`}>Standish Foundation for Children</h2>
            <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}>Freelance WordPress Developer</p>
          </div>
          <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}>Nov. 2022 - Nov. 2022</p>
        </div>
      </div>

      <hr className="border border-solid border-[#969696] mt-[2.5rem]" />

      <div className="mt-[4rem]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className={`${helveticaNowDisplayRegular.className} text-[clamp(1.8rem,1.762rem_+_0.188vw,2.063rem)]`}>Black Doulas for Black Mamas</h2>
            <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}>Freelance WordPress Developer</p>
          </div>
          <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}>Aug. 2022 - Oct. 2022 </p>
        </div>
      </div>

      <hr className="border border-solid border-[#969696] mt-[2.5rem]" />

      <div className="mt-[4rem]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className={`${helveticaNowDisplayRegular.className} text-[clamp(1.8rem,1.762rem_+_0.188vw,2.063rem)]`}>Transforming Youths Into Adults</h2>
            <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}>Freelance Front-end Web Developer </p>
          </div>
          <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}>May. 2022 - Jul. 2022 </p>
        </div>
      </div>

      <hr className="border border-solid border-[#969696] mt-[2.5rem]" />

      <div className="mt-[4rem]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className={`${helveticaNowDisplayRegular.className} text-[clamp(1.8rem,1.762rem_+_0.188vw,2.063rem)]`}>iDREAM for Racial Health Equity</h2>
            <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}>Freelance WordPress Developer</p>
          </div>
          <p className={`${helveticaNowDisplayRegular.className} text-[clamp(1.1rem,1.043rem_+_0.286vw,1.5rem)]`}> Dec. 2022 - May. 2022 </p>
        </div>
      </div>

      <hr className="border border-solid border-[#969696] mt-[2.5rem]" />
    </>
  );
};
export default Experience;
