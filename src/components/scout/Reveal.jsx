import { motion } from "framer-motion";

// Wrap any block in <Reveal> to fade + slide it in once it scrolls into view.
// delay lets you stagger a row of siblings (e.g. delay={0.1}, delay={0.2}...).
export default function Reveal({ children, delay = 0, y = 22, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
