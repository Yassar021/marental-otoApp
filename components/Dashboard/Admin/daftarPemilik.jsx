/* eslint-disable react/no-children-prop */
import DashboardAdmin from "../../../layout/dashboardAdmin";
import { Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftAddon, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react"
import CardPemilikKendaraan from "./cardPemilik";
import CardPelanggan from "./cardPelanggan";


const DaftarPemilik = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <DashboardAdmin pageTitle={'Daftar Pemilik'}>
            <Flex direction={'row'} justifyContent='space-between'>
                <Box>
                    <Text fontSize={'22'} fontWeight='600'>Daftar Pemilik Kendaraan</Text>
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
                                        <InputLeftAddon children='Nama Lengkap' />
                                            <Input type='text' placeholder='Nama Lengkap' />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftAddon children='Tempat Lahir' />
                                            <Input type='text' placeholder='Tempat Lahir' />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftAddon children='Tanggal Lahir' />
                                            <Input type='date' placeholder='Tanggal Lahir' />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftAddon children='Foto KTP' />
                                            <Input type='file' placeholder='Foto KTP' />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftAddon children='NIK' />
                                            <Input type='number' placeholder='NIK' />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftAddon children='Alamat' />
                                            <Input type='text' placeholder='Alamat' />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftAddon children='No HP' />
                                            <Input type='number' placeholder='No HP' />
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

            <Box w='100%' mt='40px' h='auto'>
                <Tabs size='lg' variant='enclosed'>
                    <TabList>
                        <Tab>Pelanggan</Tab>
                        <Tab>Pemilik Kendaraan</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <SimpleGrid mt='20px' columns={{base:1,md:1,lg:3}} spacing='20px'>
                                <CardPelanggan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                                <CardPelanggan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                                <CardPelanggan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                                <CardPelanggan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                            </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                            <SimpleGrid mt='20px' columns={{base:1,md:1,lg:3}} spacing='20px'>
                                <CardPemilikKendaraan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                                <CardPemilikKendaraan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                                <CardPemilikKendaraan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                                <CardPemilikKendaraan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            
        </DashboardAdmin>
    )
}

export default DaftarPemilik