import About from "@/components/About/About";
import CardComponent from "@/components/Card/cardComponent";
import NavbarComponent from "@/components/Navbar/NavbarComponent";

export default function Home() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
        <About></About>
      <CardComponent></CardComponent>
    </>
  );
}
