import React from "react";

const VideoTextMobile = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        src="/images/rog_flow.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 object-cover w-full h-full"></video>
      <h2 className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center uppercase text-white font-extrabold bg-black bg-opacity-100 mix-blend-multiply text-[30vw] sm:text-[14vw] md:text-[12vw] leading-[0.85em] text-center">
        ROG
        <br />
        <span className="text-[30vw] sm:text-[16vw] md:text-[12vw] leading-[0.85em]">
          FLOW
        </span>
      </h2>
    </section>
  );
};

export default VideoTextMobile;
