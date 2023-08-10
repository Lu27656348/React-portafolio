import LineDivider from '../components/LineDivider.jsx';
import useMediaQuery from '../hooks/useMediaQuery.jsx';
import softSkills from '../assets/skills-image.png';
import { motion } from "framer-motion"

const MySkills = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section id = "about" className = "pt-10 pb-24">
            <div className = "md:flex md:justify-between md:gap-16 mt-48 mb-16 ">
                <motion.div className = "md:w-1/3" initial = "hidden" whileInView = "visible" viewport = {{once: true, amount: 0.5 }} transition = {{duration: 0.5}} variants = {{hidden: {opacity: 0, x: -50}, visible:{ opacity: 1, x: 0}}}>
                    <p className  = "font-playfair font-semibold text-4xl mb-5">SOFT{" "}<span className = "text-red">SKILLS</span></p>
                    <LineDivider width = "w-1/3"/>
                    <p className  = "mt-10 mb-7">I am perseverant, committed to my duties, creative and with a critical sense when it comes to development. My strengths are focused on integrating quickly to any project and communicating effectively with the development team, I like to learn, teach and lead.</p>

                </motion.div>
                <div className="mt-16 md:mt-0">
                    {isAboveLarge ? (
                        <div
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                        <img
                            alt="skills"
                            className="z-10"
                            src={softSkills}
                        />
                        </div>
                    ) : (
                        <img alt="skills" className="z-10" src={softSkills} />
                    )}
                    </div>
            </div>
                    {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 mb-16 gap-32">
                <motion.div
                className="md:w-1/3 mt-10 mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">01</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">
                            Creative
                        </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5 mb-10">
                    Creativity is the seed of innovation, so I dedicate myself to cultivate it daily, making projects with new technologies, making new and refreshing approaches to old applications and acquiring more knowledge and skills that allow me to have a broader vision of what I develop.
                    </p>
                </motion.div>

                {/* INNOVATIVE */}
                <motion.div
                className="md:w-1/3 mt-10 mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                <div className="relative h-32">
                    <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">02</p>
                    <p className="font-playfair font-semibold text-3xl ">
                        Effective communication
                    </p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                </div>
                <p className="mt-5 mb-10">
                Communication is the basis for any operation, that is why I have dedicated myself to the study and development of techniques for effective communication, which allow for better project leadership, better negotiations with clients and a better workflow.
                </p>
                </motion.div>
                {/* IMAGINATIVE */}
                <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                <div className="relative h-32">
                    <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">03</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">
                        Commitment
                    </p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                </div>
                <p className="mt-5 mb-10">
                On-time delivery, sincerity and effectiveness are words that define me. Whenever I develop a project, I take care to meet and exceed expectations.
                </p>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills;