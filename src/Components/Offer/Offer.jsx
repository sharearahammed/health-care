const Offer = () => {
  return (
    <div className="p-5 md:p-10 lg:p-0 mt-5 md:mt-[160px] text-[#020043] flex justify-center items-center">
      <div className="relative">
        <img
          className="rounded-2xl md:rounded-[48px]"
          src="/Rectangle 32.png"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020043] from-20% via-[#15133e4d] via-100%  opacity-90 rounded-2xl md:rounded-[48px]">
          <div className="py-2 px-5 md:py-4 lg:py-16 md:px-12">
            <h1 className="flex justify-end">
              <img className="h-[10px] md:h-[32px]" src="/logo light.png" alt="" />
            </h1>
            <h1 className="text-[#FFFFF5] text-[13px] md:text-[30px] lg:text-[40px] font-semibold">Get Your <br /> First Appointment <br /> at 50% Off!</h1>
            <div className="flex gap-1 md:gap-5 mt-2 md:mt-[16px] lg:mt-[24px]">
                <button className="flex justify-center items-center gap-1 md:gap-3 bg-[#FFC637] py-1 px-2 md:py-[12px] md:px-5 font-bold text-[#020043] rounded-xl text-[7px] md:text-[16px]">Appointment <img className="h-2 md:h-[16px]" src="/Arrow.svg" alt="" /></button>
                <button className="flex justify-center items-center gap-1 md:gap-3 border border-1 border-white py-1 px-2 md:py-[12px] md:px-5 font-bold text-white rounded-xl text-[7px] md:text-[16px]">Learn More <img className="h-2 md:h-[16px]" src="/Arrow 1.svg" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
