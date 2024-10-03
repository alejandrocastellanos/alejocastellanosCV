import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface ExperienceDetailProps {
    company: string;
    yearsWorkedDetail: string;
    details: string;
    details2?: string;
    details3?: string;
    details4?: string;
    details5?: string;
    detailsTechnologies: string;
    isExpanded: boolean;
}

const ExperienceDetail = ({company, yearsWorkedDetail, details, details2, details3, details4, details5, detailsTechnologies, isExpanded}: ExperienceDetailProps) => {

    return (
        <Accordion defaultExpanded={isExpanded}>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography style={{ fontFamily: 'glitchgoblin' }}>{company}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ mt: -2 }}>
                <Typography>
                    <p>{details}</p>
                    <p>{details2}</p>
                    <p>{details3}</p>
                    <p>{details4}</p>
                    <p>{details5}</p>
                    <p>{detailsTechnologies}</p>
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default ExperienceDetail;