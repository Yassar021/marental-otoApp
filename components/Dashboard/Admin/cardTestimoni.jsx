/* eslint-disable react/no-children-prop */
import {Box, Text,Image,Stack, Link, Button, Flex, VStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, InputGroup, InputLeftAddon, Input, ModalFooter, HStack} from "@chakra-ui/react";


const CardTestimoni = ({rating,pesan,name}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box borderRadius={'12px'} w='100%' h='auto' p='24px' shadow={'lg'} bgColor='#011627' textAlign={'left'}>
            <Flex direction='column' gap='20px'>
                        <Stack>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3072 7.21989C10.9493 5.61921 11.2704 4.81886 11.7919 4.70794C11.9291 4.67877 12.0708 4.67877 12.208 4.70794C12.7295 4.81886 13.0506 5.61921 13.6927 7.21989C14.0578 8.13017 14.2404 8.58531 14.582 8.89488C14.6778 8.98171 14.7818 9.05904 14.8926 9.12579C15.2874 9.36377 15.7803 9.40791 16.7661 9.4962C18.4348 9.64565 19.2692 9.72037 19.524 10.1961C19.5768 10.2946 19.6127 10.4013 19.6302 10.5117C19.7146 11.0447 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5428 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5274C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5274L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5428 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0447 4.36975 10.5117C4.38724 10.4013 4.42312 10.2946 4.47589 10.1961C4.73069 9.72037 5.56507 9.64565 7.23384 9.4962C8.21962 9.40791 8.71251 9.36377 9.10735 9.12579C9.2181 9.05904 9.32211 8.98171 9.41793 8.89488C9.75954 8.58531 9.94211 8.13017 10.3072 7.21989Z" fill="#FFCF26" stroke="#FFCF26" strokeWidth="2"/>
                            </svg>
                        </Stack>
                    <Text fontSize={'18'} fontWeight='500'>Praja</Text>
                    <Text fontSize={'14'} fontWeight='400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ipsa!</Text>
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
                                <ModalHeader>Edit Pemilik Kendaraan</ModalHeader>
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
        </Box>
    )
}

export default CardTestimoni