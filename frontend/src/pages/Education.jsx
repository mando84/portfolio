import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";

import "react-vertical-timeline-component/style.min.css";

function Education() {
  return (
    <div>
      <VerticalTimeline lineColor={"green"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2003 - 2007"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            McAllen Memorial High School
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2011"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Texas at San Antonio
          </h3>
          <h4>Bachelor's Degree</h4>
          <p className="vertical-timeline-element-subtitle">
            Political Science
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            South Texas College
          </h3>
          <h4>Bachelor's Degree</h4>
          <p className="vertical-timeline-element-subtitle">
            Computer Information Technology
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default Education;
