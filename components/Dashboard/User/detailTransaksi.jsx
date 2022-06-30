import { Box, Flex, HStack, Image, Link, Stack, Text } from "@chakra-ui/react"
import Home from "../../../layout/home"

const DetailTransaksiUser = () => {
    return (
        <Home pageTitle={'Detail Transaksi'}>
            <Link href='/pengguna' _hover={{textDecor:'none'}}>
                   <HStack spacing='20px'>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12L4.29289 11.2929L3.58579 12L4.29289 12.7071L5 12ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11V13ZM8.29289 7.29289L4.29289 11.2929L5.70711 12.7071L9.70711 8.70711L8.29289 7.29289ZM4.29289 12.7071L8.29289 16.7071L9.70711 15.2929L5.70711 11.2929L4.29289 12.7071ZM5 13H17V11H5V13Z" fill="#CCD2E3"/>
                            </svg>
                        </Stack>
                        <Text fontSize={'16'} fontWeight='600'>Kembali</Text>
                    </HStack>
            </Link>
            <Flex direction={{base:'column',md:'row' }}gap='40px' justifyContent={'space-between'} mt='40px'>
                <Stack spacing='20px'>
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
                            <Text fontSize={'22'}>Harga Sewa:   Rp.300.000/Hari</Text>
                            <Text fontSize={'22'}>Tanggal Sewa:  12 November 2022</Text>
                            <Text fontSize={'22'}>Jam Sewa :   12.00</Text>
                            <Text fontSize={'22'}>Durasi:   2 Hari</Text>
                            <Text fontSize={'24'} fontWeight='600'>Total:   Rp.600.000/Hari</Text>
                        </Stack>
                    </Box>
                </Stack>

                <Box w='496px' h='auto' p='10px'>
                    <Box>
                        <Text fontSize={'22'} fontWeight='600'>Metode Pembayaran</Text> 
                        <Text mt='18px' fontSize={'18'} fontWeight='600'>Silahkan transfer ke Rekening</Text> 
                        <HStack spacing={'10px'}>
                            <Image src='/bni.png' w='45px' h='25px' alt='bni' />
                            <Text fontSize={'18'} fontWeight='600'>2187 12121 2121 1221</Text>
                        </HStack>
                        <Text my='8px' fontSize={'18'} fontWeight='500'>
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
                </Box>
            </Flex> 
        </Home>
    )
}

export default DetailTransaksiUser