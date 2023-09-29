'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from '@/context/theme_context';

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className='scroll-mt-28'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {
          experiencesData.map((expItem, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement 
                contentStyle={{
                  background: theme === 'light' ? "#FEFEFE" : "rgba(255, 255, 255, 0.1)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem"
                }}
                contentArrowStyle={{
                  borderRight: theme === 'light' ? "0.5rem solid #FEFEFE" : "0.5rem solid rgba(255, 255, 255, 0.45)"
                }}
                date={expItem.date}
                icon={expItem.icon}
                iconStyle={{
                  background: theme === 'light' ? "#FEFEFE" : 'rgba(41, 48, 61, 100)',
                  fontSize: "1.5rem"
                }}
              >
                <h3 className='font-semibold capitalize'>{expItem.title}</h3>
                <p className='font-normal !mt-0'>{expItem.location}</p>
                <p className='!mt-1 !font-normal text-[#382F74] dark:text-white/60'>{expItem.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }

      </VerticalTimeline>
    </section>
  );
}
