import { FaInstagram } from "react-icons/fa"; // Import Instagram icon

export function Home() {
  return (
    <div
      className="
        relative h-screen bg-cover bg-center 
        bg-[url('/mobile-bg.JPG')] 
        md:bg-[url('/desktop-bg.JPG')]"
    >
      <div className="absolute top-[11vh] right-[10vw] text-white text-lg sm-txt-xl md:top-1/2 md:right-[15vw] lg:right-[18vw] md:text-2xl lg:text-3xl">
        <p className="text-white pb-[4vh]">Website in the making ...</p>
        <span>instagram:</span>
        <a
          href="https://www.instagram.com/journeyman.cycles"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white pb-[3vh] pt-1 hover:underline"
        >
          <FaInstagram />
          <span>@journeyman.cycles</span>
        </a>
      </div>
    </div>
  );
}
