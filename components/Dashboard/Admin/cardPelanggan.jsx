/* eslint-disable react/no-children-prop */
import {Box, Text,Image,Stack, Link, Button, Flex, VStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, InputGroup, InputLeftAddon, Input, ModalFooter, HStack} from "@chakra-ui/react";


const CardPelanggan = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box borderRadius={'12px'} w='400px' h='auto' p='24px' shadow={'lg'} bgColor='#011627' textAlign={'left'}>
            <Flex direction='row' gap='20px'>
                <Box>
                    <Image borderRadius={'50%'} src='/pp.png' w='60px' h='60px' alt='profile-picture' />
                </Box>
                <Box w='auto'>
                    <Text fontSize={'18'} fontWeight='500'>Praja</Text>
                    <Text fontSize={'14'} fontWeight='400'>Jln. Makassar</Text>
                </Box>
                <VStack spacing='6px'>
                    <Link href='/detailPemilik' _hover={{textDecor:'none'}}>
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
                </VStack>
            </Flex>
        </Box>
    )
}

export default CardPelanggan