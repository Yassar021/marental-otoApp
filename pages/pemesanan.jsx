import { Box, Flex, Stack,Text,Link, Button, } from "@chakra-ui/react"
import Home from "../layout/home"

const PemesananPage = () => {
    return ( 
        <Home pageTitle={'Pemesanan'}>
           <Flex textAlign={'center'} direction={'column'} justify={'center'} mt='120px' mb='auto'>
                    <Stack mx='auto'>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z" fill="white"/>
                        </svg>
                    </Stack>
                    <Text my='20px' fontSize={'22'} fontWeight='700'>Pemesanan Berhasil, segera lakukan Pembayaran</Text>
                    <Link href='/' _hover={{textDecor:'none'}}>
                            <Button 
                                size='md'
                                height='48px'
                                width='200px'
                                bgColor='#4D5BCE'
                                color='#fff'
                                _hover={{ bg: '#4D5BCE' }}
                                _active={{
                                    bg: '#4D5BCE',
                                    transform: 'scale(0.98)',
                                }}
                                >
                                Kembali ke Beranda
                            </Button>
                        </Link>
            </Flex> 
        </Home>
    )
}

export default PemesananPage