import React from "react";
import '../globals.css'
import Link from "next/link";
import Image from "next/image";
 const page = () => {
  return (

    <div className="mainDiv">
      <div className="subDiv" >
        <Image
          src="/images/m1.gif"
          alt="Gif"
          width={250}
          height={200}
          style={{ borderRadius: 5 }}
        />
        <div>
          <h1>Please Think again! 🙄</h1>
          <p>-Antha urgent em kaadhu anuko..🤗</p>
          <div className="buttonDiv" >
            <Link href="/LoveYouToo">
              <button className="button">Yes</button>
            </Link>
            <Link href="/main2">
              <button>No</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};
export default page;
