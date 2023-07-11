import AboutImage from "../../assets/about.jpeg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hi, my name is Thabo Radebe from Cape Town, South Africa. With over
            15 years of experience in networking,I have spent the past two years
            passionately pursuing my coding journey.
          </p>
          <p>
            I have already completed seven projects and now I am excited to
            transition into a career as a full-stack web developer, specializing
            in React.js and Angular. I hold a Bachelor's degree in Computer
            Science, and I am eager to utilize my skills and knowledge in
            frontend and backend development, JavaScript, Node.js, and database
            development. I am also interested in data science and data analysis.
            In addition to my technical expertise, I possess competencies such
            as customer focus, attention to detail, continuous improvement,
            conflict management, and multi-function team collaboration.
          </p>
          <p>
            Please take a look at my resume below to learn more about my
            experience and qualifications. I am enthusiastic about the
            opportunity to contribute my skills as a web developer and make a
            positive impact in the industry.
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
