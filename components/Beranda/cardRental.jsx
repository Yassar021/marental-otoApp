import {Box, Text,Image,Stack, Link, Button, Flex, VStack} from "@chakra-ui/react";

const CardRental = ({image,nameCar,dateIn}) => {
    return ( 
        <Box borderRadius={'12px'} w='325' h='auto' p='24px' shadow={'lg'} bgColor='#011627' textAlign={'left'}>
            <Image src={image} w='100%' h='auto' alt="image-car" />
            <Stack direction={'column'} spacing={'10px'} mt='10px'>
                <Text fontSize={'16'} >{nameCar}</Text>
                <Text fontSize={'16'} >Tanggal Masuk : {dateIn}</Text>
                <Link href='/cardDetail' _hover={{textDecor:'none'}}>
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
                            Lihat Detail
                        </Button>
                    </Link>
            </Stack>
        </Box>
    )
}

export default CardRental