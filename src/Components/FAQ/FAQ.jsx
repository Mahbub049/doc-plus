const FAQ = () => {
  return (
    <div className="mb-[160px]">
      <div>
        <div className="flex">
          <p className="px-[25px] py-[10px] border-[#343268] border-2 rounded-full">
            FAQ
          </p>
        </div>
        <div className="space-y-[16px] mt-8 mb-[30px]">
          <h1 className=" text-[46px] font-semibold">
            Frequntly Asked Question
          </h1>
        </div>
      </div>
      <div className="mx-[45px]">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          What are your office hours?
          </div>
          <div className="collapse-content">
            <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How can I schedule an appointment?
          </div>
          <div className="collapse-content">
            <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Do you accept insurance?
          </div>
          <div className="collapse-content">
            <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          What should I bring to my appointment?
          </div>
          <div className="collapse-content">
            <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content">
            <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
