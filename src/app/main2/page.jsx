import React from "react";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div className="mainDiv">
      <div className="subDiv">
        <Image
          src="/images/d.gif"
          alt="Gif"
          width={250}
          height={200}
          style={{ borderRadius: 5 }}
        />
        <div>
          <h1>Please okasari malli aalochichu 🥺</h1>
          <p>-Ann yaaayam seyaku Naaku</p>
          <div className="buttonDiv">
            <Link href="/LoveYouToo">
              <button className="button">Yes</button>
            </Link>
            <Link href="/main3">
              <button>No</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
