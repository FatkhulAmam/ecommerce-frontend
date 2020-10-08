import React from 'react'
import Caroucel from 'react-elastic-carousel'
import NavSearch from '../component/navSearchBar'
import gb1 from '../assets/image/corou1.png'
import gb2 from '../assets/image/corou2.png'
import cloth from '../assets/image/baju.png'

import {Container} from 'reactstrap'

function Home() {
    const breakPoints01 = [
        {width: 1, itemsToShow: 1},
        {width: 768, itemsToShow: 2}
    ];
    const breakPoints02 = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 780, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
        {width: 1500, itemsToShow: 5}
    ];

    return (
        <React.Fragment>
            <NavSearch />
            <Container>
            <Caroucel className="mt-3" breakPoints={breakPoints01}>
                <img src={gb1} alt='caroucel01'></img>
                <img src={gb2} alt='caroucel02'></img>
                <img src={gb1} alt='caroucel03'></img>
                <img src={gb2} alt='caroucel04'></img>
                <img src={gb1} alt='caroucel05'></img>
                <img src={gb2} alt='caroucel06'></img>
                <img src={gb1} alt='caroucel07'></img>
            </Caroucel>
            <Caroucel className="mt-3" breakPoints={breakPoints02}>
                <img src={cloth} alt='img1'></img>
                <img src={gb2} alt='img2'></img>
                <img src={gb1} alt='img3'></img>
                <img src={cloth} alt='img4'></img>
                <img src={gb1} alt='img5'></img>
                <img src={gb2} alt='img6'></img>
                <img src={cloth} alt='img7'></img>
            </Caroucel>
            <hr/>
            </Container>
            <Container>
            <body>
                <h3>New</h3>

            </body>
            </Container>
        </React.Fragment>
    )
}

export default Home