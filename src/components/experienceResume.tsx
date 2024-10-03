import React from "react";
import {Card, CardContent, Typography} from "@mui/material";

const ExperienceResume = () =>{
    return (
        <Card sx={{ minWidth: 275}}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} variant="h5" component="div" style={{ fontFamily: 'glitchgoblin' }}>
                    Work Experience
                </Typography>
                <Typography variant="body1">
                    <p>I am a Software Engineering professional with over 8 years of experience in BACKEND DEVELOPMENT.</p>
                    <p>Throughout my career, I have worked on a variety of projects including CRM and ERP systems,
                    payment gateway integrations, mobile applications, chatbots, omnichannel integrations,
                    application architecture design and development, as well as implementing AI models for Natural
                    Language Processing (NLP).</p>
                    <p>I also have experience leading development teams and working
                    with agile methodologies. I enjoy taking on challenges and continuously learning about new
                    technologies.</p>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ExperienceResume;