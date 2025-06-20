import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MERN Developer
        <span className="text-textGreen tracking-wide">
          <a href="https://ajspire.com/" target="_blank">Aj Spire Technologies</a>
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Baramati — Jun 2025 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed full-stack web applications using MongoDB, Express.js,
          React.js, and Node.js tailored to client requirements.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented RESTful APIs, handled authentication, and optimized
          database queries for performance.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated closely with cross-functional teams to deliver scalable
          and maintainable solutions in real-time projects.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
