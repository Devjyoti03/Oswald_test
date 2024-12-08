import { FEATURES_ALL } from "../data/mockData.js";
import { motion } from "framer-motion";

const Features = () => {

  
  return (
    <section className="max-w-[1180px] mx-auto lg:py-[65px] py-10 text-white px-4">
      <div className="text-center">
        
        <h3 className="lg:text-3xl md:text-2xl text-xl font-montserrat font-semibold">
          Some of its uses and advantages are:
        </h3>
      </div>
      <div className="lg:mt-[90px] md:mt-16 mt-12 grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-y-[70px] md:gap-y-16 gap-y-12 lg:gap-x-[100px] md:gap-x-16 gap-x-12">
        {FEATURES_ALL?.map(({ id, title, icon, description }) => {
          return (
            <motion.div
              key={id}
              className="d-flex flex-col justify-center items-center text-center"
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <img src={icon} className="w-[82px] h-[82px] mx-auto" alt="" />
              <h4 className="font-montserrat lg:mt-10 md:mt-6 mt-4 lg:mb-4 mb-2 font-semibold lg:text-xl md:text-lg text-base">
                {title}
              </h4>
              <p className="lg:text-base text-sm font-source-sans">
                {description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;