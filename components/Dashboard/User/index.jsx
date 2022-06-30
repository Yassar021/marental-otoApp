/* eslint-disable react/no-children-prop */
import {Box, Button, Center, HStack, Image, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure} from "@chakra-ui/react";
import Home from "../../../layout/home"
import CardTransaksi from "./cardTransaksi";

const Pengguna = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Home pageTitle={'Welcome'}>
            <Center>
                <Box mt='40px' textAlign={'center'}>
                    <Image borderRadius={'50%'} src='/pp.png'  w='100%' h='116px' alt='profile-picture' />
                    <Text my='20px' fontSize={'22'} fontWeight='700'>Praja</Text>
                </Box>
            </Center>

            <Box>
                <Tabs>
                    <TabList>
                        <Tab>Data Diri</Tab>
                        <Tab>Transaksi</Tab>
                    </TabList>
                    <TabPanels>

                        {/* Data Diri */}
                        <TabPanel>
                            <Box>
                                <Stack spacing='20px'>
                                    <Text fontSize={'18'}>Nama Lengkap : Praja</Text>
                                    <Text fontSize={'18'}>Tempat Lahir : Makassar</Text>
                                    <Text fontSize={'18'}>Tanggal Lahir: 03/08/1998</Text>
                                    <HStack spacing='20px'>
                                        <Text fontSize={'18'}>Foto KTP</Text>
                                        <Image src='' w='60px' h='60px' alt='foto-ktp' />
                                    </HStack>
                                    <Text fontSize={'18'}>NIK : 12032300123</Text>
                                    <Text fontSize={'18'}>Alamat : Jl. Sungai Sadang no 12</Text>
                                    <Text fontSize={'18'}>No. HP : 012302300</Text>
                                </Stack>

                                <Stack mt='20px'>
                                    <Button onClick={onOpen}
                                            size='md'
                                            height='48px'
                                            width='120px'
                                            bgColor='#4D5BCE'
                                            color='#fff'
                                            _hover={{ bg: '#4D5BCE' }}
                                            _active={{
                                                bg: '#4D5BCE',
                                                transform: 'scale(0.98)',
                                            }}
                                            >Edit </Button>
                                    <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Edit Pelanggan</ModalHeader>
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
                            </Box>
                        </TabPanel>

                        {/* Transaski */}
                        <TabPanel>
                            <SimpleGrid columns={1} spacing='40px'>
                                <CardTransaksi />
                                <CardTransaksi />
                                <CardTransaksi />
                            </SimpleGrid>                 
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Home>
    )
}

export default Pengguna