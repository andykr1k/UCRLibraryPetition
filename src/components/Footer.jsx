import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiChakraui } from 'react-icons/si'
import { BsCodeSlash } from 'react-icons/bs'
import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
export default function Footer(){

    return (
        <div className='flex items-center align-middle justify-center space-x-2 p-2 font-bold'>
            <div className='mr-1'>
            <BsCodeSlash/> 
            </div>
            <Text>with</Text>
            <div className='mr-2'>
            <FaReact/> 
            </div>
            <div className='mr-2'>
            <SiTailwindcss/>
            </div>
            <div className='mr-2'>
            <SiChakraui/>
            </div>
            <Text>by</Text> 
            <motion.a whileHover={{scale:1.1}} className='font-bold text-red-800' href="https://www.rebrand.ly/andykr1k"> Andrew Krikorian </motion.a>
        </div>
    )
}