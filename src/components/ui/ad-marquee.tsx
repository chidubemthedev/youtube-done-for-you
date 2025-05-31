import Link from "next/link";
import Marquee from "./marquee";

const AdsMarquee = () => {
  return (
    <Link href="/#call">
      <Marquee
        items={[
          { type: "text", content: "🔥 Skyrocket your views!" },
          { type: "text", content: "🚀 Click here to book a call" },
          { type: "text", content: "🔥 Boost your channel growth!" },
          {
            type: "text",
            content: "🚀 Join our community of successful creators!",
          },
          { type: "text", content: "🔥 Unlock your channel's potential!" },
          { type: "text", content: "🚀 Get expert support for your channel!" },
        ]}
        speed={50}
        direction="left"
        backgroundColor="bg-gray-700"
        textColor="text-white"
      />
    </Link>
  );
};

export default AdsMarquee;
