import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sri Venkateshwara Matric Hig sec School
          </h3>
          <p>SSLC - 82%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sri Venkateshwara Matric Hig sec School
          </h3>

          <h4 className="vertical-timeline-element-subtitle">HSC - 84%</h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Rajalakshmi Institute of Technology - Chennai
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tamil Nadu, India
          </h4>
          <p>Bachelor Of Engineering - EEE</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Tata Consultancy and Services.
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> Pune, India</h4>
          <p>
            1.5+ years experienced React Developer with hands-on experience in
            identifying web-based user interactions along with designing &
            implementing highly-responsive user interface components by
            deploying React concepts. Proficient in translating designs &
            wireframes into high- quality code, and writing application
            interface code via JavaScript and ReactJS workflows.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
