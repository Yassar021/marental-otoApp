import { SimpleGrid } from "@chakra-ui/react"
import Home from "../../layout/home"
import CardRental from "./cardRental"

const Beranda = () => {
    return ( 
        <Home pageTitle={'Home'}>
            <SimpleGrid columns={{base:1,md:2,lg:3}} spacing='20px'>
                <CardRental image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                <CardRental image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                <CardRental image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                <CardRental image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                <CardRental image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
                <CardRental image={'/car.jpg'} nameCar={'Pajero Sport'} dateIn={'14 Nov 2022'} />
            </SimpleGrid>
        </Home>
    )
}

export default Beranda