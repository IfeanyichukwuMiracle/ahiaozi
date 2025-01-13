import {motion} from "motion/react"

const Indicator2 = () => {
  return (
<section>
<motion.div animate={{opacity:[0.3,1,0.3]}} transition={{duration:1.5,repeat:Infinity}} className="bg-red-200 size-4 rounded-full flex items-center justify-center" >
   <div className="bg-red-600 rounded-full size-2" >
   </div>
</motion.div>
</section>
  )
}

export default Indicator2