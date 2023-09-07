import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
const links = [
  { name: "HOME", to: "#", id: 1 },
  { name: "EDUCATION", to: "#education", id: 2 },
  { name: "PROJECT", to: "#project", id: 3 },
  { name: "CONTACT", to: "#contact", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function HamburgerMenu() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <motion.main
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="sm:hidden no-scrollbar absolute  top-0 right-0 "
    >
      <AnimatePresence>
        {open && (
          <motion.aside
            className="overflow-hidden"
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className="flex flex-col min-h-screen justify-center space-y-10 text-2xl text-white items-center bg-gray-700 font-semibold"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="p-9 absolute top-0 right-0">
        <button onClick={cycleOpen}>
          {open ? (
            <MdClose className="text-white text-3xl transition-all ease-in-out delay-200" />
          ) : (
            <GiHamburgerMenu className="text-white transition-all ease-in-out delay-200 text-3xl" />
          )}
        </button>
      </div>
    </motion.main>
  );
}
