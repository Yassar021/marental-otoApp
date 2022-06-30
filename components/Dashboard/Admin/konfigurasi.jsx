import { Box, Table, TableContainer, Tbody, Td, Text, Tr } from "@chakra-ui/react"
import DashboardAdmin from "../../../layout/dashboardAdmin"

const KonfigurasiAdmin = () => {
    return(
        <DashboardAdmin pageTitle={'Konfigurasi'}>
            <Box>
                <Text fontSize={'22'} fontWeight='600'>Konfigurasi</Text>
            </Box>

            <Box mt='40px'>
            <TableContainer>
                <Table variant='none'>
                    <Tbody>
                    <Tr>
                        <Td>No. Rek</Td>
                        <Td>12812-2121-12121-2121</Td>
                        <Td>Edit</Td>
                    </Tr>
                    <Tr>
                        <Td>No. WA Admin</Td>
                        <Td>0821-2121-2121</Td>
                        <Td>Edit</Td>
                    </Tr>
                    </Tbody>
                </Table>
                </TableContainer>
            </Box>
        </DashboardAdmin>
    )
}

export default KonfigurasiAdmin