"use client"

import { useState } from "react"

interface FaqItem {
  question: string
  answer: string
  isOpen: boolean
}

export default function FaqSection() {
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: "How long does it take to complete a project?",
      answer:
        "Most standard projects are completed within 7-10 working days. Complex projects may take 2-3 weeks. We also offer expedited services for urgent requirements at an additional cost.",
      isOpen: false,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept payments via UPI, bank transfer, and major payment gateways. For international students, we also accept PayPal and wire transfers.",
      isOpen: false,
    },
    {
      question: "Do you provide revisions to the project?",
      answer:
        "Yes, we offer up to 3 rounds of revisions to ensure your project meets all requirements. Additional revisions can be requested at a nominal fee.",
      isOpen: false,
    },
    {
      question: "How do I track the progress of my project?",
      answer:
        "Once your project begins, you'll receive regular updates via WhatsApp or email. You can also request a demo or progress report at any time during development.",
      isOpen: false,
    },
  ])

  const toggleFaq = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen }
        }
        return faq
      }),
    )
  }

  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-2 text-center text-primary">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12">Find answers to common questions about our services</p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="clay p-6 faq-item">
              <button className="flex justify-between items-center w-full text-left" onClick={() => toggleFaq(index)}>
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <i className={`bi ${faq.isOpen ? "bi-dash" : "bi-plus"} faq-icon`}></i>
              </button>
              <div
                className={`mt-4 text-gray-600 faq-content ${faq.isOpen ? "active" : ""}`}
                style={{ maxHeight: faq.isOpen ? "300px" : "0" }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
