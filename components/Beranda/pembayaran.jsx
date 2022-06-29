import { Box, Button, Flex, HStack, Image, Link, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"
import Home from "../../layout/home"

const Pembayaran = () => {
    return (
        <Home pageTitle={'Pembayaran'}>
            <Flex justifyContent={'center'}>
                <Box textAlign={'center'}>
                    <Text fontSize={'22'} fontWeight='700'>Pilih Metode Pembayaran</Text>
                    <RadioGroup textAlign={'left'} defaultValue='2' mt='20px'>
                        <Stack spacing={5} direction='column'>
                            <Radio colorScheme='red' value='1'>
                            <Text  fontSize={'20'} fontWeight='700'>Transfer</Text>
                                <Box>
                                   <Text fontSize={'18'} fontWeight='600'>Silahkan transfer ke Rekening</Text> 
                                   <HStack spacing={'10px'}>
                                        <Image src='/bni.png' w='45px' h='25px' alt='bni' />
                                        <Text fontSize={'18'} fontWeight='600'>2187 12121 2121 1221</Text>
                                   </HStack>
                                   <Text fontSize={'18'} fontWeight='500'>
                                    Jika anda sudah mentransfer pembayaran anda, silahkan kirim ke nomor WA 0891-2121-1212
                                   </Text>
                                </Box>
                                <Link href='#' _hover={{textDecor:'none'}}>
                                        <HStack mt='10px'>
                                            <Stack>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.7586 3.00598C13.2404 3 12.6591 3 12 3C9.20435 3 7.80653 3 6.7039 3.45672C5.23373 4.06569 4.06569 5.23373 3.45672 6.7039C3 7.80653 3 9.20435 3 12V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H12C14.7956 21 16.1935 21 17.2961 20.5433C18.7663 19.9343 19.9343 18.7663 20.5433 17.2961C21 16.1935 21 14.7956 21 12C21 11.3409 21 10.7596 20.994 10.2414C20.464 10.7133 19.7655 11 19 11C17.3431 11 16 9.65685 16 8C14.3431 8 13 6.65685 13 5C13 4.23453 13.2867 3.53602 13.7586 3.00598ZM9 8.99966C8.44772 8.99966 8 9.44738 8 9.99966C8 10.5519 8.44772 10.9997 9 10.9997H15C15.5523 10.9997 16 10.5519 16 9.99966C16 9.44738 15.5523 8.99966 15 8.99966H9ZM9 12.9997C8.44772 12.9997 8 13.4474 8 13.9997C8 14.5519 8.44772 14.9997 9 14.9997H12C12.5523 14.9997 13 14.5519 13 13.9997C13 13.4474 12.5523 12.9997 12 12.9997H9Z" fill="green"/>
                                                    <path d="M19 8L19 2M16 5H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Stack>
                                            <Text>Buka WA</Text>
                                        </HStack>
                                   </Link>
                            </Radio>
                            <Radio colorScheme='green' value='2'>
                                <Text  fontSize={'20'} fontWeight='700'>Bayar di Tempat</Text>                                
                                <Box>
                                   <Text fontSize={'18'} fontWeight='600'>
                                   Silahkan cetak bukti pembayaran anda lalu bawa ke Kantor kami jln. makassar
                                   </Text>
                                </Box>
                                <Link href='maps.google.com' _hover={{textDecor:'none'}}>
                                        <HStack mt='10px'>
                                            <Stack>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14.5981 10.4999C14.0241 9.50566 11.0229 7.85497 9.66659 7.14526C9.35019 6.97969 8.97741 7.19492 8.96259 7.55171C8.89909 9.08112 8.82799 12.5057 9.40199 13.4999C9.976 14.4941 12.9773 16.1448 14.3335 16.8545C14.6499 17.02 15.0227 16.8048 15.0375 16.448C15.101 14.9186 15.1721 11.4941 14.5981 10.4999Z" fill="#4D5BCE"/>
                                                </svg>
                                            </Stack>
                                            <Text>Buka Lokasi</Text>
                                        </HStack>
                                </Link>
                            </Radio>
                        </Stack>
                    </RadioGroup>

                    <Link href='/pemesanan' _hover={{textDecor:'none'}}>
                            <Button 
                                mt='40px'
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
                                >
                                Kirim
                            </Button>
                        </Link>
                </Box>
            </Flex>
        </Home>
    )
}

export default Pembayaran