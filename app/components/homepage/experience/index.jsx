// @flow strict

'use client';

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsPersonWorkspace, BsChevronDown, BsChevronUp } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    console.log('Expanded card state changed to:', expandedCard);
  }, [expandedCard]);

  const toggleCard = (id) => {
    console.log('Toggling card:', id, 'Current expanded:', expandedCard);
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="flex flex-col gap-8 lg:gap-12">
          {experiences.map((exp, index) => {
            const isExpanded = expandedCard === exp.id;
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Animation on the left for even cards, right for odd */}
                <div className={`lg:col-span-4 flex justify-center items-center order-1 ${
                  isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-9'
                }`}>
                  <div className="w-full max-w-md transform transition-all duration-500 hover:scale-105">
                    <AnimationLottie animationPath={experience} />
                  </div>
                </div>

                {/* Card on the right for even cards, left for odd */}
                <div className={`lg:col-span-8 order-2 ${
                  isEven ? 'lg:order-2' : 'lg:order-1 lg:col-start-1'
                }`}>
                  <GlowCard identifier={`experience-${exp.id}`}>
                    <div className={`relative z-10 transition-all duration-300 ${isExpanded ? 'ring-2 ring-violet-500' : ''}`}>
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80 -z-10"
                      />

                      {/* Header - Always Visible */}
                      <div
                        className="p-4 cursor-pointer transition-all duration-300 hover:bg-[#1a1443]/30 rounded-t-xl relative z-20"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(exp.id);
                        }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <p className="text-xs sm:text-sm text-[#16f2b3] font-medium">
                            {exp.duration}
                          </p>
                          <div className="text-violet-500 transition-transform duration-300">
                            {isExpanded ? <BsChevronUp size={24} /> : <BsChevronDown size={24} />}
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="text-violet-500 transition-all duration-300 hover:scale-110 flex-shrink-0">
                            <BsPersonWorkspace size={40} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base sm:text-xl mb-2 font-bold text-white">
                              {exp.title}
                            </h3>
                            <p className="text-sm sm:text-base text-[#16f2b3] font-medium">
                              {exp.company}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-400 mt-2 italic">
                              Click to {isExpanded ? 'collapse' : 'expand'} details
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Content with Smooth Animation */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-4 pb-4 pt-2 border-t border-[#1b2c68a0]/50">
                          {/* Description Section */}
                          {exp.description && (
                            <div className="mb-4 transform transition-all duration-500 delay-100">
                              <p className="text-sm sm:text-base text-gray-300 leading-relaxed italic border-l-4 border-violet-500 pl-4 py-2 bg-[#1a1443]/20 rounded-r">
                                {exp.description}
                              </p>
                            </div>
                          )}

                          {/* Responsibilities Section */}
                          {exp.responsibilities && exp.responsibilities.length > 0 && (
                            <div className="transform transition-all duration-500 delay-200">
                              <h4 className="text-sm sm:text-base font-bold text-[#16f2b3] mb-4 uppercase tracking-wide flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#16f2b3] rounded-full animate-pulse"></span>
                                Key Achievements & Responsibilities
                              </h4>
                              <ul className="space-y-3">
                                {exp.responsibilities.map((responsibility, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 text-sm sm:text-base text-gray-300 group transform transition-all duration-300 hover:translate-x-2"
                                    style={{
                                      animationDelay: `${idx * 100}ms`,
                                      animation: isExpanded ? 'slideIn 0.5s ease-out forwards' : 'none'
                                    }}
                                  >
                                    <span className="text-violet-500 mt-1 flex-shrink-0 text-lg group-hover:scale-125 transition-transform duration-200">▹</span>
                                    <span className="leading-relaxed">{responsibility}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;