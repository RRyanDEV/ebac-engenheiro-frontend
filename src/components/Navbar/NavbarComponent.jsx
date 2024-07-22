import { Navbar } from "flowbite-react";
import SearchbarComponent from "./SearchbarComponent";
import ButtonToggle from "../ModeComponent/ButtonToggle";

export default function NavbarComponent() {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <h1 className="flex flex-col self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            EBAC - Engenheiro Frontend
            <p className="font-light">Portal de Exercícios</p>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <SearchbarComponent></SearchbarComponent>
          <ButtonToggle></ButtonToggle>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
