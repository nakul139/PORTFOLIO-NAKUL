import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { motion } from "motion/react"

const iconVarients =  (duration) => ({
    initial: {y : -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
})

const Technologies = () => {
  return  (
<div className="border-b border-neutral-800 pb-24">
    <motion.h2 
       whileInView={{opacity: 1, y:0}}
       initial= {{opacity: 0, y: -100}}
       transition={{duration: 1.5}}
       className="my-20 text-center text-4xl"> Technologies </motion.h2> 
    <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial= {{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
         className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
            variants={iconVarients(2.5)}
            initial= 'initial'
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiHtml5Line className="text-6xl text-orange-700"/>
        </motion.div>
        <motion.div
             variants={iconVarients(3)}
             initial= 'initial'
             animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiCss3Line className="text-6xl text-blue-500 "/>
        </motion.div>
        <motion.div 
           variants={iconVarients(5)}
           initial= 'initial'
           animate= 'animate'
           className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-6xl text-yellow-500"/>
        </motion.div>
        <motion.div 
            variants={iconVarients(3)}
            initial= 'initial'
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-6xl text-cyan-400"/>
        </motion.div>
        <motion.div
            variants={iconVarients(5)}
            initial= 'initial'
            animate= 'animate' 
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNodejsLine className="text-6xl text-green-500"/>
        </motion.div>
        <motion.div 
            variants={iconVarients(4)}
            initial= 'initial'
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-6xl "/>
        </motion.div>
        <motion.div 
            variants={iconVarients(8)}
            initial= 'initial'
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMysql className="text-6xl text-cyan-300"/>
        </motion.div>
        <motion.div
            variants={iconVarients(3)}
            initial= 'initial'
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-6xl text-green-500"/>
        </motion.div>
    </motion.div>
</div>
    )
}

export default Technologies