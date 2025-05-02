import person1 from './assets/person1.png';
import person2 from './assets/person2.png';
import person3 from './assets/person3.png';
import person4 from './assets/person4.png';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'John Doe',
    image: person1,
    rating: [1, 1, 1, 1, 1],
    says: `The atmosphere at Little Lemon is simply delightful! The moment you step in, you're greeted with a warm ambiance and friendly staff. The lemon-infused dishes are unique and truly unforgettable!`,
  },
  {
    fullName: 'Michael David',
    image: person2,
    rating: [1, 1, 1, 1, 0.5],
    says: `Little Lemon has become my go-to spot for lunch! Their fresh ingredients and vibrant flavors never disappoint. I highly recommend the lemon herb chicken – it's a game-changer.`,
  },
  {
    fullName: 'Maria Jackson',
    image: person3,
    rating: [1, 1, 1, 0.5, 0],
    says: `I had my birthday dinner at Little Lemon, and it was fantastic! The service was impeccable, and the desserts were the perfect sweet ending to a wonderful evening. I can't wait to come back!`,
  },
  {
    fullName: 'Victor Johnson',
    image: person4,
    rating: [1, 1, 1, 0.5,0],
    says: `If you're looking for a restaurant with exceptional food, look no further than Little Lemon. Each dish is crafted with care, and the lemon twist adds a refreshing touch that sets it apart!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
