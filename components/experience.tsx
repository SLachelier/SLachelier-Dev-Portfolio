'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className='scroll-mt-28'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {
          experiencesData.map((expItem, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#FEFEFE",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem"
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #FEFEFE"
                }}
                date={expItem.date}
                icon={expItem.icon}
                iconStyle={{
                  background: "#FEFEFE",
                  fontSize: "1.5rem"
                }}
              >
                <h3 className='font-semibold capitalize'>{expItem.title}</h3>
                <p className='font-normal !mt-0'>{expItem.location}</p>
                <p className='!mt-1 !font-normal text-[#382F74]'>{expItem.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }

      </VerticalTimeline>
    </section>
  );
}
