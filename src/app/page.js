import Banner from "@/components/homePage/Banner";
import FeaturedSection from "@/components/homePage/FeaturedSection";
import MostBorrowedBooks from "@/components/homePage/MostBorrowedBooks";
import NewArrivalsBooks from "@/components/homePage/NewArrivalsBooks";
import QuetosSection from "@/components/homePage/QuetosSection";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <NewArrivalsBooks></NewArrivalsBooks>
      <FeaturedSection></FeaturedSection>
      <MostBorrowedBooks></MostBorrowedBooks>
      <QuetosSection></QuetosSection>
    </div>
  );
}
