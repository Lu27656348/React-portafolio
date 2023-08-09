import LineDivider from "../components/LineDivider.jsx";
import { motion } from "framer-motion";


const Testimonials = () => {
    return (
      <section id="testimonials">
        {/* HEADING */}
        <motion.div
          className="md:w-1/3 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-red">
            TESTIMONIALS
          </p>
          <LineDivider width="mx-auto w-2/5" />
          <p className="mt-10 mb-10">
            Here's What People are Saying About My Work.
          </p>
        </motion.div>
  
        {/* TESTIMONIALS */}
        <div className="md:flex md:justify-between gap-8">
          <motion.div
            className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-32
              before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-6xl">“</p>
            <p className="text-center text-xl">
            I've worked with Luis Somoza on several projects, and I've always been impressed with his/her technical skills and problem-solving abilities.
            </p>
          </motion.div>
  
          <motion.div
            className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-32
              before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-6xl">“</p>
            <p className="text-center text-xl">
            Luis Somoza is a highly skilled and experienced programmer. He is also a great communicator and team player.
            </p>
          </motion.div>
  
          <motion.div
            className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-32
              before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-6xl">“</p>
            <p className="text-center text-xl">
            He is also a great mentor and teacher, and he is always willing to share his knowledge with others.
            </p>
          </motion.div>
        </div>
      </section>
    );
  };

export default Testimonials;