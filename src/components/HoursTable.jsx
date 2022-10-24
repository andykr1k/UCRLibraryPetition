import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import {motion} from 'framer-motion'
//https://library.ucr.edu/about/hours
//https://library.ucdavis.edu/hours/
//https://www.library.ucla.edu/location/powell-library
//https://library.ucsd.edu/hours/
export default function HourStats() {
    return(
        <div>
        <TableContainer>
            <Table size='sm' variant='striped'>
                <Thead>
                <Tr>
                    <Th>School</Th>
                    <Th>Library/Room</Th>
                    <Th>Hours</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>UCR</Td>
                    <Td>Rivera Libary</Td>
                    <Td>7:30 AM - 8 PM</Td>
                </Tr>
                <Tr>
                    <Td>UCLA</Td>
                    <Td>Powell Library</Td>
                    <Td>8 AM - 11 PM</Td>
                </Tr>
                <Tr>
                    <Td>UCSD</Td>
                    <Td>Overnight Study</Td>
                    <Td>24 Hours</Td>
                </Tr>
                </Tbody>
            </Table>
            </TableContainer>   
        </div>
    )
}