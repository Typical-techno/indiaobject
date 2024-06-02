import React from "react";

function AboutUsHome() {
  return (
    <div>
      <div>
        <div class="py-2 md:py-36">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light sm:text-lg">
              <h2 class="mb-4 text-left text-6xl tracking-tight font-extrabold ">
                So<span className="text-blue-500"> Object </span>India
              </h2>
              <p class="mb-4 text-left">
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick, but big
                enough to deliver the scope you want at the pace you need. Small
                enough to be simple and quick, but big enough to deliver the
                scope you want at the pace you need.
              </p>
              <p className="text-left">
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <img
                class="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="office content 1"
              />
              <img
                class="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHome;
