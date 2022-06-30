/* eslint-disable react/no-children-prop */
import { Box, Button, Flex, HStack, Input, InputGroup, InputLeftAddon, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Table, TableContainer, Tbody, Td, Text, Tr, useDisclosure, VStack } from "@chakra-ui/react"
import DashboardAdmin from "../../../layout/dashboardAdmin"

const KonfigurasiAdmin = () => {
    const { isOpen, onOpen, onClose,isOpen1, onOpen1, onClose1 } = useDisclosure();

    return(
        <DashboardAdmin pageTitle={'Konfigurasi'}>
            <Flex direction={'row'} justifyContent='space-between'>
                <Box>
                    <Text fontSize={'22'} fontWeight='600'>Konfigurasi</Text>
                </Box>
                <Stack>
                    <Button 
                        size='md'
                        height='48px'
                        width='160px'
                        bgColor='#4D5BCE'
                        color='#fff'
                        _hover={{ bg: '#4D5BCE' }}
                        _active={{
                            bg: '#4D5BCE',
                            transform: 'scale(0.98)',
                         }} 
                         onClick={onOpen}>
                            Edit
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Edit Konfigurasi</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Stack spacing='20px'>
                                    <InputGroup>
                                        <InputLeftAddon children='No Rekening' />
                                            <Input type='text' />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftAddon children='No Whatsapp' />
                                            <Input type='text' />
                                        </InputGroup>
                                </Stack>                            
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme='red' mr={3} onClick={onClose}>
                                    Tutup
                                </Button>
                                <Button colorScheme='blue' mr={3}>
                                    Simpan
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Stack>
            </Flex>

            <Box mt='40px'>
            <TableContainer>
                <Table variant='none'>
                    <Tbody>
                        <Tr>
                            <Td>No. Rekening</Td>
                            <Td>12812-2121-12121-2121</Td>                            
                        </Tr>
                        <Tr>
                            <Td>No. Whatsapp Admin</Td>
                            <Td>0821-2121-2121</Td>
                        </Tr>
                    </Tbody>
                </Table>
                </TableContainer>
            </Box>
        </DashboardAdmin>
    )
}

export default KonfigurasiAdmin