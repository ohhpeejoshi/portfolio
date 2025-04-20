import React from "react";
import Projectcard from "./Projectcard";

const Projects = () => {
  return (
    <section
      className="mt-[100px] rounded-xl md:py-10 py-7 md:w-5/6 w-full mx-auto"
      id="projects"
    >
      <div className="md:flex md:flex-col flex-row items-center text-center">
        <span className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Projects
        </span>
        <div className="w-5/6 items-center text-center mx-auto my-5">
          <p className="text-[#ADB7BE] text-md">
            &quot;From idea to execution, my projects combine creativity, problem-solving, and technical skill to deliver impactful, real-world solutions—driven by adaptability in fast-evolving environments.&quot;
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-10 gap-4 gap-y-8">
          <Projectcard
              title="CodeCollab"
              smallDesc="A Real-Time Collaborative Code Editor"
              desc="CodeCollab is a real-time collaborative coding platform where users can write, edit, and compile code together seamlessly. Whether you're working on a project, teaching, or pair programming, you can create or join coding sessions using a unique Room ID. With live synchronization and a built-in compiler, CodeCollab makes collaborative coding simple and efficient."
              image="/images/codeEditor.png"
              link="https://github.com/ohhpeejoshi/real-time-code-editor"
            />
            <Projectcard
              title="LNMIIT Grievance Portal"
              smallDesc="Centralized Issue Reporting Platform"
              desc="The LNMIIT Grievance Portal is a centralized web platform that allows students and faculty to securely and efficiently raise concerns related to academic, administrative, or campus issues. It streamlines the submission process, ensures transparency, and enables timely responses from concerned authorities. With features like user authentication, status tracking, and categorized issue reporting, the portal aims to enhance communication and foster a more supportive campus environment."
              image="/images/grievance.jpg"
              link="https://github.com/ohhpeejoshi/grievance-management-system"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
