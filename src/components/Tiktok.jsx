import React, { useEffect, useRef, useState } from "react";

function Tiktok() {
  const tiktokRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const tiktokVideos = [
    {
      cite: "https://www.tiktok.com/@sarupsaisin/video/7066156458995404059",
      videoId: "7066156458995404059",
      content: (
        <section>
          <a target="_blank" title="@sarupsaisin" href="https://www.tiktok.com/@sarupsaisin?refer=embed">@sarupsaisin</a>
          <a title="tiktokuni" target="_blank" href="https://www.tiktok.com/tag/tiktokuni?refer=embed">#TikTokUni</a> เอกญี่ปุ่น มธ
          <a title="dek65" target="_blank" href="https://www.tiktok.com/tag/dek65?refer=embed">#dek65</a>
          <a title="dek66" target="_blank" href="https://www.tiktok.com/tag/dek66?refer=embed">#dek66</a>
          <a title="ธรรมศาสตร์" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C?refer=embed">#ธรรมศาสตร์</a>
          <a title="เอกญี่ปุ่น" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%AD%E0%B8%81%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99?refer=embed">#เอกญี่ปุ่น</a>
          <a title="studygram" target="_blank" href="https://www.tiktok.com/tag/studygram?refer=embed">#studygram</a>
        </section>
      ),
    },
    {
      cite: "https://www.tiktok.com/@sarupsaisin/video/7244854933269269766",
      videoId: "7244854933269269766",
      content: (
        <section>
          <a target="_blank" title="@sarupsaisin" href="https://www.tiktok.com/@sarupsaisin?refer=embed">@sarupsaisin</a>
          น้องๆถามเข้ามาเยอะเลยค่ะ ขออนุแชร์ประสบการณ์นะคะ
          <a title="ล่ามญี่ปุ่น" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%A1%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99?refer=embed">#ล่ามญี่ปุ่น</a>
        </section>
      ),
    },
    {
      cite: "https://www.tiktok.com/@sarupsaisin/video/7062346199281585435",
      videoId: "7062346199281585435",
      content: (
        <section>
          <a target="_blank" title="@sarupsaisin" href="https://www.tiktok.com/@sarupsaisin?refer=embed">@sarupsaisin</a>
          วิชาล่ามเอกญี่ปุ่น ม.ธรรมศาสตร์✨
          <a title="tiktokuni" target="_blank" href="https://www.tiktok.com/tag/tiktokuni?refer=embed">#TiktokUni</a>
        </section>
      ),
    },
  ];

  useEffect(() => {
    // Check if device is mobile on initial render
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };

    // Check initially
    checkIfMobile();

    // Add resize listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const loadTikTokEmbed = () => {
      // Remove existing script if any
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (script) {
          document.body.removeChild(script);
        }
      };
    };

    loadTikTokEmbed();
  }, [isMobile]); // Reload when isMobile changes

  return (
    <div className="w-full max-w-7xl mx-auto px-4" ref={tiktokRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiktokVideos.slice(0, isMobile ? 1 : tiktokVideos.length).map((video, index) => (
          <div key={index} className="w-full relative z-0">
            <blockquote
              className="tiktok-embed"
              cite={video.cite}
              data-video-id={video.videoId}
              style={{
                maxWidth: "100%",
                minWidth: "auto",
              }}
            >
              {video.content}
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tiktok;