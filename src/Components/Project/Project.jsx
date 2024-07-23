import React from "react";

const ProjectBox = ({ title, image, link, description, technologies }) => {
  return (
    <div className="project-box rounded-xl py-2 h-fit md:h-[650px] md:w-[30%] flex flex-col mx-auto border-2">
      <h1 className="text-center font-bold text-2xl text-white py-3">
        {title}
      </h1>
      <div className="image">
        <img
          src={image}
          alt={`image-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="w-[80%] mx-auto py-3 rounded-lg"
        />
      </div>
      <a href={link} target="_blank" className="mx-auto">
        <button className="px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600 ">
          project link
        </button>
      </a>
      <p className="text-gray-400 font-semibold py-2 px-5 text-center">
        <span className="font-bold text-xl block text-left text-white">
          Desc:
        </span>
        {description}
      </p>
      <p className="text-gray-400 font-semibold py-2 px-5">
        <span className="font-bold text-xl block text-left text-white">
          Technology used:
        </span>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      title: "Utsah (GITA Annual fest 2024)",
      image: "./utsah.jpg",
      link: "https://gitafest.fun/",
      description:
        "A web app, utilizing React.js and TailwindCSS, streamlined festival details and participant registration through Google Forms, drawing 1692 unique users and enhancing the registration experience.",
      technologies: [
        "React js",
        "Javascript",
        "Tailwind css",
        "Google form",
        "Google sheets",
      ],
    },
    {
      title: "Mohapatra-Estate",
      image: "./estate.jpeg",
      link: "https://mohapatra-estate.vercel.app/",
      description:
        "The platform showcases property listings, search features, and contact forms. Upcoming enhancements include dynamic functionalities like property filtering and sorting for improved user interaction.",
      technologies: ["React js", "Javascript", "Tailwind css"],
    },
    {
      title: "Picnic-Management-System",
      image: "./lyfe.jpg",
      link: "https://hotel-management-seven-topaz.vercel.app/",
      description:
        "Worked on a hotel management project focusing on enhancing the user interface and functionality of the hotel booking system. Skills utilized include HTML5, CSS3, JavaScript, jQuery, and Bootstrap.",
      technologies: ["HTML", "CSS3", "Bootstrap", "Jquery", "Javascript"],
    },
  ];

  return (
    <div id="project" className="bg-[#1b1c2b] h-full w-full py-6">
      <h1 className="font-bold text-3xl md:text-5xl text-white text-center ">
        Projects
      </h1>
      <p className="text-center py-4 text-xl font-semibold text-white">
        "Discover My Web Development Showcase
      </p>
      <p className="text-center pb-5 text-xl font-semibold text-gray-400">
        Explore my web development projects crafted with HTML, Tailwind CSS,
        CSS, JavaScript, and React.js.
      </p>

      <div className="project-box p-4 h-full w-full flex flex-col space-y-11 md:space-y-0 md:flex-row mx-auto pb-11">
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
