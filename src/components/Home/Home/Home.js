import React from 'react';
import Header from '../Header/Header';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import Services from '../Services/Services';
import OurWorks from '../OurWorks/OurWorks';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
    <>
       <Header></Header>
       <CompanyInfo></CompanyInfo>
       <Services></Services>
       <OurWorks></OurWorks>
       <FeedBack></FeedBack>
       <Footer></Footer>
    </>
    );
};

export default Home;