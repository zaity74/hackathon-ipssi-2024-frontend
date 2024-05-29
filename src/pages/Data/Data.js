import React from "react";
import Menu from "../../components/menu/Menu";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BackgroundBody from "../../components/test/test";


const Data = () => {
    // STATE

    // CONSTANTES
    // 'https://images.pexels.com/photos/18119175/pexels-photo-18119175/free-photo-of-ville-gens-personnes-individus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


    return (
        <>
            <BackgroundBody />
            <Header 
            children={<Menu />} 
            title={'Take a deep dive into our Data !'} 
            description={''} 
            gradientCode={''} // Corrected gradient code rgba(6, 7, 7, 0) 10%, rgb(6, 6, 7)
            backgroundImage={''} 
            color={' black '}
            None={'none'}
            // Example valid URL
            />
                    <div>
                        Page Data
                    </div>
            <Footer />

        </>)
}
export default Data;