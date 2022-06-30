/* eslint-disable react/no-children-prop */
import DashboardAdmin from "../../../layout/dashboardAdmin";
import CardTestimoni from "../Admin/cardTestimoni"
import { Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftAddon, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react"


const TestimoniAdmin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <DashboardAdmin pageTitle={'Testimoni'}>
            <Flex direction={'row'} justifyContent='space-between'>
                <Box>
                    <Text fontSize={'22'} fontWeight='600'>Testimonial</Text>
                </Box>
                <Stack>
                    <Button onClick={onOpen}>Tambahkan </Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Tambahkan Pemilik Kendaraan</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Stack spacing='20px'>
                                        <InputGroup>
                                            <InputLeftAddon children='Rating' />
                                            <Input type='number' placeholder='Rating' />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftAddon children='Pesan' />
                                            <Input type='text' placeholder='Pesan' />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftAddon children='nama' />
                                            <Input type='text' placeholder='Nama' />
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

                <SimpleGrid mt='20px' columns={{base:1,md:2,lg:3,xl:4,}} spacing='20px'>
                    <CardTestimoni />
                    <CardTestimoni />
                    <CardTestimoni />
                    <CardTestimoni />
                </SimpleGrid>
        </DashboardAdmin>
    )
}

export default TestimoniAdmin