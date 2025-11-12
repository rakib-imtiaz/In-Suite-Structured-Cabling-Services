"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
          <Badge className="border-none bg-primary/10 font-semibold uppercase tracking-[0.35em] text-primary">Let's build</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ready to cable your next project?
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-[1.8]">
            Tell us about your scope and timelines. We'll coordinate a walkthrough, confirm the
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
            <Card className="accent-border-top card-shadow border-border bg-white">
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Contact the Sequoia Services team
                </CardTitle>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Call, email, or complete the form—we respond within one business day.
                </p>
              </CardHeader>
              <CardContent className="space-y-5">
                {contactDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  const bgColor = index === 0 ? "bg-accent/10" : "bg-primary/10";
                  const borderColor = index === 0 ? "border-accent/30" : "border-primary/30";
                  const iconColor = index === 0 ? "text-accent" : "text-primary";
                  return (
                    <motion.a
                      key={detail.label}
                      href={detail.href}
                      className={`flex items-center gap-4 rounded-2xl border-2 ${borderColor} ${bgColor} px-5 py-4 transition-all hover:card-shadow`}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      whileHover={{ y: -4 }}
                    >
                      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 ${borderColor} bg-white ${iconColor}`}>
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                          {detail.label}
                        </p>
                        <p className="text-base font-bold text-foreground">{detail.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </CardContent>
            </Card>

            <div className="secondary-border-top card-shadow relative overflow-hidden rounded-3xl border border-border bg-white p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
                <div className="absolute inset-0 bg-background/85" />
              </div>
              <div className="relative grid gap-5">
                <div className="flex items-center gap-4 text-left">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-secondary/30 bg-secondary/10 text-secondary">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Service area</p>
                    <p className="text-sm font-semibold text-foreground">Kamloops, BC and surrounding communities</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-left">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-secondary/30 bg-secondary/10 text-secondary">
                    <Clock className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Hours</p>
                    <p className="text-sm font-semibold text-foreground">
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
            className="primary-border-top card-shadow rounded-3xl border border-border bg-white p-6 sm:p-8"
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Project brief</p>
                <h3 className="mt-3 text-2xl font-bold text-foreground">
                  Tell us what you're building
                </h3>
              </div>
              <div className="grid gap-5">
                <Input
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 border-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 border-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <Input
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 border-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <Textarea
                  name="message"
                  placeholder="Share scope, suite counts, timelines, or any drawings we should review."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90">
                Submit project details
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

