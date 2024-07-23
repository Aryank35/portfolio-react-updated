import React from "react";

const skillCategories = [
  {
    title: "FrontEnd",
    skills: [
      { name: "React js", imgSrc: "./skills/react.svg" },
      { name: "HTML", imgSrc: "./skills/html.png" },
      { name: "CSS", imgSrc: "./skills/css.png" },
      { name: "TailwindCss", imgSrc: "./skills/tailwindcss.png" },
      { name: "JavaScript", imgSrc: "./skills/javascript.png" },
      { name: "Bootstrap", imgSrc: "./skills/Bootstrap.png" }
    ]
  },
  {
    title: "DataBase",
    skills: [
      { name: "MySQL", imgSrc: "./skills/mysql.svg" },
      { name: "MongoDB", imgSrc: "./skills/mongodb.svg" }
    ]
  },
  {
    title: "Languages",
    skills: [
      { name: "C", imgSrc: "./skills/c.png" },
      { name: "Java", imgSrc: "./skills/java.svg" },
      { name: "Python", imgSrc: "./skills/python.svg" },
      { name: "JavaScript", imgSrc: "./skills/javascript.png" }
    ]
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", imgSrc: "./skills/git.svg" },
      { name: "Github", imgSrc: "./skills/github.png" },
      { name: "VsCode", imgSrc: "./skills/vscode.png" }
    ]
  },
  {
    title: "Others",
    skills: [
      { name: "Typing speed", imgSrc: "./skills/typing.png" },
      { name: "Google sheets", imgSrc: "./skills/sheet.png" },
      { name: "Excell", imgSrc: "./skills/excell.png" }
    ]
  }
];

const Skills = () => {
  return (
    <div id="skills" className="Skills bg-[#1c1c27] h-full w-full pb-11 pt-5">
      <h1 className="font-bold text-3xl md:text-5xl p-5 text-center text-white">
        Skills
      </h1>
      <div className="flex flex-wrap">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="category md:w-[45%] my-8 pb-8 md:h-fit h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2"
          >
            <h1 className="md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6">
              {category.title}
            </h1>
            <div className="skills flex flex-wrap gap-3 items-center justify-center space-x-3 h-full w-full pb-6">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl"
                >
                  <img className="w-10" src={skill.imgSrc} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;