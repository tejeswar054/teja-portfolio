import { motion } from "framer-motion";
import profileImg from "../assets/teja-profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 bg-gradient-to-r from-blue-500 to-green-500">
      {/* Left Side - Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profileImg}
          alt="Teja Profile"
          className="w-[260px] h-[260px] object-cover rounded-full border-4 border-white shadow-lg"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        className="text-center md:text-left max-w-[500px]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Hi, I'm Tejeswararao Panchireddy <span className="inline-block animate-wave">👋</span>
        </h1>
        <p className="text-2xl text-white">
          Full Stack Developer | 3rd Year B.Tech Student
          Chaitanya Bharathi Institute of Technology
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;




