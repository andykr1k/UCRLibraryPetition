import { StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Box, MenuDivider } from '@chakra-ui/react'
import {motion} from 'framer-motion'
//https://library.ucr.edu/about/hours
//https://library.ucdavis.edu/hours/
//https://www.library.ucla.edu/location/powell-library
//
export default function HourStats() {
    return(
        <div className='grid place-items-center grid-cols-2 md:grid-cols-4 p-2'>
            <motion.a whileHover={{scale:1.2}} href='https://library.ucr.edu/about/hours' target="_blank">
                <Stat size={"sm"}>
                    <StatLabel>UCR</StatLabel>
                    <StatNumber>7:30 AM - 8 PM</StatNumber>
                    <StatHelpText>
                    <StatArrow type='decrease' />
                    12.5 Hours
                    </StatHelpText>
                </Stat>
            </motion.a>

            <motion.a whileHover={{scale:1.2}} href='https://library.ucdavis.edu/hours/' target="_blank">
                <Stat size={"sm"}>
                    <StatLabel>UCD Study Rooms</StatLabel>
                    <StatNumber>12 AM - 12 AM</StatNumber>
                    <StatHelpText>
                    <StatArrow type='increase' />
                    24 Hours
                    </StatHelpText>
                </Stat>
            </motion.a>

            <motion.a whileHover={{scale:1.2}} href='https://www.library.ucla.edu/location/powell-library' target="_blank">
                <Stat size={"sm"}>
                    <StatLabel>UCLA Powell Library</StatLabel>
                    <StatNumber>8 AM - 11 PM</StatNumber>
                    <StatHelpText>
                    <StatArrow type='increase' />
                    15 Hours
                    </StatHelpText>
                </Stat>
            </motion.a>

            <motion.a whileHover={{scale:1.2}} href='https://library.ucsd.edu/hours/' target="_blank">
                <Stat size={"sm"}>
                    <StatLabel>UCSD Overnight Study</StatLabel>
                    <StatNumber>12 AM - 12 AM</StatNumber>
                    <StatHelpText>
                    <StatArrow type='increase' />
                    24 Hours
                    </StatHelpText>
                </Stat>
            </motion.a>
                
        </div>
    )
}