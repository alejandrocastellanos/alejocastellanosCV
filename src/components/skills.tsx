import React from "react";
import Tooltip from "@mui/material/Tooltip";

interface SkillsProps {
    name: string;
    text?: string;
    customWidth?: string;
}

const Skills = ({name, text, customWidth}:SkillsProps) => {
    const imagePath = `/images/${name}`;
    return (
        <Tooltip title={text}>
            <img src={imagePath}
                 style={{
                     width: customWidth,
                     height: 'auto',
                     marginRight: '5px'
                 }} alt={name}/>
        </Tooltip>
    )
}

export default Skills;
