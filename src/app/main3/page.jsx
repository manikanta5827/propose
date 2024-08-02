"use client";
import React, { useEffect } from "react";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const cat = () => {
    const button = document.getElementById("catch");
    const container = document.getElementsByClassName("mainDiv")[0]; // Ensure we access the first element

    if (container && button) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      const maxX = containerRect.width - buttonRect.width;
      const maxY = containerRect.height - buttonRect.height;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  };

  useEffect(() => {
    const button = document.getElementById("catch");
    if (button) {
      button.style.position = "absolute";
    }
  }, []);

  return (
    <div
      className="mainDiv"
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      <div className="subDiv">
        <Image
          src="/images/m1.gif"
          alt="Gif"
          width={250}
          height={200}
          style={{ borderRadius: 5 }}
        />
        <div>
          <h1>Level choopisthunnav enti.. oppuko 🙄</h1>
          <div className="buttonDiv">
            <Link href="/LoveYouToo">
              <button className="button" style={{ marginRight: 200 }}>
                Yes
              </button>
            </Link>
            <button id="catch" onClick={cat} style={{ marginLeft: 100 }}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
