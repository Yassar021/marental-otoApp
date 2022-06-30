/* eslint-disable react/no-children-prop */
import {Box, Text,Image,Stack, Link, Button, Flex, VStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, InputGroup, InputLeftAddon, Input, ModalFooter, HStack} from "@chakra-ui/react";

const CardKendaraanPemilik = ({image,nameCar,dateIn,status}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return ( 
        <Box borderRadius={'12px'} w='320px' h='auto' p='24px' shadow={'lg'} bgColor='#011627' textAlign={'left'}>
            <Image src={image} w='100%' h='auto' alt="image-car" />
            <Stack direction={'column'} spacing={'10px'} mt='10px'>
                <Text fontSize={'16'} >{nameCar}</Text>
                <Text fontSize={'16'} >Tanggal Masuk : {dateIn}</Text>
                <Text fontSize={'16'} >Status : {status}</Text>
                <HStack spacing='20px'>
                    <Link href='/detailKendaraanPemilik' _hover={{textDecor:'none'}}>
                        <Button 
                            size='md'
                            height='48px'
                            width='120px'
                            bgColor='#607B96'
                            color='#fff'
                            _hover={{ bg: '#607B96' }}
                            _active={{
                                bg: '#607B96',
                                transform: 'scale(0.98)',
                            }}
                            >
                            Lihat Detail
                        </Button>
                    </Link>
                    <Stack>
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
                                <ModalHeader>Edit Kendaraan</ModalHeader>
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
                </HStack>
            </Stack>
        </Box>
    )
}

export default CardKendaraanPemilik