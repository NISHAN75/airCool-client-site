import React from 'react';
import Banner from "../Banner/Banner"
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Contact from '../Contact/Contact';
import Location from '../Location/Location';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import SubBanner from '../SubBanner/SubBanner';
import SubCard from '../SubCard/SubCard';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SubCard></SubCard>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <SubBanner></SubBanner>
      <Location></Location>
      <Contact></Contact>
    </div>
  )
}

export default Home