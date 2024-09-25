import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  return (
    <div
      className="
        relative h-screen bg-cover bg-center
        bg-[url('/mobile-bg.JPG')]
        md:bg-[url('/desktop-bg.JPG')]"
    >
      <motion.div
        className="absolute top-[11vh] right-[10vw] text-white text-lg sm-txt-xl md:top-1/2 md:right-[15vw] lg:right-[18vw] md:text-2xl lg:text-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-white pb-[4vh]" variants={itemVariants}>
          Website in the making ...
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.span>instagram:</motion.span>
          <motion.a
            href="https://www.instagram.com/journeyman.cycles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white pb-[3vh] pt-1 hover:underline"
          >
            <FaInstagram />
            <span>@journeyman.cycles</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
