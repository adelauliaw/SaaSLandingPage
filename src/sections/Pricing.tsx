import { Element } from 'react-scroll';
// import { useState } from "react";
// import clsx from "clsx";
// import CountUp from "react-countup";
// import { plans } from "../constants/index.tsx";
// import Button from "../components/Button.tsx";

const Pricing = () => {
  // const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element name="skills">
        <div className="container">
          {/* <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16"> */}
          <h3 className=" top-12 h6 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
            22 years old front end developer with expertise in Vue, Node.js, and
            TypeScript, React, also in Automation Testing and a passion for
            building scalable web applications
          </h3>

          {/* <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>

              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              />
            </div> */}
          {/* </div> */}
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
