import React from "react";
import Skills from "./skills";
import {Typography} from "@mui/material";

const SkillsDetails = () => {
    return (
        <section>
            <Typography sx={{ mb: 1.5 }} variant="h5" component="div" style={{ fontFamily: 'glitchgoblin' }}>
                Skills
            </Typography>
            <section>
                <h4>▪️ Programming languages</h4>
                <Skills name="python-logo.png" text="Python" customWidth="20px"/>
                <Skills name="java-logo.png" text="Java" customWidth="35px"/>
                <Skills name="JavaScript-logo.png" text="JavaScript" customWidth="20px"/>
                <Skills name="rust-logo.jpeg" text="Rust" customWidth="30px"/>
            </section>
            <section>
                <h4>▪️ Web technologies</h4>
                <Skills name="html-logo.jpeg" text="HTML5" customWidth="20px"/>
                <Skills name="css-logo.jpeg" text="CSS3" customWidth="22px"/>
                <Skills name="JavaScript-logo.png" text="JavaScript" customWidth="25px"/>
                <Skills name="react-logo.png" text="React" customWidth="30px"/>
            </section>
            <section>
                <h4>▪️ Databases</h4>
                <Skills name="Postgresql-logo.png" text="Postgresql" customWidth="40px"/>
                <Skills name="Mysql-logo.jpeg" text="Mysql" customWidth="40px"/>
                <Skills name="amazon_dynamodb.png" text="Amazon Dynamodb" customWidth="35px"/>
                <Skills name="MongoDB.png" text="MongoDB" customWidth="40px"/>
                <Skills name="SQLite-Logo.wine.png" text="SQLite" customWidth="60px"/>
                <Skills name="Redis-logo.png" text="Redis" customWidth="40px"/>
            </section>
            <section>
                <h4>▪️ Devops</h4>
                <Skills name="Jenkins-logo.png" text="Jenkins" customWidth="60px"/>
                <Skills name="Datadog-logo.jpeg" text="Datadog" customWidth="30px"/>
                <Skills name="Amazon-CloudWatch.png" text="Amazon CloudWatch" customWidth="35px"/>
                <Skills name="bitbucket-logo.png" text="Bitbucket" customWidth="35px"/>
                <Skills name="github-logo.png" text="Github" customWidth="35px"/>
                <Skills name="Docker-Emblem.png" text="Docker"  customWidth="65px"/>
                <Skills name="sentry-logo.png" text="Sentry"  customWidth="55px"/>
                <Skills name="Kubernetes.png" text="Kubernetes" customWidth="35px"/>
            </section>
            <section>
                <h4>▪️ Cloud Computing</h4>
                <Skills name="AWS-logo.png" text="AWS" customWidth="45px"/>
                <Skills name="RDS.jpeg" text="RDS" customWidth="55px"/>
                <Skills name="EC2.jpeg" text="EC2" customWidth="35px"/>
                <Skills name="amazon_rekognition.png" text="Amazon Rekognition" customWidth="65px"/>
                <Skills name="S3.png" text="S3" customWidth="35px"/>
                <Skills name="amazon_dynamodb.png" text="Dynamodb" customWidth="35px"/>
                <Skills name="aws-lambda-logo.png" text="Lambda" customWidth="45px"/>
                <Skills name="amazon_mq.png" text="Amazon MQ" customWidth="55px"/>
            </section>
            <section>
                <h4>▪️ Frameworks</h4>
                <Skills name="odoo.jpeg" text="Odoo" customWidth="55px"/>
                <Skills name="Django.png" text="Django" customWidth="35px"/>
                <Skills name="FastAPI.png" text="FastAPI" customWidth="75px"/>
                <Skills name="Flask.jpeg" text="Flask" customWidth="30px"/>
                <Skills name="sqlalchemy.jpg" text="Sqlalchemy" customWidth="65px"/>
                <Skills name="Langchain.jpeg" text="Langchain" customWidth="45px"/>
                <Skills name="BeautifulSoup.jpg" text="BeautifulSoup" customWidth="55px"/>
                <Skills name="Selenium.png" text="Selenium" customWidth="35px"/>
                <Skills name="Pytest.jpeg" text="Pytest" customWidth="35px"/>
            </section>
        </section>
    );
};

export default SkillsDetails;
