import React,{useEffect} from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoClipboard } from "react-icons/io5";
import img from '../../assets/casablanca.jpg'
import img2 from '../../assets/mar.jpg'
import img3 from '../../assets/fe.jpg'
import img4 from '../../assets/chaoun.jpg'
import img5 from '../../assets/tetouane.jpg'
import img6 from '../../assets/nador.jpg'
import img7 from '..//..//assets/oualdia.jpg'
import img8 from '../../assets/essouira.jpg'

import Aos from "aos"
import 'aos/dist/aos.css'






const Data=[
    {
        id:1,
        imgSrc:img,
        destTitle:'CasaBlanca',
        location:'Morocco',
        grade:'energy and commerce',
        /*calcul 50$ *3 days  */
        fees:'$150 ',
        description:'The bustling Casablanca. Beautiful palm trees lining its paths, with the Atlantic ocean over the horizon, and large business buildings in every corner : Casablanca is the economic lung of Morocco ; a bustling metropolis'
        

    },
    {
        id:2,
        imgSrc:img2,
        destTitle:'Marrakech',
        location:'Morocco',
        grade:'the red city',
        fees:'$200 ',
        description:'Marrakech known as  the Pearl of "\n" the South or the red city, is a city in Morocco at the foot of the Atlas Mountains. Located at the crossroads of the Sahara and the High Atlas, it is a home to nearly 1.5 million people, Marrakech is the 4th largest city in Morocco after Casablanca, Rabat and Fez'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:'Fes',
        location:'Morocco',
        grade:'Spiritual Capital',
        fees:'$150 ',
        description:"Fes (or Fez) is one of Morocco's most historic and culturally rich cities. It is renowned for its well-preserved medieval architecture, vibrant culture, and significance as a spiritual and intellectual hub"
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:'Chefchaouen',
        location:'Morocco',
        grade:'Blue Pear',
        fees:'$150 ',
        description:'Chefchaouen (Chaoun), the "Blue Pearl," is a serene mountain city in northern Morocco, known for its blue-washed streets, charming alleys, and artisanal crafts. It’s a peaceful blend of culture and nature'
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:'Tétouan',
        location:'Morocco',
        grade:'White Dove',
        fees:'$150 ',
        description:'Tétouan, the "White Dove," is a picturesque city in northern Morocco, nestled between the Rif Mountains and the Mediterranean Sea. Known for its Andalusian influence, it boasts a UNESCO-listed medina, elegant Spanish colonial architecture, and vibrant arts. The city blends historic charm with coastal beauty, offering a tranquil and culturally rich atmosphere.'
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:'Nador',
        location:'Morocco',
        grade:'Coastal Gateway',
        fees:'$200 ',
        description:'Nador is a modern coastal city in northeastern Morocco, known for its Mediterranean views, economic activity, and connection to the Moroccan diaspora. It offers calm beaches and a blend of tradition and modernity'
    },
    {
        id:7,
        imgSrc:img7,
        destTitle:'El Oualidia',
        location:'Morocco',
        grade:'Lagoon Paradise',
        fees:'$150 ',
        description:'El Oualidia is a small coastal town in western Morocco, known for its stunning lagoon, beautiful beaches, and serene atmosphere. It’s a popular spot for birdwatching, especially for migratory species, and offers a peaceful escape with a mix of natural beauty and traditional fishing village charm'
    },
    {
        id:8,
        imgSrc:img8,
        destTitle:'Essouira',
        location:'Morocco',
        grade:'Cultural Oasis',
        fees:'$200 ',
        description:"Essaouira is a historic coastal city on Morocco's Atlantic coast,is famous for windsurfing and kitesurfing, and its vibrant cultural festivals, including music and arts events, draw visitors from around the world"
    },
        
    ]
const Main = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


    return <section className="main container section">
<div className="secTitle">
    <h3 className="title" data-aos="fade-right" >
    Most visited destinations
    </h3>
</div>
<div className="sectionContent grid">

{
    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
        return(
                <div key={id} className="singleDestination" data-aos="fade-up">
                    <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle}></img>
                    </div>

                    <div className="cardInfo">
                        <h4 className="destTitle">
                        {destTitle}
                        </h4>
                        <span className="continent flex">
                        <HiOutlineLocationMarker className="icon" />
                        <span className="name">{location}</span>
                        </span>
                        <div className="fees flex">
                            <div className="grade">
                            <span>{grade}<small>
                            +1</small></span>
                            </div>
                            <div className="price">
                                <h5>{fees}</h5>
                            </div>

                        </div>


                        <div className="desc">
                            <p>{description}</p>
                        </div>

                        <button className="btn flex">
                        DETAIS <IoClipboard className="icon"/>

                        </button>

                    </div>

                </div>
        )
    })
}


</div>



    </section>;
};

export default Main;
