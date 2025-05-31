import { Badge } from "../ui/badge";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-12 md:mb-16">
          <Badge className="mb-4 mt-12">Contact Us!</Badge>
          <h2 className="section-title text-left">Prefer to Call?</h2>
          <p className="section-subtitle text-left">
            Pick the time that works best for you and we&apos;ll discuss exactly
            how we can help you!
          </p>
        </div>
        <div className="bg-red-200"></div>
      </div>
    </section>
  );
};

export default Contact;
