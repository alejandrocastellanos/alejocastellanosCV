import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import ExperienceDetail from "./experienceDetail";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const Experience = () => {
    return (
        <div>
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.3,
                    },
                }}
            >
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        2024 - Grupo R5
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <ExperienceDetail
                            company="Engineering Manager"
                            yearsWorkedDetail="February 2020 - Current"
                            details="I developed a CRM system in Odoo to manage customer information and an ERP system for
                                the company’s financial management. Additionally, I created dashboards and reports using
                                Python, and continuously maintained and enhanced t
                                he codebase for various applications."
                            details3="I also implemented third-party integrations via APIs for telephony and chat services such as Twilio, Messagebird,
                                and Toky, as well as payment gateways including PayU, MercadoPago, and PSE."
                            details4="I led a development team that included Product Owners (POs) and QA engineers, overseeing the design
                                and implementation of high-traffic web application architectures, ensuring log visibility,
                                and managing CICD pipelines."
                            details5="I consistently improved the codebase by applying best development practices, including design patterns
                                and testing. Furthermore, I was actively involved in decision-making for new product launches within the company."
                            detailsTechnologies=" Technologies used: Python, PostgreSQL, JavaScript, Mongo DB, GraphQL, AWS Lambda,
                                Dynamo."
                            isExpanded={true}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        2019 - Montechelo
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <ExperienceDetail
                            company="Senior Backend Developer"
                            yearsWorkedDetail="January 2019 - February 2020"
                            details="Developed customer service chatbots using Dialogflow and custom AI-driven voice bots,
                                enhancing user interaction and support."
                            details2="Additionally, I designed dashboards and reports to evaluate
                                the performance and effectiveness of both chatbots and voice bots, providing insights for continuous
                                improvement."
                            detailsTechnologies="Technologies used: Python, PostgreSQL, JavaScript, AWS Polly, Django, Angular. "
                            isExpanded={false}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        2017 - Servitrans Ltda.
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <ExperienceDetail
                            company="Software Engineer"
                            yearsWorkedDetail="August 2017 - January 2019"
                            details="Developed a comprehensive Customer Relationship Management (CRM) system to efficiently
                                manage the customer base, implemented a portal for traffic-related inquiries, and designed reports
                                and dashboards for data analysis."
                            details2="Additionally, I was responsible for maintaining and enhancing the
                                functionality of the software to ensure continuous improvement and optimal performance."
                            detailsTechnologies="Technologies used: Python, PostgreSQL, JavaScript, Nginx, Django, Php, Html5,
                                CSS3."
                            isExpanded={false}
                        />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
};

export default Experience;