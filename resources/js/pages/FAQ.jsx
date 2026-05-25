// import PageShell from '../components/PageShell.jsx';

// export default function FAQ() {
//     return (
//         <PageShell
//             eyebrow="Pages"
//             title="FAQ"
//             description="Add common questions and helpful answers here."
//         />
//     );
// }
import { useState } from "react";

const faqs = [
  {
    question: "Can I withdraw EPF if I am still employed?",
    answer:
      "Yes, partial EPF withdrawals are allowed while employed for specific purposes such as medical emergencies, home loans, education, or marriage.",
  },
  {
    question: "Is PF withdrawal taxable?",
    answer:
      "PF withdrawal is tax-free after 5 years of continuous service. Withdrawals before 5 years may attract TDS based on PAN availability and withdrawal amount.",
  },
  {
    question: "What is the process for EPF registration?",
    answer:
      "Employers must register their establishment with EPFO by submitting company registration documents, PAN details, and employee information.",
  },
  {
    question:
      "Is it mandatory for employers to register under ESIC and PF?",
    answer:
      "Yes, eligible establishments must register under ESIC and PF schemes as per statutory compliance rules and employee count requirements.",
  },
  {
    question:
      "Can an employee withdraw PF without employer approval?",
    answer:
      "Yes, employees can withdraw PF online without employer approval if Aadhaar, PAN, bank details, and KYC are properly linked with UAN.",
  },
  {
    question:
      "Who is India’s best PF and ESIC consultant & PF withdrawal agent?",
    answer:
      "Chakraborty Consultancy Services is a trusted PF & ESIC consultancy firm offering EPF registration, ESIC registration, filing, and withdrawal services with expert support.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-cyan-600">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Find Quick Answers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Get answers to the most common questions about PF withdrawal,
            EPF registration, ESIC compliance, and employee benefits.
          </p>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-full border border-cyan-100 bg-cyan-50 px-5 py-2 text-sm font-medium text-cyan-700">
              Trusted by 500+ Companies
            </div>

            <div className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700">
              Certified Advisors
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="pr-5 text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                {/* Custom Arrow */}
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="px-6 pb-6 leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}