"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cable, Zap, Wifi, Home, Shield, CheckCircle2 } from "lucide-react";

const copperServices = [
    {
        icon: Cable,
        title: "CAT6 Structured Cabling",
        badge: "Most Popular",
        description:
            "High-performance Ethernet cabling for internet, Wi-Fi, streaming, and home offices.",
        pricing: [
            { label: "Single CAT6 drop (pull, terminate, test)", price: "Starting at $200" },
            { label: "3-drop bundle", price: "Starting at $600" },
            { label: "Full suite / home wiring (5+ drops)", price: "$1,200 – $2,000+" },
        ],
        features: [
            "Solid copper, 23AWG",
            "Tested & labeled",
            "BICSI-compliant installation",
        ],
    },
    {
        icon: Zap,
        title: "CAT6A / CAT7 Premium Cabling",
        badge: "Future-Proof",
        description:
            "Designed for 10Gb networks, smart homes, and future-proof installations.",
        pricing: [
            { label: "Single premium drop", price: "Starting at $275" },
            { label: "3-drop premium bundle", price: "$825 – $1,050" },
            { label: "Whole-home premium wiring", price: "$1,800 – $3,000+" },
        ],
        features: [
            "10Gb network ready",
            "Enhanced shielding",
            "Maximum performance",
        ],
    },
];

const fibreServices = [
    {
        icon: Wifi,
        title: "Fibre Backbone Installation",
        badge: "ETA Certified",
        description:
            "Clean fibre runs from demarcation point to suite or network rack.",
        features: [
            "Professional fibre pulling & termination",
            "Certified testing with documentation",
            "Future-ready infrastructure",
        ],
    },
];

const packages = [
    {
        icon: Home,
        title: "Residential Structured Cabling",
        price: "$1,500 – $2,400",
        features: [
            "Up to 5 CAT6 drops",
            "Patch panel & labeling",
            "Testing & documentation",
        ],
    },
    {
        icon: Zap,
        title: "Premium Home Network",
        price: "$3,000 – $4,500+",
        features: [
            "CAT6A cabling",
            "Fibre backbone",
            "Rack & patch panel",
            "Fluke certification",
        ],
    },
    {
        icon: Shield,
        title: "Network + Security Ready",
        price: "$2,500 – $4,000",
        features: [
            "CAT6 cabling",
            "Camera wiring (up to 4)",
            "Network rack setup",
        ],
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="bg-zinc-50 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 text-center"
                >
                    <Badge className="mx-auto border-none bg-primary/10 font-semibold uppercase tracking-[0.35em] text-primary">
                        Pricing
                    </Badge>
                    <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Transparent pricing for quality installations
                    </h2>
                    <p className="mx-auto max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
                        Professional structured cabling with testing, certification, and documentation included.
                        All prices are starting points—final quotes based on site conditions.
                    </p>
                </motion.div>

                {/* Copper Cabling Services */}
                <div className="mt-14">
                    <h3 className="mb-8 text-center text-xl font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Structured Cabling (Copper)
                    </h3>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {copperServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="h-full"
                                >
                                    <Card className="accent-border-top card-shadow h-full border-border bg-white transition-all hover:-translate-y-2 hover:card-shadow-hover">
                                        <CardHeader className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-accent/10 font-semibold uppercase tracking-[0.2em] text-accent"
                                                >
                                                    {service.badge}
                                                </Badge>
                                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-accent/30 bg-accent/10 text-accent">
                                                    <Icon className="h-6 w-6" />
                                                </span>
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-foreground">
                                                {service.title}
                                            </CardTitle>
                                            <CardDescription className="text-sm leading-[1.7] text-muted-foreground">
                                                {service.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div className="space-y-3">
                                                {service.pricing.map((item) => (
                                                    <div
                                                        key={item.label}
                                                        className="flex flex-col gap-1 rounded-xl border border-border bg-zinc-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                                                    >
                                                        <span className="text-sm text-muted-foreground">
                                                            {item.label}
                                                        </span>
                                                        <span className="text-lg font-bold text-foreground">
                                                            {item.price}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="space-y-2">
                                                {service.features.map((feature) => (
                                                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Fibre Optic Services */}
                <div className="mt-16">
                    <h3 className="mb-8 text-center text-xl font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        🔌 Fibre Optic Services (ETA Certified)
                    </h3>
                    <div className="mx-auto max-w-2xl">
                        {fibreServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="primary-border-top card-shadow border-border bg-white transition-all hover:-translate-y-2 hover:card-shadow-hover">
                                        <CardHeader className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <Badge className="bg-primary/10 font-semibold uppercase tracking-[0.2em] text-primary">
                                                    {service.badge}
                                                </Badge>
                                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-primary/30 bg-primary/10 text-primary">
                                                    <Icon className="h-6 w-6" />
                                                </span>
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-foreground">
                                                {service.title}
                                            </CardTitle>
                                            <CardDescription className="text-sm leading-[1.7] text-muted-foreground">
                                                {service.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2">
                                                {service.features.map((feature) => (
                                                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Packages */}
                <div className="mt-16">
                    <h3 className="mb-8 text-center text-xl font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Complete Packages
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {packages.map((pkg, index) => {
                            const Icon = pkg.icon;
                            return (
                                <motion.div
                                    key={pkg.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    whileHover={{ y: -6, boxShadow: "0 20px 35px rgba(59,130,246,0.16)" }}
                                >
                                    <Card className="h-full border-border bg-white transition hover:border-blue-200">
                                        <CardHeader className="space-y-4 text-center">
                                            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-zinc-50 text-foreground">
                                                <Icon className="h-7 w-7" />
                                            </span>
                                            <CardTitle className="text-xl text-foreground">
                                                {pkg.title}
                                            </CardTitle>
                                            <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3">
                                                {pkg.features.map((feature) => (
                                                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90">
                        <a href="#contact">Get a Custom Quote</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
