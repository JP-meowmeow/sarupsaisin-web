import React from "react";
import { FacebookLogo, InstagramLogo, TiktokLogo, YoutubeLogo } from "../icons";

function Footer() {
  return (
    <div>
      <footer className="bg-[#F8DFDF] font-kanit text-black shadow-lg  py-4  ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 copyright by sarupsaisin</p>
            <div className="flex space-x-4">
              {/* Replace these with actual icons or use plain text */}
              <span>
                <FacebookLogo className="w-8" />
              </span>
              <span>
                <YoutubeLogo className="w-8" />
              </span>
              <span>
                <TiktokLogo className="w-8" />
              </span>
              <span>
                <InstagramLogo className="w-8" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
