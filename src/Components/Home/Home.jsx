import React,{useEffect} from "react"
import "./home.css"
import video from '../../assets/vid2.mp4'
import { GrLocation } from "react-icons/gr"
import { HiFilter } from "react-icons/hi"
import { TfiFacebook } from "react-icons/tfi"
import { FaInstagram } from "react-icons/fa"
import { FaTripadvisor } from "react-icons/fa"
import { BsListTask } from "react-icons/bs"
import { TbApps } from "react-icons/tb";

import Aos from "aos"
import 'aos/dist/aos.css'




const Home = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


return (
    <section className="home">
        <div className="overlay">

        </div>
        <video src={video} muted autoPlay loop type="vid2/mp4">

        </video>
        <div className="homeContent container">
            <div className="textDiv">
            <span className="smallText" data-aos="fade-up">
            Our Packages
            </span>

            
            <h1 className="homeTitle" data-aos="fade-up">
            Search Your Holiday
            </h1>

            </div>

            <div className="cardDiv grid" data-aos="fade-up">
                <div className="destinationInput">
                    <label htmlFor="city"> Search your Destination :

                    </label>
                    <div className="input flex">
                        <input type="text" placeholder="Enter City 
                        name here ...">
                        
                        </input>
                        <GrLocation className="icon" />

                        
                    </div>
                </div>
                <div className="dateInput">
                    <label htmlFor="date"> Select your date :

                    </label>
                    <div className="input flex">
                        <input type="date">
                        
                        </input>
                        

                        
                    </div>
                </div>
                <div className="priceInput">
                    <div className="label_total flex">
                    <label htmlFor="price">Max price :
                    </label>
                    <h3 className="total">$5000</h3>
                    </div>
                    <div className="input prc flex" >
                        <input type="range" max="5000" min="1000"/>
                    </div>
                </div>

                <div className="searchOptions flex">
                <HiFilter className="icon" />
                <span>
                    MORE FILTRES
                </span>

                </div>
            </div>

            <div className="homeFooterIcons flex" data-aos="fade-up">
                
                <div className="rightIcons">
                <TfiFacebook className="icon fb" />
                <FaInstagram className="icon ins" />
                <FaTripadvisor className="icon tri" />
                    
                </div>
                <div className="leftIcons">
                <BsListTask  className="icon bs" />
                <TbApps  className="icon app" />
                </div>
            </div>

        </div>
    
    </section>

)

}

export default Home;