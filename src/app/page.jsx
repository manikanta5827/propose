import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="mainDiv">
      <div className="subDiv" >
        <Image
          src="/images/d.gif"
          alt="Gif"
          width={250}
          height={200}
          style={{ borderRadius: 5 }}
        />
        <div>
          <h1>Do You Love me ? 🫣  </h1>
          <p>Manikanta is All yours</p>
          <div className="buttonDiv" >
            <Link href="/LoveYouToo">
              <button className="button">Yes</button>
            </Link>
            <Link href="/main1">
              <button>No</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
