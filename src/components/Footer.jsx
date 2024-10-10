import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-[#F8DFDF] font-kanit text-black shadow-lg  py-4  ">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <p>&copy; 2024 sarupsaisin</p>
                <div className="flex space-x-4">
                  {/* Replace these with actual icons or use plain text */}
                  <span>FB</span>
                  <span>YT</span>
                  <span>TT</span>
                  <span>IG</span>
                </div>
              </div>
            </div>
          </footer>
    </div>
  )
}

export default Footer