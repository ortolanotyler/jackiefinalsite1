const YouTubeVideo = ({ videoId, start }) => {
    const videoUrl = `https://www.youtube.com/embed/${videoId}?start=${start}`;
    
    return (
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    );
  };
  