import { Box, Button, Flex, Link, Show, Stack, Text } from "@chakra-ui/react"

const Navbar = () => {
    return ( 
        <Box bgColor={'#1E2D3D'}>
            <Flex py='40px' px='20px' justifyContent={'space-between'} justify='center' >
                <Stack direction={'row'} spacing='40px'>
                    <Link href='/' _hover={{textDecor:'none'}}>
                        <Text fontSize={'26'} fontWeight='600' letterSpacing={'0.1em'}>MarentalOto</Text>
                    </Link>
                    <Show above='lg'>
                        <Link href='/' _hover={{textDecor:'none'}}>
                            <Text fontSize={'16'} fontWeight='400' letterSpacing={'0.1em'}>Beranda</Text>
                        </Link>
                        <Link href='/' _hover={{textDecor:'none'}}>
                            <Text fontSize={'16'} fontWeight='400' letterSpacing={'0.1em'}>Testimoni</Text>
                        </Link>
                    </Show>
                </Stack>
                <Show above='lg'>
                    <Stack direction={'row'} spacing='20px'>
                        <Link href='/' _hover={{textDecor:'none'}}>
                            <Button 
                                size='md'
                                height='48px'
                                width='160px'
                                bgColor='#011627'
                                color='#fff'
                                _hover={{ bg: '#011627' }}
                                _active={{
                                    bg: '#011627',
                                    transform: 'scale(0.98)',
                                }}
                                >
                                Daftar
                            </Button>
                        </Link>
                        <Link href='/' _hover={{textDecor:'none'}}>
                            <Button 
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
                                Masuk
                            </Button>
                        </Link>
                    </Stack>
                </Show>
                
            </Flex>
        </Box>
    )
}

export default Navbar 