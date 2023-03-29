// components/VideoEmbed.tsx

import React from "react";

interface VideoEmbedProps {
  id: number;
  url: string;
  width?: string;
  height?: string;
}

const getEmbedUrl = (videoUrl: string): string | null => {
  const youtubeRegex =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?v%3D)([\w-]{11}).*/;
  const youtubeMatch = videoUrl.match(youtubeRegex);

  if (youtubeMatch && youtubeMatch[2].length === 11) {
    return `https://www.youtube.com/embed/${youtubeMatch[2]}`;
  }

  // Add support for other video platforms here

  return null;
};

export default function VideoEmbed({ data }: { data: VideoEmbedProps }) {
  const embedUrl = getEmbedUrl(data.url);

  if (!embedUrl) return <div>Invalid video URL</div>;

  return (
    <div className="video-embed relative pb-56.25 h-72 lg:h-[450px] overflow-hidden my-8">
      <iframe
        title="video"
        src={embedUrl || ""}
        width={data.width || "100%"}
        height={data.height || "100%"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
