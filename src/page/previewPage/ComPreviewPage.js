import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export default function DeanPreviewPage() {
    const { control, register, unregister, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    var wholeData1 = JSON.parse(localStorage.getItem('wholeData'));
    var role = JSON.parse(localStorage.getItem('role'));
    var name = role.name.split(' ')[1]


    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    var c;
    for (var i = 0; i < wholeData1.length; i++) {
        if (wholeData1[i].personalInfo.code == id) {
            c = i
        }
    }



    var wholeData = wholeData1[c]
    console.log(wholeData);

    const onSubmit = data => {
        wholeData1[c]['DeanStatus'] = 'Approved'
        localStorage.setItem('wholeData', JSON.stringify(wholeData1));
        console.log(wholeData);
        navigate('/comhomepage');
    }

    const T1 = []
    if (wholeData.sem1.length != 0) {
        T1.push(<>
            <div> 1. Teaching </div>
            <div> Semester 1/2019* </div>
            <Container style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
                <div style={{ textAlign: 'center' }}>
                    Course Code
                </div>
                <div style={{ textAlign: 'center' }}>
                    Course Title
                </div>
                <div style={{ textAlign: 'center' }}>
                    Course Credit
                </div>
                <div style={{ textAlign: 'center' }}>
                    No. of Section
                </div>
                <div style={{ textAlign: 'center' }}>
                    Hours/Week
                </div>
            </Container>
        </>)
        wholeData.sem1.forEach((x, i) => T1.push(
            <Container key={i} style={{ display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%' }}>
                <div style={{ textAlign: 'center' }}>
                    {x.courseCode}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.courseTitle}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.courseCredit}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.no_of_section}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.hours_per_week}
                </div>
            </Container>
        ));
    }

    const T2 = []
    if (wholeData.sem2.length != 0) {
        T2.push(<><div> Semester 2/2019* </div>
            <Container style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
                <div style={{ textAlign: 'center' }}>
                    Course Code
                </div>
                <div style={{ textAlign: 'center' }}>
                    Course Title
                </div>
                <div style={{ textAlign: 'center' }}>
                    Course Credit
                </div>
                <div style={{ textAlign: 'center' }}>
                    No. of Section
                </div>
                <div style={{ textAlign: 'center' }}>
                    Hours/Week
                </div>
            </Container></>)
        wholeData.sem2.forEach((x, i) => T2.push(
            <Container key={i} style={{ display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%' }}>
                <div style={{ textAlign: 'center' }}>
                    {x.courseCode}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.courseTitle}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.courseCredit}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.no_of_section}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.hours_per_week}
                </div>
            </Container>
        ));
    }

    const T3 = []
    if (wholeData.sem3.length != 0) {
        T3.push(<><div> Semester 3/2019* </div>
            <Container style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
                <div style={{ textAlign: 'center' }}>
                    Course Code
                </div>
                <div style={{ textAlign: 'center' }}>
                    Course Title
                </div>
                <div style={{ textAlign: 'center' }}>
                    Course Credit
                </div>
                <div style={{ textAlign: 'center' }}>
                    No. of Section
                </div>
                <div style={{ textAlign: 'center' }}>
                    Hours/Week
                </div>
            </Container></>)
        wholeData.sem3.forEach((x, i) => T3.push(
            <Container key={i} style={{ display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%' }}>
                <div style={{ textAlign: 'center' }}>
                    {x.courseCode}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.courseTitle}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.courseCredit}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.no_of_section}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.hours_per_week}
                </div>
            </Container>
        ));

    }
    const T4 = []
    T4.push(<> <br></br>
        <Container style={{ maxWidth: '80%', margin: 'auto', display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '20px' }}>
            <div style={{ textAlign: 'center' }}>
                Lecturer's Workload : {wholeData.workload}
            </div>

            <div style={{ textAlign: 'center' }}>
                Lecturer's Teaching Load : {wholeData.teachingload}
            </div>

            <div style={{ textAlign: 'center' }}>
                Total (5%) : {wholeData.teachingload / wholeData.workload * 5} %
            </div>
        </Container>
        <br></br>
    </>
    )
    const A1 = []
    if (wholeData.under_senior.length != 0 || wholeData.under_independent.length != 0) {
        A1.push(<><div> Undergraduate Program </div></>)
        if (wholeData.under_senior.length != 0) {
            A1.push(<><div> Senior Project </div></>)
            A1.push(<Container style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                <div style={{ textAlign: 'center' }}>
                    Topic
                </div>
                <div style={{ textAlign: 'center' }}>
                    Students
                </div>
                <div style={{ textAlign: 'center' }}>
                    Grade
                </div>
                <div style={{ textAlign: 'center' }}>
                    AA's verification
                </div>
            </Container>)
            wholeData.under_senior.forEach((x, i) => A1.push(
                <Container key={i} style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                    <div style={{ textAlign: 'center' }}>
                        {x.topic}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.students}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.grade}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.verification}
                    </div>
                </Container>
            ));
        }
        if (wholeData.under_independent.length != 0) {
            A1.push(<><div> Independent Study </div></>)
            A1.push(<Container style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                <div style={{ textAlign: 'center' }}>
                    Topic
                </div>
                <div style={{ textAlign: 'center' }}>
                    Students
                </div>
                <div style={{ textAlign: 'center' }}>
                    Grade
                </div>
                <div style={{ textAlign: 'center' }}>
                    AA's verification
                </div>
            </Container>)
            wholeData.under_independent.forEach((x, i) => A1.push(
                <Container key={i} style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                    <div style={{ textAlign: 'center' }}>
                        {x.topic}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.students}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.grade}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.verification}
                    </div>
                </Container>
            ));
        }

    }
    if (wholeData.grad_thesis.length != 0 || wholeData.grad_independent.length != 0) {
        A1.push(<><div> Graduate Program </div></>)
        if (wholeData.grad_independent.length != 0) {
            A1.push(<><div> Independent Study </div></>)
            A1.push(<Container style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                <div style={{ textAlign: 'center' }}>
                    Topic
                </div>
                <div style={{ textAlign: 'center' }}>
                    Students
                </div>
                <div style={{ textAlign: 'center' }}>
                    Grade
                </div>
                <div style={{ textAlign: 'center' }}>
                    AA's verification
                </div>
            </Container>)
            wholeData.grad_independent.forEach((x, i) => A1.push(
                <Container key={i} style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                    <div style={{ textAlign: 'center' }}>
                        {x.topic}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.students}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.grade}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.verification}
                    </div>
                </Container>
            ));
        }
        if (wholeData.grad_thesis.length != 0) {
            A1.push(<><div> Thesis/Dissertation </div></>)
            A1.push(<Container style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                <div style={{ textAlign: 'center' }}>
                    Topic
                </div>
                <div style={{ textAlign: 'center' }}>
                    Students
                </div>
                <div style={{ textAlign: 'center' }}>
                    Grade
                </div>
                <div style={{ textAlign: 'center' }}>
                    AA's verification
                </div>
            </Container>)
            wholeData.grad_thesis.forEach((x, i) => A1.push(
                <Container key={i} style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                    <div style={{ textAlign: 'center' }}>
                        {x.topic}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.students}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.grade}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {x.verification}
                    </div>
                </Container>
            ));
        }
    }
    var matrix = [0, 0.35, 0.65, 1, 1.35, 1.65, 2, 2.35, 2.65, 3, 3.35, 3.65, 4, 4.35, 4.65, 5]
    var matrix2 = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
    var total = matrix[(wholeData.under_independent.length + wholeData.under_senior.length + wholeData.grad_independent.length)] + matrix2[(wholeData.grad_thesis.length)]

    A1.push(<>
        <br></br>
        <div style={{ textAlign: 'center' }}>
            Total (5%) : {total} %
        </div>
        <br></br>
    </>)


    const P = []
    if (wholeData.researchArticle.length != 0) {
        P.push(<div>  Publication of Research Article </div>)
        P.push(<Container style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
            <div style={{ textAlign: 'center' }}>
                Title
            </div>
            <div style={{ textAlign: 'center' }}>
                Weight
            </div>
            <div style={{ textAlign: 'center' }}>
                Contribution
            </div>
            <div style={{ textAlign: 'center' }}>
                IRAS's Verification
            </div>
        </Container>)
        wholeData.researchArticle.forEach((x, i) => P.push(
            <Container key={i} style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                <div style={{ textAlign: 'center' }}>
                    {x.title}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.weight}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.contribution}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.verification}
                </div>

            </Container>
        ));
    }
    if (wholeData.academicArticle.length != 0) {
        P.push(<div>  Publication of Academic Article </div>)
        P.push(<Container style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
            <div style={{ textAlign: 'center' }}>
                Title
            </div>
            <div style={{ textAlign: 'center' }}>
                Weight
            </div>
            <div style={{ textAlign: 'center' }}>
                Contribution
            </div>
            <div style={{ textAlign: 'center' }}>
                IRAS's Verification
            </div>
        </Container>)
        wholeData.academicArticle.forEach((x, i) => P.push(
            <Container key={i} style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                <div style={{ textAlign: 'center' }}>
                    {x.title}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.weight}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.contribution}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.verification}
                </div>
            </Container>
        ));
    }
    if (wholeData.bookArticle.length != 0) {
        P.push(<div>  Publication Of Book/Text Article </div>)
        P.push(<Container style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
            <div style={{ textAlign: 'center' }}>
                Title
            </div>
            <div style={{ textAlign: 'center' }}>
                Weight
            </div>
            <div style={{ textAlign: 'center' }}>
                Contribution
            </div>
            <div style={{ textAlign: 'center' }}>
                IRAS's Verification
            </div>
        </Container>)
        wholeData.bookArticle.forEach((x, i) => P.push(
            <Container key={i} style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                <div style={{ textAlign: 'center' }}>
                    {x.title}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.weight}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.contribution}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.verification}
                </div>
            </Container>
        ));
    }






    return (
        <>
            <Container style={{ textAlign: 'right' }}>
                Form AW1
            </Container>
            <Container style={{ textAlign: 'center' }}>
                <h4>
                    Academic Work Report of Academic Title Holders
                </h4>
                <h4>Academic Year 20..</h4>
                <div>
                    date
                </div>
            </Container>

            <Container style={{ maxWidth: '80%', margin: 'auto' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto 40% auto', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                First Name
                            </div>
                            <div>
                                <input style={{ width: '80%' }} type="text" defaultValue={wholeData.personalInfo.firstName} disabled={true} {...register("FirstName")} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Last Name
                            </div>
                            <div>
                                <input style={{ width: '80%' }} type="text" defaultValue={wholeData.personalInfo.lastName} disabled={true} {...register("LastName", { required: false })} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Code
                            </div>
                            <div>
                                <input style={{ width: '80%' }} type="text" defaultValue={wholeData.personalInfo.code} disabled={true} {...register("Code", { required: false })} />
                            </div>
                        </div>

                    </div>
                    <Container style={{ display: 'grid', gridTemplateColumns: 'auto auto', marginLeft: '5%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Academic Title
                            </div>
                            <div>
                                <input style={{ width: '70%' }} type="text" defaultValue={wholeData.personalInfo.title} disabled={true} {...register("AcademicTitle", { required: false })} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Department/Program
                            </div>
                            <div>
                                <input style={{ width: '70%' }} type="text" defaultValue={wholeData.personalInfo.department} disabled={true} {...register("Department", { required: false })} />
                            </div>
                        </div>
                    </Container>

                    <Container style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                School
                            </div>
                            <div>
                                <input style={{ width: '83%' }} type="text" defaultValue={wholeData.personalInfo.school} disabled={true} {...register("School", { required: false })} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Telephone
                            </div>
                            <div>
                                <input style={{ width: '87%' }} type="text" defaultValue={wholeData.personalInfo.telephone} disabled={true} {...register("Telephone", { required: false })} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Email
                            </div>
                            <div>
                                <input style={{ width: '83%' }} type="text" defaultValue={wholeData.personalInfo.email} disabled={true} {...register("Email", { required: false })} />
                            </div>
                        </div>

                    </Container>
                </form>
            </Container>
            <br></br>

            {/* Teaching Part */}
            <Container style={{
                paddingBottom: '10px', paddingTop: '10px', paddingLeft: '20px', borderRadius: 28, border: '1px solid #D8D8D8', boxShadow: '0px 0px 20px -18px #000000', maxWidth: '80%', margin: 'auto'
            }}>

                {T1}
                {T2}
                {T3}
                {T4}
            </Container>

            <br></br>

            {/* Advising Part */}
            <Container style={{
                paddingBottom: '10px', paddingTop: '10px', paddingLeft: '20px', borderRadius: 28, border: '1px solid #D8D8D8', boxShadow: '0px 0px 20px -18px #000000', maxWidth: '80%', margin: 'auto'
            }}>
                <div> 2. Advising </div>
                {A1}
            </Container>

            <br></br>

            {/* Publication */}
            <Container style={{
                paddingBottom: '10px', paddingTop: '10px', paddingLeft: '20px', borderRadius: 28, border: '1px solid #D8D8D8', boxShadow: '0px 0px 20px -18px #000000', maxWidth: '80%', margin: 'auto'
            }}>
                <div> 3. Publication/Dissemination of Academic Works </div>
                {P}

            </Container>

            <br></br>


            <Container style={{ width: '75%', maxWidth: '80%', margin: 'auto', textAlign: 'right' }}>
                <Button style={{ width: '80px', height: '40px', marginRight: '20px', backgroundColor: '#e7e7e7', color: 'black', borderRadius: '8px', border: '2px solid #e7e7e7' }} onClick={() => { navigate('/comhomepage') }}> Return </Button>

                <Button style={{ width: '80px', height: '40px', marginRight: '20px', backgroundColor: '#e7e7e7', color: 'black', borderRadius: '8px', border: '2px solid #e7e7e7' }} onClick={handleSubmit(onSubmit)}> Approve </Button>
            </Container>
            <br></br>

        </>)
}
