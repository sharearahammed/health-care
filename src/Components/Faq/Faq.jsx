const Faq = () => {
  return (
    <div className="p-5 md:p-10 lg:p-0 mt-5 md:mt-10 lg:mt-[160px] text-[#020043]">
      <button className="font-semibold text-[12px] md:text-[16px] border border-[#020043] px-2 py-1 md:px-5 md:py-2 rounded-3xl">
        Faq
      </button>
      <h1 className="mt-[16px] text-[16px] md:text-[36px] font-bold">
      Frequntly Asked Question
      </h1>
      <div className="mt-[30px] mb-[12px] rounded-2xl">
        <h3 className="rounded-t-2xl bg-white px-[15px] md:px-[62px] py-2 md:text-xl font-semibold">
        What are your office hours?
        </h3>
        <hr />
        <p className="rounded-b-2xl bg-[#ffffff] px-[16px] md:px-[62px] text-[11px] md:text-[14px] py-2 text-[#343268] pt-[16px]">
        Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
        </p>
      </div>
      <div className="rounded-2xl join-vertical w-full flex flex-col gap-[12px]">
        <div className="md:px-[46px] collapse collapse-arrow join-item bg-white roun">
          <input className="" type="radio" name="my-accordion-4" />
          <div className="collapse-title md:text-xl font-medium">
            <h3 className="bg-white py-2 md:text-xl font-semibold">How can I schedule an appointment?</h3>
          <hr />
          </div>
          <div className="collapse-content">
            <p className="text-[11px] md:text-[14px]">
            You can schedule an appointment by calling our office directly, using our online booking system, or through our patient portal.
            </p>
          </div>
        </div>
        <div className="md:px-[46px] collapse collapse-arrow join-item bg-white">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title md:text-xl font-medium">
          <h3 className="bg-white py-2 md:text-xl font-semibold">Do you accept insurance?</h3>
          <hr />
          </div>
          <div className="collapse-content">
            <p className="text-[11px] md:text-[14px]">
            Yes, we accept most major insurance plans. Please contact our office or check our website for a comprehensive list of accepted insurances.
            </p>
          </div>
        </div>
        <div className="md:px-[46px] collapse collapse-arrow join-item bg-white">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title md:text-xl font-medium">
          <h3 className="bg-white py-2 md:text-xl font-semibold">What should I bring to my appointment?</h3>
          <hr />
          </div>
          <div className="collapse-content">
            <p className="text-[11px] md:text-[14px]">
            Please bring a valid ID, your insurance card, and any relevant medical records or information about your current medications. If you are a new patient, you may need to complete some forms which can be downloaded from our website.
            </p>
          </div>
        </div>
        <div className="md:px-[46px] collapse collapse-arrow join-item bg-white">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title md:text-xl font-medium">
          <h3 className="bg-white py-2 md:text-xl font-semibold">Do you offer telemedicine appointments?</h3>
          <hr />
          </div>
          <div className="collapse-content">
            <p className="text-[11px] md:text-[14px]">
            Yes, we offer telemedicine appointments for certain types of consultations. Please contact our office or check our website for more details and to see if a telemedicine appointment is suitable for your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
