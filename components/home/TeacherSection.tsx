"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import BellaMascot from "@/components/bella/BellaMascot";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const POINTS = [
  "Standards-aligned worksheets and lesson plans",
  "Classroom-ready printables for every subject",
  "Weekly planner to organize your resources",
];

export default function TeacherSection() {
  return (
    <section className="bg-brand-blue/10 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 sm:px-6 md:flex-row">
        <motion.div
          className="flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={fadeInUp}
            className="rounded-full bg-white px-4 py-1 font-button text-sm font-semibold text-brand-blue"
          >
            For Teachers
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl"
          >
            Your Classroom&rsquo;s New Favorite Resource
          </motion.h2>
          <motion.ul variants={fadeInUp} className="flex flex-col gap-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 font-body text-brand-navy/75">
                <CheckCircle2 size={18} className="shrink-0 text-brand-blue" />
                {point}
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeInUp}>
            <Button href="/adventure/teacher-library" variant="blue" size="md">
              Visit Teacher Library
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-1 justify-center"
        >
          <BellaMascot pose="idle" size={200} />
        </motion.div>
      </div>
    </section>
  );
}
