import React, { useEffect, useState } from "react";
import TopHeadNameBar from "../../components/UI/TopHeadNameBar";

function ContactUs() {
  const [headName, setHeadName] = useState();

  useEffect(() => {
    let tempName = window.location.pathname.toUpperCase().replace("/", "");
    setHeadName(tempName);
  }, []);

  return (
    <div className="h-full">
      <TopHeadNameBar headName={headName} />
      <div className="flex items-center justify-center p-16 w-full h-full">
        <div className="flex border rounded-2xl overflow-hidden border-black">
          <div className="p-6 space-y-10 border-r-2 border-black">
            <p className="text-8xl font-bold">
              <span className="text-blue-500">{"<"}</span>Contact Us
              <span className="text-blue-500">{">"}</span>
            </p>
            <div>
              <form className="flex flex-col space-y-8 duration-300">
                <input
                  placeholder="Contact Name"
                  className="text-xl focus:text-2xl focus:outline-0 border-b-2 duration-150 px-3"
                />
                <input
                  placeholder="Street"
                  className="text-xl focus:text-2xl focus:outline-0 border-b-2 duration-150 px-3"
                />
                <div className="flex justify-between">
                  <input
                    placeholder="City"
                    className="text-xl focus:text-2xl focus:outline-0 border-b-2 mr-4 duration-150 px-3"
                  />
                  <input
                    placeholder="Postcode"
                    inputMode="numeric"
                    className="text-xl focus:text-2xl focus:outline-0 border-b-2 duration-150 px-3"
                  />
                </div>
                <input
                  placeholder="Contact Phone"
                  inputMode="numeric"
                  className="text-xl focus:text-2xl focus:outline-0 border-b-2 duration-150 px-3"
                />
                <input
                  placeholder="E-Mail"
                  type="mail"
                  className="text-xl focus:text-2xl focus:outline-0 border-b-2 duration-150 px-3"
                />
                <input
                  placeholder="Let's talk about your idea"
                  className="text-xl focus:text-2xl focus:outline-0 border-b-2 duration-150 px-3"
                />
                <button className="bg-blue-500 rounded p-2">
                  <p className="text-xl font-bold">SUBMIT</p>
                </button>
              </form>
            </div>
          </div>
          <div>
            <iframe
              title="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55892.74399852038!2d76.61633495000001!3d28.88953605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85a5414251a5%3A0x9f011cc2777a4544!2sRohtak%2C%20Haryana!5e0!3m2!1sen!2sin!4v1716916301325!5m2!1sen!2sin"
              width="800"
              height="600"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-tr-2xl rounded-br-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
