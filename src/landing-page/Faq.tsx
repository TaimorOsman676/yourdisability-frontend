import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question:
      "What’s the Difference Between Social Security Disability Insurance (SSDI) and Supplemental Security Income (SSI)?",
    answer: `Navigating these programs can be challenging, so here’s a quick overview.

Social Security Disability Insurance (SSDI): Established in 1956, SSDI is designed for individuals who have a severe physical or mental impairment preventing them from working. SSDI is *not* charity; it’s a benefit Americans have earned by paying into the Social Security system through payroll deductions. It serves as a safety net for those who can no longer work due to disability.

– Supplemental Security Income (SSI): SSI offers financial support to individuals with limited income and resources, regardless of their work history or contributions to Social Security.

Both SSDI and SSI require a severe impairment that restricts one’s ability to work.

To explore your eligibility for Social Security benefits, reach out to Disability Advocates Group. We specialize in Social Security claims nationwide—call 888-324-7734 to get started.`,
  },
  {
    question: "What's the best thing about Switzerland?",
    answer: `
    You can start your Social Security Disability application [here](Social Security Disability Application). You’ll need to provide details about yourself, your family, employment history, income sources, and your medical conditions, including physician information. Supporting documents are required to verify your claims, and because the Social Security Administration’s (SSA) approval process can be lengthy, thorough documentation of all medical issues and limitations is essential.

Applications managed by experienced representatives often see higher approval rates. Disability Advocates Group can assist you from the initial stages, helping you collect necessary documents and avoid common errors that could lead to delays or denials.`,
  },
  {
    question: "How Much Am I Entitled To?",
    answer: `
    The Social Security Administration periodically sends out a Social Security Statement summarizing your lifetime earnings and the potential monthly benefit if you qualify. You can also request this information on the SSA website by accessing your [Social Security Statement](Social Security Statement).`,
  },
  {
    question: `Need Help with Your Social Security Claim?`,
    answer: `
    The team at Disability Advocates Group is here to assist with any questions you have about disability claims. Call us at 888-324-7734 or fill out our contact form, and we’ll get back to you within 24 hours.`,
  },
  {
    question: `Can I Receive Workers’ Compensation Benefits and Social Security Disability Simultaneously?`,
    answer: `
    The team at Disability Advocates Group is here to assist with any questions you have about disability claims. Call us at 888-324-7734 or fill out our contact form, and we’ll get back to you within 24 hours.`,
  },
  {
    question: `How Long Does It Take for the Social Security Administration to Decide on a Disability Application?`,
    answer: `
    Typically, it takes at least three months or longer to receive a decision on an initial disability application. The timeframe can vary based on several factors, including:

- The nature of your disability
- The speed at which medical evidence from your doctors or other medical sources is collected and submitted
- Whether a medical examination is required
- A review of your application and supporting documents for quality assurance

At Disability Advocates Group, we can assist you throughout the application process by communicating with your claims evaluator and providing the necessary information to expedite your claim. We can also help determine if a Consultative Examination (CE) is needed and coordinate with your physician(s) to provide relevant medical information.`,
  },
];

const Faq = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative py-20 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url('/tac.png')`,
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-70"
          style={{ zIndex: 1 }}
        ></div>
        <div className="relative z-10 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            FAQ
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 py-16 px-4 sm:px-6 lg:px-16">
        <div className="flex-1 w-full lg:w-7/12">
          <div className="bg-yellow-400 p-6 rounded-lg">
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <Disclosure key={faq.question} as="div" className="pt-4">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-black font-medium">
                      <span>{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon
                          aria-hidden="true"
                          className="h-6 w-6 group-data-[open]:hidden"
                        />
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="h-6 w-6 hidden group-data-[open]:block"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2">
                    <p className="text-sm text-black bg-white p-4 rounded-lg">
                      {faq.answer}
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-4/12 bg-yellow-400 p-6 rounded-lg">
          <h1 className="text-lg font-bold mb-2">Free SSDI/SSI Evaluation</h1>
          <p className="text-sm mb-6">
            We would love to talk to you about the specifics of your new or
            pending disability claim. Please complete our free case evaluation,
            and we will contact you within 24 hours or feel free to contact us
            directly at <b>888-324-7734</b>.
          </p>
          <button
            onClick={() => {
              if (navigator.userAgent.includes("Mobile")) {
                window.location.href = "tel:+1(773)683-3032";
              } else {
                window.location.href = "skype:+1(773)683-3032 ?call";
              }
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Get Help Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Faq;
