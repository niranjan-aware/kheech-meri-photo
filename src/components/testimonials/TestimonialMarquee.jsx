import Marquee from 'react-fast-marquee';
import TestimonialCard from './TestimonialCard';

const TestimonialMarquee = ({ testimonials, speed = 50, direction = 'left' }) => {
  return (
    <Marquee
      gradient={false}
      speed={speed}
      direction={direction}
      pauseOnHover={true}
      className="overflow-hidden"
    >
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="mx-3 w-[400px]">
          <TestimonialCard testimonial={testimonial} />
        </div>
      ))}
    </Marquee>
  );
};

export default TestimonialMarquee;