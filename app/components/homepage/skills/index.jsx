// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const skillImage = skillsImage(skill);
            if (!skillImage) return null;

            return (
              <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}>
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={skillImage.src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>

      {/* Static Grouped Skills Container */}
      <div className="w-full my-12 px-2 sm:px-4 lg:px-6">
        <div className="max-w-[1400px] mx-auto space-y-5">

          {/* Frontend & Mobile & Backend Combined */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
            {/* Frontend */}
            <div className="group">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-4 w-1 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full"></div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[#16f2b3] uppercase tracking-wide">
                  Frontend
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'Javascript', 'Typescript', 'Angular', 'React', 'Svelte', 'Tailwind', 'MaterialUI'].map((skill, idx) => {
                  const skillImg = skillsImage(skill);
                  if (!skillImg) return null;
                  return (
                    <div key={idx} className="group/item">
                      <div className="flex items-center gap-2 rounded-md border border-[#1f223c] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] px-3 py-2 transition-all duration-300 hover:border-violet-500 hover:shadow-md hover:shadow-violet-500/20 hover:scale-105">
                        <div className="h-6 w-6 flex-shrink-0">
                          <Image
                            src={skillImg.src}
                            alt={skill}
                            width={24}
                            height={24}
                            className="h-full w-auto"
                          />
                        </div>
                        <p className="text-white text-base font-medium whitespace-nowrap">{skill}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Backend */}
            <div className="group">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-4 w-1 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full"></div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[#16f2b3] uppercase tracking-wide">
                  Backend
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node JS', 'Django', 'Java', 'Python', 'C'].map((skill, idx) => {
                  const skillImg = skillsImage(skill);
                  if (!skillImg) return null;
                  return (
                      <div key={idx} className="group/item">
                        <div className="flex items-center gap-2 rounded-md border border-[#1f223c] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] px-3 py-2 transition-all duration-300 hover:border-pink-500 hover:shadow-md hover:shadow-pink-500/20 hover:scale-105">
                          <div className="h-6 w-6 flex-shrink-0">
                            <Image
                                src={skillImg.src}
                                alt={skill}
                                width={24}
                                height={24}
                                className="h-full w-auto"
                            />
                          </div>
                          <p className="text-white text-base font-medium whitespace-nowrap">{skill}</p>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>
            {/* Mobile */}
            <div className="group">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-4 w-1 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[#16f2b3] uppercase tracking-wide">
                  Mobile
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Dart'].map((skill, idx) => {
                  const skillImg = skillsImage(skill);
                  if (!skillImg) return null;
                  return (
                    <div key={idx} className="group/item">
                      <div className="flex items-center gap-2 rounded-md border border-[#1f223c] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] px-3 py-2 transition-all duration-300 hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/20 hover:scale-105">
                        <div className="h-6 w-6 flex-shrink-0">
                          <Image
                            src={skillImg.src}
                            alt={skill}
                            width={24}
                            height={24}
                            className="h-full w-auto"
                          />
                        </div>
                        <p className="text-white text-base font-medium whitespace-nowrap">{skill}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>


          </div>

          {/* Database & Cloud + DevOps & Tools Combined */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            {/* Database & Cloud */}
            <div className="group">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-4 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[#16f2b3] uppercase tracking-wide">
                  Database & Cloud
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'AWS'].map((skill, idx) => {
                  const skillImg = skillsImage(skill);
                  if (!skillImg) return null;
                  return (
                    <div key={idx} className="group/item">
                      <div className="flex items-center gap-2 rounded-md border border-[#1f223c] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] px-3 py-2 transition-all duration-300 hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-500/20 hover:scale-105">
                        <div className="h-6 w-6 flex-shrink-0">
                          <Image
                            src={skillImg.src}
                            alt={skill}
                            width={24}
                            height={24}
                            className="h-full w-auto"
                          />
                        </div>
                        <p className="text-white text-base font-medium whitespace-nowrap">{skill}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="group">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-4 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[#16f2b3] uppercase tracking-wide">
                  DevOps & Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Git', 'Nginx', 'Deno'].map((skill, idx) => {
                  const skillImg = skillsImage(skill);
                  if (!skillImg) return null;
                  return (
                    <div key={idx} className="group/item">
                      <div className="flex items-center gap-2 rounded-md border border-[#1f223c] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] px-3 py-2 transition-all duration-300 hover:border-green-500 hover:shadow-md hover:shadow-green-500/20 hover:scale-105">
                        <div className="h-6 w-6 flex-shrink-0">
                          <Image
                            src={skillImg.src}
                            alt={skill}
                            width={24}
                            height={24}
                            className="h-full w-auto"
                          />
                        </div>
                        <p className="text-white text-base font-medium whitespace-nowrap">{skill}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;