import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import {Stack, Typography} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface ContactInformationProps {
    contact: {
        email: string;
        phone: string;
        linkedin: string;
        github: string;
    }
}

const ContactInformation = ({contact }: ContactInformationProps ) => {
    return (
        <>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                    component="a"
                    href={contact.email}
                    target="_blank"
                    aria-label="Send Email"
                >
                    <MailOutlineIcon fontSize="large" />
                </IconButton>
                <IconButton
                    component="a"
                    href={contact.linkedin}
                    target="_blank"
                    aria-label="Phone"
                >
                    <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                    component="a"
                    href={contact.github}
                    target="_blank"
                    aria-label="Phone"
                >
                    <GitHubIcon fontSize="large" />
                </IconButton>
            </Stack>
            <br/>
        </>
    );
};

export default ContactInformation;
