import { Box, Button, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { useState } from "react"
import Authentication from "../../layout/auth"

const Register = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)


    return ( 
        <Authentication pageTitle={'register'}>
            <Flex direction={'column'} gap='20px' align={'center'} justifyContent={'center'} mt='120px' mx={'auto'} w='520px'>
                <Box textAlign={'center'}>
                    <Text fontSize={'22'} fontWeight='600'>Marental-Oto</Text>
                </Box>

                <Tabs mt='20px'>
                    <TabList>
                        <Tab>Daftar Pengguna</Tab>
                        <Tab>Daftar Pemilik Kendaraan</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Box my='20px' textAlign={'center'}>
                                <Text fontSize={'22'} fontWeight='600'>Pengguna</Text>
                            </Box>
                            <FormControl isRequired>
                                <FormLabel htmlFor='first-name'>Nama Lengkap</FormLabel>
                                <Input id='first-name' placeholder='nama lengkap' />
                            </FormControl>
                            <FormControl my='20px' isRequired>
                                <FormLabel htmlFor='first-name'>Email</FormLabel>
                                <Input id='first-name' placeholder='Email' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor='first-name'>Password</FormLabel>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Link href='/' _hover={{textDecor:'none'}}>
                                <Button 
                                    alignItems={'center'}
                                    ml={'auto'}
                                    mt='20px'
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
                        </TabPanel>
                        <TabPanel>
                            <Box my='20px' textAlign={'center'}>
                                <Text fontSize={'22'} fontWeight='600'>Pemilik Kendaraan</Text>
                            </Box>
                            <FormControl isRequired>
                                <FormLabel htmlFor='first-name'>Nama Lengkap</FormLabel>
                                <Input id='first-name' placeholder='nama lengkap' />
                            </FormControl>
                            <FormControl my='20px' isRequired>
                                <FormLabel htmlFor='first-name'>Email</FormLabel>
                                <Input id='first-name' placeholder='Email' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor='first-name'>Password</FormLabel>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Link href='/' _hover={{textDecor:'none'}}>
                                <Button 
                                    alignItems={'center'}
                                    ml={'auto'}
                                    mt='20px'
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
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                
                
                
            </Flex>
        </Authentication>
    )
}

export default Register