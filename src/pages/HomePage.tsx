import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, TrendingUp } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedReview = ({ title, image, rating, link }) => (
  <div className="px-2">
    <Link to={link} className="block relative h-64 rounded overflow-hidden">
      <img alt={title} className="object-cover object-center w-full h-full block" src={image} />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white font-semibold text-lg mb-2">{title}</h2>
          <span className="text-yellow-400 flex items-center justify-center">
            <Star size={16} className="mr-1" />
            {rating}
          </span>
        </div>
      </div>
    </Link>
  </div>
);

const HomePage: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="animate-fadeIn">
      <section className="bg-hero-pattern bg-cover bg-center h-96 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">Welcome to Cinematic Critique</h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow">Your source for in-depth movie and TV series reviews</p>
          <Link to="/reviews" className="btn btn-primary text-lg">Explore Reviews</Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Reviews</h2>
          <Slider {...sliderSettings}>
            <FeaturedReview
              title="Inception"
              image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              rating="9.5/10"
              link="/review/inception"
            />
            <FeaturedReview
              title="Stranger Things"
              image="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              rating="9.0/10"
              link="/review/stranger-things"
            />
            <FeaturedReview
              title="The Shawshank Redemption"
              image="https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              rating="9.8/10"
              link="/review/shawshank-redemption"
            />
            <FeaturedReview
              title="Breaking Bad"
              image="https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              rating="9.7/10"
              link="/review/breaking-bad"
            />
          </Slider>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="card animate-slideIn">
                <img src={`https://source.unsplash.com/random/800x600?movie&sig=${i}`} alt="Movie poster" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Movie Title {i}</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center text-yellow-500">
                      <Star size={16} className="mr-1" />
                      4.{i}/5
                    </span>
                    <Link to={`/review/${i}`} className="text-primary-600 hover:text-primary-800 transition">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/reviews" className="btn btn-primary">View All Reviews</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Cinematic Critique?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Reviews</h3>
              <p>Our team of experienced critics provides in-depth analysis and unbiased opinions.</p>
            </div>
            <div className="text-center">
              <Clock size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Up-to-Date Content</h3>
              <p>Stay informed with our timely reviews of the latest movies and TV series.</p>
            </div>
            <div className="text-center">
              <TrendingUp size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trending Topics</h3>
              <p>Explore popular discussions and behind-the-scenes insights from the entertainment world.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;