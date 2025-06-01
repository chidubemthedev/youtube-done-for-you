import Script from "next/script";
import { Badge } from "../ui/badge";

const Contact = () => {
  return (
    <section id="contact">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive" // or "beforeInteractive" or "lazyOnload"
      />
      <div className="container mx-auto px-4 md:px-[100px] grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-12 md:mb-16">
          <Badge className="mb-4 mt-12">Contact Us!</Badge>
          <h2 className="section-title text-left">Prefer to Call?</h2>
          <p className="section-subtitle text-left">
            Pick the time that works best for you and we&apos;ll discuss exactly
            how we can help you!
          </p>
        </div>
        <div
          className="calendly-inline-widget border-2 border-black rounded-lg overflow-hidden"
          data-url="https://calendly.com/chukwudubem7/30min?hide_gdpr_banner=1&primary_color=d8261e"
          style={{ minWidth: "320px", height: "600px" }}
        ></div>
      </div>
    </section>
  );
};

export default Contact;
