import React from "react";
import {Typography} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

interface EducationProps {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
}

const Education = ({institution, degree, startDate, endDate}:EducationProps ) => {
    return (
        <>
            <Typography sx={{ fontSize: '18px' }}>
                - <strong>{degree}</strong>
            </Typography>
            <Typography>
                <i>{institution}</i>
            </Typography>
        </>
    );
};

export default Education;
