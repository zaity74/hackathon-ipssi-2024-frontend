import React from "react";
import Menu from "../../components/menu/Menu";
import Header from "../../components/header/Header";
import "./Home.css"


const Home = () => {
    const title = (
        <>
            <span className="red">120 years of olympics</span> history, Now let’s predict <span className="blue">Paris 2024 !</span>
        </>)
    const description = "Welcome to the official ticketing website of the Paris 2024 Olympic and Paralympic Games!"
    const imgUrl = "https://cdn.pixabay.com/photo/2020/05/10/18/30/olympics-5155137_1280.png"
    return (
        <>

            <Header Children={<Menu />} title={title} description={description} imgUrl={imgUrl} />
            <div id="projectDescription">
                <h3 className="titleObjectif"> Objectifs du projet</h3>
                <p className="descriptionObjectif"> 1. Analyze and create visualizations on an Olympic dataset from 1896 to 2016 to uncover which countries
                    stay at the top overtime, by season, and by sport; what it takes for an Olympian to be at the top for
                    each sport, sport popularity, and the relationship between Olympic Medal counts and country’s GDP.
                    1. Analyze and create visualizations on an Olympic dataset from 1896 to 2016 to uncover which countries
                    stay at the top overtime, by season, and by sport; what it takes for an Olympian to be at the top for
                    each sport, sport popularity, and the relationship between Olympic Medal counts and country’s GDP.
                </p>
                <p className="descriptionObjectif"> 1. Analyze and create visualizations on an Olympic dataset from 1896 to 2016 to uncover which countries
                    stay at the top overtime, by season, and by sport; what it takes for an Olympian to be at the top for
                    each sport, sport popularity, and the relationship between Olympic Medal counts and country’s GDP.
                    1. Analyze and create visualizations on an Olympic dataset from 1896 to 2016 to uncover which countries
                    stay at the top overtime, by season, and by sport; what it takes for an Olympian to be at the top for
                    each sport, sport popularity, and the relationship between Olympic Medal counts and country’s GDP.
                </p>
            </div>
        </>)
}
export default Home;