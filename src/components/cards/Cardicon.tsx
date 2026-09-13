import {SiRedis,SiJavascript, SiTypescript,SiTailwindcss, SiReact, SiVuedotjs,SiSvelte,SiNextdotjs,SiNodedotjs,SiPostgresql,} from "react-icons/si";
import { FaJava,FaDocker,} from "react-icons/fa";

const CardIcon = {
  SiReact: <SiReact className="text-3xl text-cyan-400" />,
  SiVuedotjs: <SiVuedotjs className="text-3xl text-green-500" />,
  SiSvelte: <SiSvelte className="text-3xl text-orange-500" />,
  SiNextdotjs: <SiNextdotjs className="text-3xl text-black" />,
  SiNodedotjs: <SiNodedotjs className="text-3xl text-green-500" />,
  SiPostgresql: <SiPostgresql className="text-3xl text-blue-500" />,
  SiRedis: <SiRedis className="text-3xl text-red-500" />,
  SiJavascript: <SiJavascript className="text-3xl text-yellow-400" />,
  SiTypescript: <SiTypescript className="text-3xl text-blue-500" />,
  FaJava: <FaJava className="text-3xl text-red-500" />,
  SiTailwindcss: <SiTailwindcss className="text-3xl text-cyan-400" />,
  FaDocker: <FaDocker className="text-3xl text-blue-500" />,
};

export default CardIcon;