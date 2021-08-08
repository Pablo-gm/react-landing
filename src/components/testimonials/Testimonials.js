import SwiperCore, {Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./testimonials.scss";

// Import Swiper styles
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

function Testimonials() {

  const data = [
    {
      id: "1",
      title: "Samantha Cooper",
      subtitle: "Scrum Master",
      desc: "I’ve never come across a platform that has made it so easy to communicate with everyone. Meet is full of beautiful surprises, my team love to share ideas and it's actually exited to go from one meeting to another.",
      img: "./assets/testimonial1.png",
    },
    {
      id: "2",
      title: "Samantha Cooper",
      subtitle: "Scrum Master",
      desc: "I’ve never come across a platform that has made it so easy to communicate with everyone. Meet is full of beautiful surprises, my team love to share ideas and it's actually exited to go from one meeting to another.",
      img: "./assets/testimonial1.png",
    },
    {
      id: "3",
      title: "Samantha Cooper",
      subtitle: "Scrum Master",
      desc: "I’ve never come across a platform that has made it so easy to communicate with everyone. Meet is full of beautiful surprises, my team love to share ideas and it's actually exited to go from one meeting to another.",
      img: "./assets/testimonial1.png",
    },
  ];

  

  const slides = [];
  data.forEach((item, index) => {
    slides.push(
      <SwiperSlide key={`slide-${index}`} tag="li">
        <div className="testimonials__wrapper">
          <div className="testimonials__text">
            <p>{item.desc}</p>
            <div className="testimonials__title">
              {item.title}
            </div>
            <div className="testimonials__subtitle">
              {item.subtitle}
            </div>
          </div>
          <img src={item.img}
          alt={`Slide ${index}`}
        />
        </div>

      </SwiperSlide>
    )
  });

  return (    
    <div className="testimonials" id="testimonials">
      <div className="testimonials__bg">
        <div className="container">
          <Swiper tag="section" wrapperTag="ul"
            navigation
            pagination
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            onInit={(swiper) => console.log('Swiper initialized')}
            id="main-swiper"
          >
            {slides}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
