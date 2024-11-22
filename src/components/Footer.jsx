import React from "react";
import { FacebookLogo, InstagramLogo, TiktokLogo, YoutubeLogo } from "../icons";


function Footer() {
  return (
    <div>
      <footer className="bg-[#F8DFDF] font-kanit text-black shadow-lg  py-4 w-full overflow-hidden truncate ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-[13px]">
            <p>&copy; 2024 copyright by sarupsaisin</p>
            <div className="flex space-x-1 sm:space-x-4 ">
              {/* Replace these with actual icons or use plain text */}
              <a
                href="https://www.facebook.com/sarupsaisin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookLogo className="w-8" />
              </a>
              <a
                href="https://www.youtube.com/@sarupsaisin "
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeLogo className="w-8" />
              </a>
              <a
                href="https://www.tiktok.com/@sarupsaisin "
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiktokLogo className="w-8" />
              </a>
              <a
                href="https://www.instagram.com/sarupsaisin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo className="w-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
