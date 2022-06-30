import { Box, Flex, HStack, Image, Link, Stack, Text } from "@chakra-ui/react"
import DashboardAdmin from "../../../layout/dashboardAdmin"

const DetailPemilik = () => {
    return (
        <DashboardAdmin pageTitle={'Detail Pemilik'}>
            <Link href='/daftarPemilik' _hover={{textDecor:'none'}}>
                   <HStack spacing='4px'>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12L4.29289 11.2929L3.58579 12L4.29289 12.7071L5 12ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11V13ZM8.29289 7.29289L4.29289 11.2929L5.70711 12.7071L9.70711 8.70711L8.29289 7.29289ZM4.29289 12.7071L8.29289 16.7071L9.70711 15.2929L5.70711 11.2929L4.29289 12.7071ZM5 13H17V11H5V13Z" fill="#CCD2E3"/>
                            </svg>
                        </Stack>
                        <Text fontSize={'16'} fontWeight='600'>Kembali</Text>
                    </HStack>
            </Link>

            <Flex direction={'row'} mt='40px' gap='40px'>
                <Box>
                    <Image borderRadius={'50%'} src='/pp.png' w='120px' h='120px' alt='profile-picture' />
                </Box>
                <Stack>
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
            </Flex>
        </DashboardAdmin>
    )
}

export default DetailPemilik