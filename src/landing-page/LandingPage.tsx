import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";

const LandingPage = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url('https://yourdisabilityadvocate.com/wp-content/uploads/2024/10/fight-ssdi.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full lg:w-3/5 flex items-center justify-center z-10">
              <div className="bg-[#A661A8] text-[#080836] rounded-2xl p-5 lg:p-6 shadow-lg w-full max-w-lg flex flex-col items-center justify-center">
                <span className="text-5xl font-bold mb-3">Free</span>
                <span className="text-4xl font-semibold mb-1">Evaluation</span>
                <p className="text-sm text-white p-3 py-7 lg:text-base mb-4 leading-relaxed tracking-wide">
                  If you’re looking for a disability lawyer in United States

                  alternative, we would love to talk to you about the specifics
                  of your new or pending disability claim. Please complete our
                  free case evaluation and we will contact you within 24 hours
                  or feel free to contact us directly at +1(773)683-3032. 
                </p>
                <Link to="/contact-us">
                  <button className="bg-[#0D2E4F] text-white px-7 py-2 rounded hover:bg-blue-700">
                    Get Help Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-2/5 flex items-center justify-center text-white z-10">
              <div className="text-left">
                <p className="text-sm font-semibold my-6 w-full">
                  Our shared commitment is simple: to help you secure the
                  benefits you deserve. We work tirelessly to streamline the
                  process and advocate on your behalf, so you can receive the
                  financial support you need.
                </p>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  One Mutual Goal- to get you paid
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#85c7c9] text-center py-16 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
          We Eliminate the Stress of Disability Claims!
        </h1>
        <p className="text-base md:text-lg text-white mb-8">
          At Disability Advocates Group, we simplify the process and support you
          every step of the way, making your experience as smooth and
          stress-free as possible.
        </p>
        <button
          className="bg-[#0D2E4F] text-white py-3 px-6 rounded hover:bg-[#0B243E] transition"
          onClick={() => (window.location.href = "skype:+1(773)683-3032?call")}
        >
          Click to Call
        </button>
      </div>

      {/* About Section */}
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6">
            <p>
              Thank you for visiting! We hope our site and our team serve as a
              helpful, reliable resource for your disability claim needs.
            </p>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
              Your Disability Advocate - Disability Advocates Group
            </h1>
            <p className="text-gray-700 mb-4">
              Disability Advocates Group offers a personal, compassionate
              approach to disability representation that our clients value. With
              over 25 years of experience, Kim Engler knows how to navigate
              government red tape and help individuals secure the benefits they
              deserve. Unlike many traditional Social Security attorneys, Kim
              offers a warm, approachable touch to each case.
            </p>
            <p className="text-gray-700 mb-4">
              They understand the frustration and financial challenges of the
              Social Security Disability process and work tirelessly to shoulder
              that burden for you, aiming to resolve your claim as quickly as
              possible.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Is It Wise to Challenge the Social Security Administration Without
              a Representative?
            </h2>
            <p className="text-gray-700 mb-4">
              Taking on your own disability claim can be daunting and
              time-consuming, and many give up after an initial denial.
              Unfortunately, many of these cases could be successful with
              guidance from an experienced advocate who can effectively
              communicate with Social Security and provide essential information
              to support your claim.
            </p>

            <p className="text-gray-700 mb-4">
              If you're considering applying for Social Security Disability or
              Supplemental Security Income, reach out to us. Kim Engler's team
              offers a free evaluation of your case, whether online or by phone.
              Starting with expert consultation can make a difference in your
              claim's success, so don't wait—call us today!
            </p>
          </div>
            <ContactUs />
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Why Our Clients Trust Us to Do It Right:
          </h2>

          <ul className="list-none pl-0 mb-6 md:mb-8">
            <li className="flex items-start mb-2 md:mb-3">
              <span className="mr-2 text-red-500 text-sm md:text-base">
                {" "}
                &#10052;{" "}
              </span>
              <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                We're local and always available to meet with you in person to
                discuss your claim.
              </span>
            </li>
            <li className="flex items-start mb-2 md:mb-3">
              <span className="mr-2 text-red-500 text-sm md:text-base">
                {" "}
                &#10052;{" "}
              </span>
              <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                Kimberly Engler, an Accredited Disability Representative, will
                personally guide you.
              </span>
            </li>
            <li className="flex items-start mb-2 md:mb-3">
              <span className="mr-2 text-red-500 text-sm md:text-base">
                {" "}
                &#10052;{" "}
              </span>
              <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                We can start your claim process from the comfort of your home.
              </span>
            </li>
          </ul>

          <div className="bg-[#a937ac] rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-4 text-center">
              Want to Learn More?
            </h3>
            <p className="text-white text-sm md:text-base mb-2 md:mb-4 text-center leading-relaxed">
              Share a few details about your disability case, and we'll guide
              you on your next steps.
            </p>
            <div className="text-center">
              <Link to="contact-us">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Disability Advocates Group Ranked Among Top Disability Firms in 2023
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            We're proud to announce that Disability Advocates Group has been
            named one of the Top 15 Disability Firms in North Carolina and
            placed in the Top 400 Social Security Disability Leadership list
            across the U.S. This recognition underscores our dedication to
            guiding individuals through the often complex Social Security
            Disability process.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Led by Kim Engler, with over 25 years of experience, our team stands
            out for its personalized, compassionate approach and commitment to
            understanding the challenges faced by those seeking disability
            benefits.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Being part of the Top 400 Social Security Disability Leadership list
            strengthens our role as leaders in disability advocacy.
          </p>
        </div>
      </div>
      <div className="w-full flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-7xl mx-auto p-8">
          <div className="w-full bg-white p-8 flex flex-col justify-between mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Get Answers to Your Disability Questions - No Fees Unless We Win!
            </h2>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              If you're thinking about applying for disability, you probably
              have questions about eligibility, the application process, or
              whether your condition qualifies. Disability Advocates Group
              offers an alternative to the typical disability attorney.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              Give us a call at{" "}
              <a
                href="tel:+1(773)683-3032"
                className="text-blue-500 hover:underline"
              >
               +1(773)683-3032
              </a>{" "}
              and we'll gladly address your concerns.
            </p>

            <div className="mt-6">
              <Link
                to="/ssdi"
                className="bg-[#143C63] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 inline-block text-sm md:text-base"
              >
                Learn about more Disability services
              </Link>
            </div>
          </div>

          <div className="w-full">
            <img
              src="/servtwoG.png"
              alt="Service image"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
