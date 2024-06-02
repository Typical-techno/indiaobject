import React from "react";

function ContactUs() {
  return (
    <div className="py-36 flex justify-center items-center">
      <div className="flex flex-col gap-16 justify-center items-center w-full px-4 md:px-16 lg:px-36">
        <div className="space-y-2 text-center w-full">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold">Contact Us</p>
          <p className="text-gray-500">
            Feel free to contact us – submit your queries here and we will
            listen
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
          <div className="w-full lg:w-1/2">
            <form className="flex flex-col gap-8 w-full">
              <label
                htmlFor="contactName"
                className="border border-black rounded-xl flex items-center text-left px-2"
              >
                <p className="flex items-center gap-2">
                  <i className="mt-1 fi fi-rs-user"></i> Name
                </p>
                <input
                  name="contactName"
                  id="contactName"
                  className="py-3 px-2 flex-grow focus:outline-none"
                />
              </label>
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <label
                  htmlFor="contactEmail"
                  className="border border-black rounded-xl flex items-center text-left px-2 w-full"
                >
                  <p className="flex items-center gap-2">
                    <i className="mt-1 fi fi-rs-envelope"></i> Email
                  </p>
                  <input
                    name="contactEmail"
                    id="contactEmail"
                    className="py-3 px-2 flex-grow focus:outline-none"
                  />
                </label>
                <label
                  htmlFor="contactPhone"
                  className="border border-black rounded-xl flex items-center text-left px-2 w-full"
                >
                  <p className="flex items-center gap-2">
                    <i className="mt-1 fi fi-rs-phone-call"></i> Phone
                  </p>
                  <input
                    name="contactPhone"
                    id="contactPhone"
                    className="py-3 px-2 flex-grow focus:outline-none"
                  />
                </label>
              </div>
              <label
                htmlFor="contactMessage"
                className="border border-black rounded-xl flex flex-col text-left p-2 overflow-hidden"
              >
                <p className="flex items-center gap-2">
                  <i className="mt-1 fi fi-rs-messages"></i> Message
                </p>
                <textarea
                  name="contactMessage"
                  id="contactMessage"
                  className="focus:outline-none overflow-scroll"
                  style={{ scrollbarWidth: "none" }}
                  rows={11}
                  cols={47}
                />
              </label>
              <button className="py-3 bg-blue-600 text-white font-bold rounded-xl">
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-10 w-full lg:w-1/2">
            <div className="px-8 text-center lg:text-left h-full">
              <div className="px-12 py-6 bg-blue-700 rounded-2xl h-full">
                <p className="flex items-center space-x-4 justify-center lg:justify-start w-full">
                  <i className="fi fi-rs-phone-call bg-white rounded-xl text-blue-700 text-lg mt-1 py-2 px-4"></i>
                  <span className="text-white text-lg">
                    Call Us Directly At
                  </span>
                </p>
                <p className="text-4xl text-white font-semibold my-4">
                  +91 999XXXXXXX
                </p>
                <a href="tel:+919992990399">
                  <button className="bg-blue-500 text-white font-semibold py-2 mt-12 w-full rounded-xl">
                    Call Now
                  </button>
                </a>
              </div>
            </div>
            <div className="px-8 text-center lg:text-left h-full">
              <div className="px-12 py-6 bg-gray-300 rounded-2xl h-full">
                <p className="flex items-center space-x-4 justify-center lg:justify-start w-full">
                  <i className="fi fi-rs-envelope bg-white rounded-xl text-black text-lg mt-1 py-2 px-4"></i>
                  <span className="text-black text-lg">
                    Contact With Our Team
                  </span>
                </p>
                <p className="text-base md:text-4xl text-black font-semibold my-4">
                  support@objectindia.com
                </p>
                <a href="mailto:support@objectindia.com">
                  <button className="bg-blue-500 text-black font-semibold py-2 mt-12 w-full rounded-xl">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
