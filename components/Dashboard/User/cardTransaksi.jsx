import { Box, Button, Flex, Link, Stack, Text } from "@chakra-ui/react"

const CardTransaksi = () => {
    return ( 
        <Box shadow={'md'} p='10px'>
            <Flex direction='row' justifyContent={'space-between'}>
                <Stack spacing='12px'>
                    <Text fontSize={'18'} fontWeight='600'>Pajero Sport</Text>
                    <Text fontSize={'18'} fontWeight='600'> Tanggal Rencana Sewa : 12 Maret 2022</Text>
                    <Link href='/detailTransaksi' _hover={{textDecor:'none'}}>
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
                </Stack>

                <Box my={'auto'}>
                    <Text fontSize={'20'} fontWeight='600'>Status : Pending</Text>
                </Box>
            </Flex> 
        </Box>
    )
}

export default CardTransaksi