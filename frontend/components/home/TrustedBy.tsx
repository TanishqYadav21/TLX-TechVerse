"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  {
    name: "Google",
    logo: "/companies/google.svg",
  },
  {
    name: "Microsoft",
    logo: "/companies/microsoft.svg",
  },
  {
    name: "Amazon",
    logo: "/companies/amazon.svg",
  },
  {
    name: "Adobe",
    logo: "/companies/adobe.svg",
  },
  {
    name: "Accenture",
    logo: "/companies/accenture.svg",
  },
  {
    name: "Infosys",
    logo: "/companies/infosys.svg",
  },
];

export default function TrustedBy() {
  return (
    <section
  className="
  group
relative
overflow-hidden
  border-y
  border-white/5
  bg-[#050816]
  py-20
"
>
      <div className="mx-auto max-w-7xl px-6 lg:px-8"> 

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="
mb-10
text-center
text-xs
font-semibold
uppercase
tracking-[0.45em]
text-slate-400
"
        >
         Trusted by students placed at
        </motion.p>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
  delay: index * 0.08,
  duration: 0.45
}}
           className="
group
relative
overflow-hidden
flex
h-[82px]
items-center
justify-center
rounded-3xl
border
border-white/10
bg-gradient-to-b
from-white/[0.06]
to-white/[0.02]
backdrop-blur-2xl
transition-all
duration-500
hover:-translate-y-2
hover:border-blue-500/30
hover:bg-white/[0.06]
hover:shadow-[0_20px_60px_rgba(59,130,246,.18)]

before:absolute
before:inset-0
before:rounded-3xl
before:bg-gradient-to-r
before:from-blue-500/0
before:via-blue-500/5
before:to-violet-500/0
before:opacity-0
before:transition-opacity
before:duration-500
hover:before:opacity-100
"
            >
              <Image
  src={company.logo}
  alt={company.name}
  width={140}
height={40}
className="
relative
z-10
h-8
w-auto
opacity-50
brightness-0
invert
transition-all
duration-500
group-hover:opacity-100
group-hover:brightness-100
group-hover:invert-0
group-hover:scale-110
"
/>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}