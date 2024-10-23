import React from 'react';

const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  console.log('reqExp',regExp)
  const match = url.match(regExp);
  console.log('match',match)
  console.log('match 2',match[2])
  return (match && match[2].length === 11) ? match[2] : null;
};

const YouTubeEmbed = ({ url }) => {
  const videoId = getYouTubeVideoId(url);
  console.log('youtube',videoId)
  
  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }

  return (
    <div className="aspect-w-16 h-[450px]">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;