import chef1 from './assets/chef1.jpg';
import chef2 from './assets/chef2.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>New York</h2>
        <p>
        At Little Lemon, we pride ourselves on offering an exceptional dining experience that combines vibrant flavors with a welcoming atmosphere. 
        Our menu features a delightful array of dishes that highlight fresh ingredients and innovative lemon-infused recipes, designed to tantalize your taste buds. We are committed to providing our guests with the highest quality of service, ensuring that each visit is memorable. 
        Our team is dedicated to creating an inviting environment, where you can relax and enjoy a meal with friends or family. 
        </p>
        <p>
        At the heart of Little Lemon is a philosophy that emphasizes sustainability and community. 
        We source our ingredients locally whenever possible, supporting local farmers and promoting a farm-to-table dining approach. This commitment not only enhances the freshness of our dishes but also strengthens our connection to the vibrant New York community. 
        </p>
        <p>
        Join us at Little Lemon to experience a culinary journey that celebrates the bright flavors of our signature lemon dishes. 
        </p>
        <p>
        Whether you're here for a casual lunch or a special celebration, we look forward to welcoming you!
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chef1} alt="Chef Jack" />
        <img src={chef2} alt="Chef Max" />
      </div>
    </section>
  );
};

export default OurStory;
