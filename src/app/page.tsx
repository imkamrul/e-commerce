import AccessoriesTwo from "@/components/Pages/HomePage/Accessor";
import Accessories from "@/components/Pages/HomePage/Accessories";
import DailyProducts from "@/components/Pages/HomePage/DailyProducts";
import DeliverMin from "@/components/Pages/HomePage/DeliverMin";
import DesktopSlider from "@/components/Pages/HomePage/DesktopSlider";
import OfferSectionTwo from "@/components/Pages/HomePage/HomeOffer";
import HomeProduct from "@/components/Pages/HomePage/HomeProduct";
import HomeSLider from "@/components/Pages/HomePage/HomeSLider";
import HotDeals from "@/components/Pages/HomePage/HotDeals";
import LoveMoreProducts from "@/components/Pages/HomePage/LoveMoreProducts";
import OfferSection from "@/components/Pages/HomePage/OfferSection";
import TopBar from "@/components/Pages/HomePage/TopBar";

const page = () => {
  return (
    <>
      <TopBar />
      <HomeSLider />
      <Accessories />
      <HotDeals />
      <DailyProducts />
      <OfferSection />
      <DeliverMin />
      <AccessoriesTwo />
      <LoveMoreProducts />
      <OfferSectionTwo />
      <DesktopSlider />
      <HomeProduct />
    </>
  );
};

export default page;
