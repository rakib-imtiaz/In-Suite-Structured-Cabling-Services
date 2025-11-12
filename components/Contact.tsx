"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Call",
    value: "(250) 574-7110",
    href: "tel:2505747110",
  },
  {
    icon: Mail,
    label: "Email",
    value: "FiberOptics@sequoiaservices.ca",
    href: "mailto:FiberOptics@sequoiaservices.ca",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll respond within one business day.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <Badge className="tracking-[0.35em]">Let's build</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ready to cable your next project?
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Tell us about your scope and timelines. We’ll coordinate a walkthrough, confirm the
            drop schedule, and keep you updated through every milestone.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="border-white/10 bg-white/[0.04]">
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl text-foreground">
                  Contact the Sequoia Services team
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Call, email, or complete the form—we respond within one business day.
                </p>
              </CardHeader>
              <CardContent className="space-y-5">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-white/20"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="text-left">
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                          {detail.label}
                        </p>
                        <p className="text-base font-semibold text-foreground">{detail.value}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <Image
                  src="/images/service_area_kamloops_street.png"
                  alt="Kamloops street scene at dusk, distant hills, pedestrians"
                  fill
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-background/80" />
              </div>
              <div className="relative grid gap-4">
                <div className="flex items-center gap-3 text-left">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-foreground">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Service area</p>
                    <p className="text-sm text-foreground">Kamloops, BC and surrounding communities</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-foreground">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Hours</p>
                    <p className="text-sm text-foreground">
                      Monday–Friday: 8 am – 6 pm · Saturday: 9 am – 4 pm · Sunday: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-3xl border border-white/10 bg-background-elevated/80 p-6 sm:p-8 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.9)]"
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Project brief</p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">
                  Tell us what you’re building
                </h3>
              </div>
              <div className="grid gap-4">
                <Input
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Textarea
                  name="message"
                  placeholder="Share scope, suite counts, timelines, or any drawings we should review."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Submit project details
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

