/* eslint-disable react/no-children-prop */
import { Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftAddon, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react"
import DashboardAdmin from "../../../layout/dashboardAdmin"

const Transaksi = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <DashboardAdmin pageTitle={'Transaksi'}>
            <Flex direction={'row'} justifyContent='space-between'>
                <Box>
                    <Text fontSize={'22'} fontWeight='600'>Transaksi</Text>
                </Box>
                <Stack>
                    <Button onClick={onOpen}>Tambahkan </Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Tambah Kendaraan</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Stack spacing='20px'>
                                    <InputGroup>
                                        <InputLeftAddon children='Pemilik Rental' />
                                        <Input type='text' placeholder='Pemilik Rental' />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='Merk' />
                                        <Input type='text' placeholder='Merk' />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='Warna' />
                                        <Input type='text' placeholder='Warna' />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='Tahun' />
                                        <Input type='text' placeholder='Tahun' />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='No. Polisi' />
                                        <Input type='text' placeholder='No. Polisi' />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='Kapasitas' />
                                        <Input type='number' placeholder='Kapasitas' />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='Harga Sewa' />
                                        <Input type='text' placeholder='Harga Sewa' />
                                    </InputGroup>
                                    <Input type='file' placeholder='Foto Mobil' />
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

            <Box w='100%' mt='40px' h='auto'>
                <Tabs size='lg' variant='enclosed'>
                    <TabList>
                        <Tab>Semua</Tab>
                        <Tab>Pending</Tab>
                        <Tab>Sedang Berjalan</Tab>
                        <Tab>Selesai</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <SimpleGrid mt='20px' columns={3} spacing='20px'>

                            </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                            <SimpleGrid mt='20px' columns={3} spacing='20px'>
                                
                            </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                            <SimpleGrid mt='20px' columns={3} spacing='20px'>
                                
                            </SimpleGrid>
                        </TabPanel><TabPanel>
                            <SimpleGrid mt='20px' columns={3} spacing='20px'>
                                
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </DashboardAdmin>
    )
}

export default Transaksi