"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you work in finished units without damaging finishes?",
    answer:
      "Yes. We regularly cable completed suites and condos. Our crew protects surfaces, routes discreetly, and uses flush or surface solutions that match the interior design.",
  },
  {
    question: "How fast can you wire an entire suite?",
    answer:
      "Most suites are ready within 24–48 hours depending on the drop count and mediums. Multi-suite projects are phased alongside your turnover schedule so you stay on track.",
  },
  {
    question: "Is certification really included?",
    answer:
      "Absolutely. Every run is Fluke tested and you receive digital reports along with our labeling schedule. We don’t consider the job complete until everything passes.",
  },
  {
    question: "Can you integrate with our ISP or IT provider?",
    answer:
      "Yes. We coordinate early so panels, racks, and labeling align with their standards. We also hand off documentation to make cutovers seamless.",
  },
  {
    question: "Do you take on retrofit or small projects?",
    answer:
      "We do. From single luxury homes to partial floor retrofits, we scale the team to suit the scope while maintaining the same level of documentation and finish.",
  },
  {
    question: "What about add-ons after handover?",
    answer:
      "We’re local to Kamloops and keep records from every job, making adds, moves, or troubleshooting quick and accurate.",
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="bg-zinc-50 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <Badge className="tracking-[0.35em]">FAQ</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Questions we get from builders, managers, and homeowners
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              If you don’t see your question here, reach out—our team is happy to walk through
              timelines, deliverables, or integration requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-3xl border border-border bg-white p-4 sm:p-8"
          >
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border border-border bg-zinc-50 px-4"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm text-muted-foreground sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  );
}

