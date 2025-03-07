'use client';

import { usePathname } from "next/navigation";

export function VideoBackground() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <video autoPlay muted loop playsInline className=" -z-10 absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-10">
      <source src="https://ik.imagekit.io/vpssmrltl/welcome_banner%20(online-video-cutter.com)%20(3).mp4" type="video/mp4" />
    </video>
  );
};