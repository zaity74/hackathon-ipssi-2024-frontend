import React from "react";
import Menu from "../../components/menu/Menu";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


const Analysis = () => {
    // STATE

    // CONSTANTES
    const backgroundImage = 'https://i.pinimg.com/564x/b3/d6/18/b3d618735641b2bad3e2e65e79a3b7a5.jpg';


    return (
        <>

            <Header children={<Menu />} 
            title={'Take a deep dive into our Data'} 
            description={''} 
            imageUrl={''}
            backgroundImage={backgroundImage} />
                <div>
                    Page Analysis
                </div>
            <Footer />

        </>)
}
export default Analysis;