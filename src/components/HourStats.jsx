import { StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Box } from '@chakra-ui/react'
import {motion} from 'framer-motion'
//https://library.ucr.edu/about/hours
//https://library.ucdavis.edu/hours/
//https://www.library.ucla.edu/location/powell-library
//
export default function HourStats() {
    return(
        <div className='grid grid-cols-1 gap-2 p-5'>
            <StatGroup >
            <motion.a whileHover={{scale:1.2}} href='https://library.ucr.edu/about/hours'>
                <Stat variant="danger">
                    <StatLabel>UCR</StatLabel>
                    <StatNumber>7:30 AM - 8 PM</StatNumber>
                    <StatHelpText>
                    <StatArrow type='decrease' />
                    12.5 Hours
                    </StatHelpText>
                </Stat>
            </motion.a>
            <motion.a whileHover={{scale:1.2}} href='https://library.ucdavis.edu/hours/'>
                <Stat variant="great">
                    <StatLabel>UCD Study Rooms</StatLabel>
                    <StatNumber>12 AM - 12 AM</StatNumber>
                    <StatHelpText>
                    <StatArrow type='increase' />
                    24 Hours
                    </StatHelpText>
                </Stat>
            </motion.a>
            <motion.a whileHover={{scale:1.2}} href='https://www.library.ucla.edu/location/powell-library'>
                <Stat variant="great">
                    <StatLabel>UCLA Powell Library</StatLabel>
                    <StatNumber>8 AM - 11 PM</StatNumber>
                    <StatHelpText>
                    <StatArrow type='increase' />
                    15 Hours
                    </StatHelpText>
                </Stat>
            </motion.a>

            <motion.a whileHover={{scale:1.2}} href='https://library.ucsd.edu/hours/'>
                <Stat variant="great">
                    <StatLabel>UCSD Overnight Study</StatLabel>
                    <StatNumber>12 AM - 12 AM</StatNumber>
                    <StatHelpText>
                    <StatArrow type='increase' />
                    24 Hours
                    </StatHelpText>
                </Stat>
            </motion.a>
                
            </StatGroup>
        </div>
    )
}