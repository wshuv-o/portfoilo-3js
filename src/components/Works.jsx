import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import {fadeIn, textVariant} from '../utils/motion';
import { useNavigate } from 'react-router-dom'; // Add this import


const ProjectCard=({index, name, description, tags, image, source_code_link})=>{
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max:45,
          scale:1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} 
          className="w-full h-full object-cover rounded-2xl"
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={()=>window.open (source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>

        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}

        </div>

      </Tilt>

    </motion.div>

  )
}

const Works = ({ count  }) => {
    const navigate = useNavigate();

  const displayedProjects = count === 0 ? projects : projects.slice(0, count);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> My work</p>
        <h2 className={styles.sectionHeadText}> Projects.</h2>
      </motion.div>
      <div className="w-full flex ">
        <motion.p
          variant={fadeIn("", "",0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            In this portfolio, I present my latest creation that showcases my skills and expertise. Through meticulous design and seamless functionality, I have crafted a remarkable project that captivates users. Explore the immersive experience and discover the harmonious blend of innovation and creativity.
             Join me on this journey as we delve into the intricacies of my project and witness the transformative power of technology.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {displayedProjects.map((project, index)=>(
          <ProjectCard key={`project-${index}`}
          index={index}
          {...project}/>
        ))}
      </div>

                {count !== 0 ? (<button
            type='button'
          onClick={() => navigate("/projects")}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >See All project

          </button>):(<></>)}
    </>
  )
}

export default SectionWrapper(Works, "")