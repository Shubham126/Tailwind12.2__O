import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      Hi there 
      <VideoCard title={"How to learn coding in 30 days | 30 day plan | code with me"}
        image = {"photo.jpg"}
        thumbImage = {"thumb.jpg"}
        auhtor = {"Subham kumar"}
        views = {"100k"}
        timestamp = {"2 days ago"}
      ></VideoCard>
    </div>
  );
}
