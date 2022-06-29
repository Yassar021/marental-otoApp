/* eslint-disable react/no-children-prop */
import { Box, Text, Image, Stack, HStack, Link, Flex, InputGroup, InputLeftAddon, Input, Button } from "@chakra-ui/react"
import Home from "../../layout/home"

const CardDetail = () => {
    return (
        <Home pageTitle={' Car Detail'}>
            <Link href='/' _hover={{textDecor:'none'}}>
                   <HStack spacing='20px'>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12L4.29289 11.2929L3.58579 12L4.29289 12.7071L5 12ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11V13ZM8.29289 7.29289L4.29289 11.2929L5.70711 12.7071L9.70711 8.70711L8.29289 7.29289ZM4.29289 12.7071L8.29289 16.7071L9.70711 15.2929L5.70711 11.2929L4.29289 12.7071ZM5 13H17V11H5V13Z" fill="#CCD2E3"/>
                            </svg>
                        </Stack>
                        <Text fontSize={'16'} fontWeight='600'>Kembali</Text>
                    </HStack>
            </Link>
            <Flex direction={{base:'column',md:'row' }}gap='40px' mt='40px'>
                <Box>
                    <Image src='/car.jpg' w='425px' borderRadius={'12px'} h='auto' alt='image-car' />
                </Box>
                <Box>
                    <Stack direction={'column'} spacing='16px'>
                        <Text fontSize={'22'}>Merk      :   Avanza</Text>
                        <Text fontSize={'22'}>Warna     :   Hitam</Text>
                        <Text fontSize={'22'}>Tahun     :   2019</Text>
                        <Text fontSize={'22'}>No. Polisi:   DD 8778 FU</Text>
                        <Text fontSize={'22'}>Kapasitas :   8 Orang</Text>
                        <Text fontSize={'22'}>Harga Sewa:   Rp.300.000</Text>
                    </Stack>
                    <Box w={{base:'auto',md:'380px'}} h='auto' mt='20px' shadow={'lg'}>
                        <InputGroup>
                            <InputLeftAddon children='Tanggal Sewa' />
                            <Input type='date' placeholder='Tanggal Sewa' />
                        </InputGroup>
                        <InputGroup my='20px'>
                            <InputLeftAddon children='Waktu Sewa' />
                            <Input type='time' placeholder='Waktu Sewa' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon children='Durasi' />
                            <Input type='number' placeholder='Durasi' />
                        </InputGroup>
                        <Text my='10px' fontSize={'22'}>Total Sewa : Rp.800.000</Text>
                        <Link href='/pembayaran' _hover={{textDecor:'none'}}>
                            <Button
                                size='md'
                                height='48px'
                                width='160px'
                                bgColor='#607B96'
                                color='#fff'
                                _hover={{ bg: '#607B96' }}
                                _active={{
                                    bg: '#607B96',
                                    transform: 'scale(0.98)',
                                }}
                                >
                                Sewa
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Flex>
        </Home>
    )
}

export default CardDetail