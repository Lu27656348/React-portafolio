import LineDivider from '../components/LineDivider.jsx';
import { motion } from 'framer-motion';
import ucabFormImage from '../assets/ucab-forms.png';
import sportCompetitionsImage from '../assets/sport-competitions.png';
import spreadSheetImage from '../assets/spreadsheet.png';
import socketChatImage from '../assets/socket-chat.png';
import orderingManagerImage from '../assets/ordering-manager.png';
import mqttSecurityImage from '../assets/mqttSecurity.png';


const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  
  const Project = ({ title, description, image, url}) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p>
            {description}
          </p>
          <p className = "text-red"><a href={url}>click here</a></p>
        </div>
        <img src={image} alt={projectTitle} href={url}/>
      </motion.div>
    );
  };

const Projects = () => {

    return (
        <section id = "projects" className = "pb-48">
            <motion.div
                    className="md:w-2/5 mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                    }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineDivider width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                My projects have been developed from scratch, click on one of them and find out what it's all about!
                </p>
                
            </motion.div>

            <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="UCAB Forms" description = "A React application that allows you to create dynamic forms that can be shared to your users via QR code and summarizes the answers through statistical analysis." image = {ucabFormImage} url = "https://ucab-forms-db.web.app/"/>
          <Project title="Sport Competitions" description = "Made with Bootstrap and using PHP for the backend, sport competitions is a applications to record running times and show the best 5 runners" image = {sportCompetitionsImage} url = "https://github.com/Lu27656348/Competencias-deportivas"/>

          {/* ROW 2 */}
          <Project title="Spreadsheet Generator" description = "Made in VueJS, SASS and Express, it is an application that automates the necessary forms for the thesis process at the Universidad Católica Andrés Bello. Try it user: admin, password: admin" image = {spreadSheetImage} url = "https://frontend-ucabcunaguaro.vercel.app/#/"/>
          <Project title="Ordering Manager" description = "A minimalist application implemented with AdminLTE and Express to manage the status of parcels from a parcel delivery company." url = "https://github.com/Lu27656348/ProyectoBBDD_2" image = {orderingManagerImage}/>

          {/* ROW 3 */}
          <Project title="Socket Chat" description = "A chat between multiple users implemented with Sockets with a React interface." url = "https://github.com/Lu27656348/proyecto_redes_ii" image = {socketChatImage}/>
          <Project title="MQTT Security" description = "An application that makes use of Mosquitto's MQTT broker for the implementation of a distributed system to manage and control the access points to a zone and its sub-zones." image = {mqttSecurityImage} url = "https://github.com/Lu27656348/mqtt-security"/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
        </section>
    );

}

export default Projects; 