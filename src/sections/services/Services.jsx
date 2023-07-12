import Card from "../../components/Card";
import data from "./data";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h2>I excel in the following skills</h2>
      <p>
        I have consistently demonstrated my expertise and proficiency in these
        areas, consistently delivering high-quality results. I am confident in
        my ability to leverage these skills effectively to contribute to your
        team and achieve success.
      </p>
      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
