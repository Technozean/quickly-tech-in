import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    designation: "CEO @ TechVantage Solutions",
    content:
      "Quickly Design transformed our online presence completely. Their SEO expertise helped us rank for competitive keywords, and our organic traffic has increased by 70% in just 4 months!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Priya Malhotra",
    designation: "Founder @ StyleHub India",
    content:
      "Their social media management services have been game-changing for our fashion brand. Our engagement has doubled, and we've seen a 45% increase in conversions from Instagram alone.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Vikram Patel",
    designation: "Director @ Orion Edutech",
    content:
      "The website they developed for our educational institution is outstanding. The user experience is intuitive, mobile-responsive, and has helped us increase student applications by 50% year-over-year.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Clients Say"
          paragraph="Hear from businesses across India who have partnered with us to achieve remarkable growth and digital success."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
