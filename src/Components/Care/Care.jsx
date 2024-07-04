const Care = () => {
  return (
    <div className="px-5 md:p-10 lg:p-0 text-[#020043]">
        <h1 className="md:hidden block text-center mb-8 md:text-[30px] lg:text-[48px] font-bold">Comprehensive Care <br />for Every Patient</h1>
      <div className="grid gap-5 md:gap-2 lg:gap-0 md:grid-cols-5 md:grid-rows-2 justify-center">
        {/* one */}
        <div className="p-[18px] rounded-3xl bg-white shadow  md:row-span-2 lg:h-[312px] lg:w-[216px]">
          <h1 className="md:text-[24px] lg:md:text-[24px] lg:text-[40px] font-bold mb-[8px]">90%</h1>
          <p className="md:text-[12px] lg:text-[14px] mb-[23px]">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <div className="flex justify-center items-center">
            <img src="/pie-chart.svg" alt="" />
          </div>
        </div>

        {/* Two */}
        <div className="hidden md:block text-center mb-8 md:text-[24px] lg:text-[48px] font-bold md:col-span-3">
          <h1 className="text-center">Comprehensive Care <br />for Every Patient</h1>
        </div>

        {/* Three */}
        <div className="p-[20px] rounded-3xl bg-white shadow md:row-span-2 lg:h-[312px] lg:w-[216px]">
          <h1 className="md:text-[24px] lg:text-[40px] font-bold mb-[8px]">50+</h1>
          <p className="text-[14px] mb-[23px]">
            Free lession video for patient
          </p>
          <div className="flex justify-center items-center">
            <img src="/vedio-icon.svg" alt="" />
          </div>
        </div>

        {/* Four */}
        <div className="flex p-[20px] rounded-3xl bg-white shadow lg:h-[190px] lg:w-[216px]">
          <div>
          <h1 className="md:text-[24px] lg:text-[40px] font-bold mb-[8px]">500+</h1>
          <p className="text-[14px] mb-[23px]">
          Board-certified doctors
          </p>
          </div>
          <div className="flex items-end">
            <img src="/stamp.svg" alt="" />
          </div>
        </div>

        {/* Five */}
        <div className="mt-7 flex flex-col p-[20px] rounded-3xl bg-white shadow lg:h-[162px] lg:w-[216px]">
        <div className="flex">
          <div className="flex justify-center items-center gap-2">
          <h1 className="md:text-[24px] lg:text-[40px] font-bold mb-[4px]">4.8</h1>
          <img src="/fi-sr-star.png" alt="" />
          </div>
          </div>
          <p className="text-[14px] mb-[13px]">
          Over 20,000 Patient
          </p>
          <img className="h-6 w-16 md:h-6 md:w-16 lg:h-[35px] lg:w-[103px]" src="/Group 7.png" alt="" />
        </div>

        {/* Six */}
        <div className="flex p-[20px] rounded-3xl bg-white shadow lg:h-[190px] lg:w-[216px]">
          <div>
          <h1 className="md:text-[24px] lg:text-[40px] font-bold mb-[8px]">$5000</h1>
          <p className="text-[14px] mb-[23px]">
          Money spend
for poor patient
          </p>
          </div>
          <div className="flex items-end">
          <img className="md:h-[40px] w-[62px]" src="/coin.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
