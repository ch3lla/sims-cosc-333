import React from "react";
import './home.styles.css';
import HomeImg from '../../assets/images/home-base.svg';

const Home = () => {
    return (
        <div className="home">
            <div className="home-title">
                <p className="home-title-main">WELCOME TO <br /> STUDENT INFORMATION SYSTEM</p> <br />
                <p className="home-rdiagram">Check out our <a href="https://drive.google.com/file/d/1zHZTKkc9bLNQdmEPF5nVu9MB0xuN78fb/view?usp=sharing">Relational Schema Diagram</a></p>
            </div>
            <div className="home-img">
                <img src={HomeImg} alt="Home" />
            </div>
        </div>
    )
}

export default Home;