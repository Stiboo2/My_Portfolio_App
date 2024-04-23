import { FaJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaLinux } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaJs />,
    title: "Programming Languages",
    desc: "Proficient in Java, C++, and Python programming languages. Leveraging these languages to develop efficient and robust solutions.",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Full Stack Development",
    desc: "Creating visually appealing and responsive web applications using React.js and Angular HTML5, CSS3. Ensuring the security and scalability of your website/app using Docker, Kubernetes, and API integration.",
  },
  {
    id: 3,
    icon: <AiOutlineLineChart />,
    title: "Data Science",
    desc: "Leveraging data science techniques to extract valuable insights and make informed decisions for your business.",
  },
  {
    id: 4,
    icon: <FaDatabase />,
    title: "Database Development",
    desc: "Efficient and reliable database solutions tailored to optimize your application's data management.",
  },
  {
    id: 5,
    icon: <FaLinux />,
    title: "Linux Operating System",
    desc: "Linux is an open-source OS known for stability, security, and flexibility. It's favored by developers and admins alike, powering a variety of devices. With a robust command-line interface and package management, Linux offers unparalleled customization and control.",
  },
  {
    id: 6,
    icon: <FaCloud />,
    title: "Cloud Services",
    desc: "Proficient in cloud services for scalable and efficient application deployment and management. Utilize cloud platforms like AWS, Azure, and Google Cloud to design and implement cloud-native solutions, ensuring high availability, scalability, and cost-effectiveness. Skilled in infrastructure as code (IaC) tools such as Ansible and Terraform for automating deployment processes and maintaining consistent infrastructure configurations across environments.",
  },
];

export default data;
