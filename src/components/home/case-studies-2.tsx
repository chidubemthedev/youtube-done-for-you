import { Badge } from "../ui/badge";
import Achievement1 from "@/assets/images/achievement-1.avif";
import Achievement2 from "@/assets/images/achievement-2.avif";
import Achievement3 from "@/assets/images/achievement-3.avif";
import Achievement4 from "@/assets/images/achievement-4.avif";
import Achievement5 from "@/assets/images/achievement-5.avif";
import Achievement6 from "@/assets/images/achievement-6.avif";
import Achievement7 from "@/assets/images/achievement-7.avif";
import Achievement8 from "@/assets/images/achievement-8.avif";
import Achievement9 from "@/assets/images/achievement-9.avif";
import Achievement10 from "@/assets/images/achievement-10.avif";
import Achievement11 from "@/assets/images/achievement-11.avif";
import Image from "next/image";

const CaseStudy2 = () => {
  const achievements = [
    Achievement1,
    Achievement2,
    Achievement3,
    Achievement4,
    Achievement5,
    Achievement6,
    Achievement7,
    Achievement8,
    Achievement9,
    Achievement11,
    Achievement10,
  ];
  return (
    <section className="text-white bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4">Case Studies</Badge>
          <h2 className="section-title">
            Results we&apos;ve gotten for our clients
          </h2>
          <p className="section-subtitle">
            Read about the success we&apos;ve been able to generate for our
            clients!
          </p>
        </div>

        {/* create the map here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Image
              key={index}
              src={achievement}
              alt={`Achievement ${index + 1}`}
              className="w-full rounded-2xl border-2 border-white"
              width={400}
              height={300}
            />
          ))}
        </div>

        <h1 className="mt-8 text-center font-bold text-2xl">
          We can keep going…
        </h1>
      </div>
    </section>
  );
};

export default CaseStudy2;
