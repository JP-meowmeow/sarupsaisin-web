import React from "react";

function PageNotFound() {
  return (
    <div>
        <div className="pt-16 mt-24 mb-24 border shadow-lg w-1/2 m-auto rounded-[64px] p-20 min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <div className="flex justify-center items-center">
        <div className="w-1/2 p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4 font-kanit ">
                404 ERROR <br />
                Page Not Found <br /><br />
                <span className="font-noto-sans-jp text-2xl">404エラー<br />
                ページが見つかりません</span>
              </h2>
        </div>
        <div className="w-1/2">
          {/* This is where you'd put the image */}
          <div className="h-full flex items-center justify-center">
            <img
              src="/src/images/logo black.png"
              alt="Login background"
              className="object-cover"
            />
          </div>
        </div>
        </div>
        </div>
      
    </div>
  );
}

export default PageNotFound;
