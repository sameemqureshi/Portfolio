'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY;
    if (Math.abs(diff) > 10) {
      setHidden(diff > 0 && latest > 50);
      setLastY(latest);
    }
  });

  const links = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Stack', href: '/#skills' },
    { name: 'Writing', href: '/#articles' },
    { name: 'Contact', href: 'mailto:qureshisameem01@gmail.com' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-40 h-16 bg-black/80 backdrop-blur-md border-b border-neutral-900"
    >
      <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-widest uppercase text-white hover:text-cyan-400 transition-colors"
        >
          Sameem Qureshi
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-400 hover:text-white p-1"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-neutral-950 border-b border-neutral-800"
        >
          <div className="flex flex-col p-6 gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-neutral-400 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
