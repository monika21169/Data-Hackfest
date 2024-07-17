"use client";
import { useState, useEffect } from "react";
import { readPdf } from "lib/parse-resume-from-pdf/read-pdf";
import type { TextItems } from "lib/parse-resume-from-pdf/types";
import { groupTextItemsIntoLines } from "lib/parse-resume-from-pdf/group-text-items-into-lines";
import { groupLinesIntoSections } from "lib/parse-resume-from-pdf/group-lines-into-sections";
import { extractResumeFromSections } from "lib/parse-resume-from-pdf/extract-resume-from-sections";
import { ResumeDropzone } from "components/ResumeDropzone";
import { cx } from "lib/cx";
import { Heading, Link, Paragraph } from "components/documentation";
import { ResumeTable } from "resume-parser/ResumeTable";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import SalaryNegotiationTemplate from "resume-parser/SalaryNegotiationTemplate";


const defaultFileUrl = "resume-example/laverne-resume.pdf"; // Change to your default PDF URL

export default function ResumeParser() {
  const [fileUrl, setFileUrl] = useState(defaultFileUrl);
  const [textItems, setTextItems] = useState<TextItems>([]);
  const [userSkills, setUserSkills] = useState<string[]>([]); 
  
  const handleUserSkills = (skills: string[]) => {
    setUserSkills(skills);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const textItems = await readPdf(fileUrl);
        setTextItems(textItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fileUrl]);
 
  const lines = groupTextItemsIntoLines(textItems || []);
  const sections = groupLinesIntoSections(lines);
  const resume = extractResumeFromSections(sections);
  
  const showTemplate = true; // Set this to true to always show the template

  return (
    <main className="h-full w-full overflow-hidden">
      <div className="grid md:grid-cols-6">
        <div className="flex justify-center px-2 md:col-span-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end">
          <section className="mt-5 grow px-4 md:max-w-[600px] md:px-0">
            <div className="aspect-h-[9.5] aspect-w-7">
              <iframe src={`${fileUrl}#navpanes=0`} className="h-full w-full" />
            </div>
          </section>
          <FlexboxSpacer maxWidth={45} className="hidden md:block" />
        </div>
        <div className="flex px-6 text-gray-900 md:col-span-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:overflow-y-scroll">
          <FlexboxSpacer maxWidth={45} className="hidden md:block" />
          <section className="max-w-[600px] grow">
            <Heading className="text-primary !mt-4">
              Get the information from your own resume
            </Heading>
            <Paragraph>
              You can {" "}
              <span className="font-semibold">add your resume below</span> to
              get your own customised email template that you can use to negotiate your salary and ask for hike in your salary
            </Paragraph>
            <div className="mt-3">
              <ResumeDropzone
                onFileUrlChange={(fileUrl) =>
                  setFileUrl(fileUrl || defaultFileUrl)
                }
                playgroundView={true}
              />
            </div>
            <Heading level={2} className="!mt-[1.2em]">
              Resume Parsing Results
            </Heading>
            <ResumeTable resume={resume} />
            <Heading level={2} className="!mt-4">
              Negotiate Your Salary
            </Heading>
              {showTemplate && (
              <div className="flex justify-center items-center">
                <SalaryNegotiationTemplate resume={resume} />
              </div>
            )}
          </section>
          
        </div>
      </div>
    </main>
  );
}
