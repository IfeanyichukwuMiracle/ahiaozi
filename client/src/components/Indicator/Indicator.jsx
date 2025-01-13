import {motion} from "motion/react"


const Indicator = () => {
  return (
<section className={`absolute -top-[.4rem] -right-[.4rem]`}>
<motion.div animate={{opacity:[0,1,0.7]}} transition={{duration:1.5,repeat:Infinity}} className="bg-red-200 size-4 rounded-full flex items-center justify-center" >
   <div className="bg-red-600 rounded-full size-2" >
   </div>
</motion.div>
</section>
  )
}

export default Indicator