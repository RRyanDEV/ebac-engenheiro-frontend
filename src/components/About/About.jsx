import { FaGithubSquare } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div
        id="sobre"
        className="flex w-full
        max-sm:flex-col-reverse 
        max-sm:gap-20 
        max-md:flex-col-reverse
        max-md:gap-20
        max-md:px-1 
        items-center
        h-96
        justify-center"
      >
        <div id="bg-img" className=""></div>
        <div className="absolute text-white">
          <h1 className="flex flex-col self-center whitespace-nowrap pl-4 text-xl font-semibold dark:text-white">
            
            <p className="flex items-center pt-2 gap-1 font-light">
              <a
                className="flex hover:animate-bounce"
                href="https://github.com/RRyanDEV/ebac-engenheiro-frontend"
                target="_blank"
              >
                <FaGithubSquare className="size-6" />
              </a>
            </p>
          </h1>
        </div>
      </div>
    </>
  );
}
