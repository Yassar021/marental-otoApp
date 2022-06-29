/* eslint-disable react/no-children-prop */
import { Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftAddon, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Text, useDisclosure } from "@chakra-ui/react"
import DashboardAdmin from "../../../layout/dashboardAdmin"
import CardKendaraan from "./cardKendaraan"

const DaftarKendaraan = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return ( 
        <DashboardAdmin pageTitle={'Daftar Kendaraan'}>
            <Flex direction={'row'} justifyContent='space-between'>
                <Box>
                    <Text fontSize={'22'} fontWeight='600'>Daftar Mobil</Text>
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
            <SimpleGrid mt='40px' columns={{base:1,md:2,lg:3,xl:4}} spacing='20px'>
                <CardKendaraan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                <CardKendaraan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                <CardKendaraan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                <CardKendaraan image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
            </SimpleGrid>
        </DashboardAdmin>
    )
}

export default DaftarKendaraan