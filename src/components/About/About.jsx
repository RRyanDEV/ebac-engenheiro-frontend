import Image from "next/image";
import aboutPic from "../../assets/about-image/about-image.jpg";

import { Button} from "flowbite-react";

export default function About() {
  return (
    <>
    <div id="sobre" 
        className="flex w-full
        mt-24
        max-sm:mt-20
        max-sm:flex-col-reverse 
        max-sm:gap-20 
        max-md:flex-col-reverse
        max-md:mt-20
        max-md:gap-20
        max-md:px-1 
        self-center justify-around">
        <Button
            className="dark:bg-blue-600 self-center dark:hover:bg-blue-700 bg-blue-600 hover:bg-blue-800"
            href="https://github.com/RRyanDEV/ebac-engenheiro-frontend"
            target="_blank"> Acesse o Repositório no Github
        </Button>

        <div className="max-sm:px-5 self-center">
            <Image
            src={aboutPic}
            width={450}
            height={450}
            alt="Picture of the author"/>
        </div>
     </div>
    </>
);
}
