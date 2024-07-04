const Service = () => {
  return (
    <div id="services" className="p-5 md:p-10 lg:p-0 mt-5 md:mt-10 lg:mt-[160px] text-[#020043]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[124px]">
        <div>
          <button className="font-semibold text-[12px] md:text-[14px] lg:text-[16px] border border-[#020043] px-2 py-1 md:px-5 md:py-2 rounded-3xl">
            Service
          </button>
          <h1 className="mt-[16px] text-[16px] md:text-[20px] lg:text-[36px] font-bold">
          Empowering Health, Enriching Lives
          </h1>
          <p className="text-[#4D4C7B] text-[12px] md:text-[12px] lg:text-[16px] text-justify mt-[16px]">
          We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
          </p>
          <button className="mt-[40px] flex justify-center items-center gap-1 md:gap-3 bg-[#FFC637] py-1 px-2 md:py-[12px] md:px-5 font-bold text-[#020043] rounded-xl text-[7px] md:text-[11px] lg:text-[16px]">
            Appointment{" "}
            <img className="h-2 md:h-[16px]" src="/Arrow.svg" alt="" />
          </button>
        </div>
        <div>
            <div className="relative text-white">
                <img className="rounded-2xl" src="/Rectangle 27-2.png" alt="" />
                <div className="absolute flex items-center justify-center bg-black bg-opacity-55 top-[150px] left-[10px] md:top-[133px] lg:top-[230px] lg:left-[20px] h-[100px] w-[220px] md:h-[110px] md:w-[260px] lg:h-[144px] lg:w-[321px] px-2 py-1 md:px-[18px] md:py-[18px] rounded-2xl">
                    <div>
                    <h2 className="text-[14px] lg:text-[20px] font-bold">
                    Advanced Technology 
                    </h2>
                    <p className="text-[11px] lg:text-[12px]">
                    Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                    </p>
                    </div>
                    <div className="mt-9 md:mt-16 p-4 rounded-full bg-[#FFC637]"><p><img className="w-[20px]" src="/Arrow 2.svg" alt="" /></p></div>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[124px]">
      <div>
            <div className="relative text-white">
                <img className="rounded-2xl" src="/Rectangle 27-1.png" alt="" />
                <div className="absolute flex items-center justify-center bg-black bg-opacity-55 top-[150px] left-[10px] md:top-[133px] lg:top-[230px] lg:left-[20px] h-[100px] w-[220px] md:h-[110px] md:w-[260px] lg:h-[144px] lg:w-[321px] px-2 py-1 md:px-[18px] md:py-[18px] rounded-2xl">
                    <div>
                    <h2 className="text-[14px] lg:text-[20px] font-bold">
                    Online Doctor Meet 
                    </h2>
                    <p className="text-[11px] lg:text-[12px]">
                    Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                    </p>
                    </div>
                    <div className="mt-9 md:mt-16 p-4 rounded-full bg-[#FFC637]"><p><img className="w-[20px]" src="/Arrow 2.svg" alt="" /></p></div>
                </div>
            </div>
        </div>
        <div>
            <div className="mt-10 md:mt-0 relative text-white">
                <img className="rounded-2xl" src="/Rectangle 27.png" alt="" />
                <div className="absolute flex items-center justify-center bg-black bg-opacity-55 top-[150px] left-[10px] md:top-[133px] lg:top-[230px] lg:left-[20px] h-[120px] w-[220px] md:h-[110px] md:w-[260px] lg:h-[144px] lg:w-[321px] px-2 py-1 md:px-[18px] md:py-[18px] rounded-2xl">
                    <div>
                    <h2 className="text-[14px] lg:text-[20px] font-bold">
                    Consultancy your health 
                    </h2>
                    <p className="text-[11px] lg:text-[12px]">
                    Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                    </p>
                    </div>
                    <div className="mt-16 md:mt-16 p-4 rounded-full bg-[#FFC637]"><p><img className="w-[20px]" src="/Arrow 2.svg" alt="" /></p></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
