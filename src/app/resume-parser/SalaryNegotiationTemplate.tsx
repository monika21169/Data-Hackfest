import React from "react";
import { Resume } from "resume-parser/ResumeTable";

const SalaryNegotiationTemplate = ({ resume }: { resume: Resume }) => {
  // Extract relevant data from the resume
  const { profile, workExperiences } = resume;
  const projects = resume.projects.map((project) => project.project); // Extract project names
  const skillsDescriptions = resume.skills.descriptions;
  const template = `
    Dear sir/ma'am,

    I am writing to discuss the possibility of negotiating the salary for my position at your company. With a long years of experience in industry, 
    I believe my skills and expertise make me a strong fit for the role.
    During my career, I have successfully completed projects like ${projects.join(", ")}, where I have successful achieved the milestones. 
    This experience has equipped me with valuable skills in ${skillsDescriptions.join(", ")} , which I believe would greatly benefit the team.

    I am excited about the opportunity to join your team and contribute to Company's Mission and Goals. 
    However, I would like to discuss the possibility of a higher salary to reflect my qualifications and the market standards for this role.

    Please let me know when we can schedule a meeting to discuss this further.

    Thank you for your consideration.

    Sincerely,
    ${resume.profile.name}
  `;

  return (
    <div className="salary-negotiation-template"  style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word", fontFamily: "Poppins "}}>{template}</pre>
    </div>
  );
};

export default SalaryNegotiationTemplate;

