import React,{useEffect} from "react";
import './footer.css'
import Video3 from "..//..//assets/video3.mp4"
import { FiSend } from "react-icons/fi"
import { MdTravelExplore } from "react-icons/md"
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";

import Aos from "aos"
import 'aos/dist/aos.css'


const Footer = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

return( <section className="footer">
    <div className="videoDiv">
        <video src={Video3} loop muted autoPlay typeof="video/mp4"></video>
    </div>

    <div className="seContent container">
        <div className="contactDiv flex">
            <div className="text" data-aos="fade-up">
                <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>

            </div>
            <div className="inputDiv flex" >
                <input type="text" placeholder="Enter Email Address" data-aos="fade-up"/>
                <button className="btn flex " type="submit" data-aos="fade-up">
                    SEND<FiSend className="icon"/>
                </button>
            </div>
        </div>
        <div className="footerCard flex">
            <div className="footerIntro flex">
                <div className="logoDiv" data-aos="fade-up" data-aos-duration-1000>
                    <a className="logo flex" href="#">
                        <MdTravelExplore className="icon"/>Travel.
                    </a>

                </div>
                <div className="footerParagraphe " data-aos="fade-up">
                At MNYF TRAVEL, we specialize in creating unforgettable travel experiences tailored to your dreams. 
                Whether you're seeking a relaxing beach getaway, an adventurous mountain trek,
                or a cultural exploration in vibrant cities, we’re here to make it happen

                </div>
                <div className="footerSocials flex" data-aos="fade-up">
                <AiOutlineTwitter className="icon tw"/>
                <AiOutlineYoutube className="icon ytb"/>
                <AiOutlineInstagram className="icon inst" />
                <FaTripadvisor className="icon vis"/>


                </div>
            </div>

            <div className="footerLinks grid">
                {/*Group One */}
                <div className="linkGroup" 
                data-aos="fade-up"
                data-aos-duration="3000">
                    <span className="groupTitle">
                    OUR AGENCY
                    </span>
                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        Services
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        Ansurance
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        Agency
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        Tourism
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        Payment
                    </li>
                </div>
                {/*Group Two */}
                <div className="linkGroup"
                data-aos="fade-up"
                data-aos-duration="4000">
                    <span className="groupTitle">
                    PARTNER
                    </span>
                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        Bookings
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        Rentcsars
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        HostelWorld
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        Trivago
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        TripAdvisor
                    </li>
                </div>
                {/*Group Three */}
                <div className="linkGroup"
                data-aos="fade-up"
                data-aos-duration="5000">
                    <span className="groupTitle">
                    LAST MINUTE
                    </span>
                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        London
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        California
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        Indonesia
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        Europe
                    </li>

                    <li className="footerList flex">
                        <FiChevronsRight className="icon"/>
                        Oceania
                    </li>
                </div>

            </div>

            <div className="footerDiv flex">
                <small>BEST TRAVEL WEB SITE THEME</small>
                <small>COPYRIGHTS RESERVED © - EL_MOSTAIN_YOUSSEF
                2024
                </small>

            </div>

        </div>

    </div>
</section>)
};

export default Footer;