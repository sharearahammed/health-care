/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div className="p-5 md:p-10 lg:p-0 mt-5 md:mt-10 lg:mt-[160px] text-[#020043]">
      <button className="font-semibold text-[12px] md:text-[16px] border border-[#020043] px-2 py-1 md:px-5 md:py-2 rounded-3xl">
        Testimonial
      </button>
      <h1 className="mt-[16px] text-[16px] md:text-[36px] font-bold">
        What they say about us
      </h1>
      <div className="mt-[30px] grid grid-cols-1 md:grid-cols-3 gap-[44px]">
        <div className="bg-white shadow-sm p-5 md:p-[20px] rounded-3xl">
          <h2 className="text-[14px] md:text-[19px] font-bold">
            Expertise and Compassion <br />
            Combined
          </h2>
          <p className="mt-[12px] text-[#4D4C7B] text-justify text-[12px]">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex gap-[12px] mt-[16px] items-center">
            <div>
              <img src="/women.png" alt="" />
            </div>
            <div>
              <p className="text-[12px] text-[#4D4C7B]">
                <span className="text-[#020043] font-bold">Sarah D,</span> IT
                Professional
              </p>
              <img src="/star.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm p-5 md:p-[20px] rounded-3xl">
          <h2 className="text-[14px] md:text-[19px] font-bold">
            Life-Saving Care, Life-Changing Experience
          </h2>
          <p className="mt-[12px] text-[#4D4C7B] text-justify text-[12px]">
            My experience at [Healthcare Provider Name] was life-changing. The
            prompt and accurate diagnosis, coupled with the advanced treatments
            they provided, saved my life.
          </p>
          <div className="flex gap-[12px] mt-[35px] items-center">
            <div>
              <img src="/man1.png" alt="" />
            </div>
            <div>
              <p className="text-[#4D4C7B] text-[12px]">
                <span className="text-[#020043] font-bold">Michael R,</span>{" "}
                Business Executive
              </p>
              <img src="/star.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm p-5 md:p-[20px] rounded-3xl">
          <h2 className="text-[14px] md:text-[19px] font-bold">
            A Partner in Health and
            <br />
            Wellness
          </h2>
          <p className="text-[12px] mt-[12px] text-[#4D4C7B] text-justify">
            As a busy professional, I appreciate the convenience and quality of
            care I receive at [Healthcare Provider Name]. From telemedicine
            consultations to routine check-ups, they've become my trusted
            partner in health and
          </p>
          <div className="flex gap-[12px] mt-[16px] items-center">
            <div>
              <img src="/man2.png" alt="" />
            </div>
            <div>
              <p className="text-[#4D4C7B] text-[12px]">
                <span className="text-[#020043] font-bold">David S,</span>{" "}
                Lawyer
              </p>
              <img src="/star.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-[24px] flex justify-center items-center"><img src="/dot.svg" alt="" /></p>
    </div>
  );
};

export default Testimonial;
