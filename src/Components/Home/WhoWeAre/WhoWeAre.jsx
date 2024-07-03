const WhoWeAre = () => {
  return (
    <div className="p-5 md:p-10 lg:p-0 mt-5 md:mt-[160px] text-[#020043]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[123px]">
        <div>
        <button className="font-semibold text-[12px] md:text-[16px] border border-[#020043] px-2 py-1 md:px-5 md:py-2 rounded-3xl">
        Who we are
      </button>
      <h1 className="mt-[16px] text-[16px] md:text-[36px] font-bold">
      We Help To Get <br />Soultions
      </h1>
      <p className="text-[#4D4C7B] text-[12px] md:text-[16px] text-justify mt-[16px]">
      We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.

      </p>
        </div>
        <div>
            <div className="relative">
                <img src="/Rectangle 24.png" alt="" />
                <div className="absolute top-[125px] -left-[15px] md:top-[225px] md:-left-[80px] flex flex-col justify-center items-center bg-[#343268] text-[#FFFFFF] py-7 px-5 w-[180px] md:h-[210px] md:w-[358px] rounded-3xl">
                    <div>
                    <h2 className="md:text-[26px]">
                    Our mission is simple
                    </h2>
                    <p className="text-[10px] md:text-[16px] font-extralight">
                    To provide high-quality healthcare services that are accessible, personalized, and patient-centered.
                    </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
