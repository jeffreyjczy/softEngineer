import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function HRPreviewPage() {
    const { control, register, unregister, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const wholeData1 = JSON.parse(localStorage.getItem('wholeData'));
    console.log(wholeData);

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

    const onSubmit = data => {
        wholeData1[c]['teachingload'] = data.teachingload
        wholeData1[c]['workload'] = data.workload
        wholeData1[c]['HRStatus'] = 'Approved'
        localStorage.setItem('wholeData', JSON.stringify(wholeData1));
        navigate('/hrhomepage');
    }

    const T1 = []
    if (wholeData.sem1.length != 0) {
        T1.push(<>
            <div> Teaching </div>
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
            </Container>

            <br></br>

            {/* HR input */}

            <Container style={{ maxWidth: '80%', margin: 'auto', display: 'grid', gridTemplateColumns: 'auto auto auto auto', gap: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                    Lecturer's Workload
                </div>
                <div>
                    <input type="number"  {...register("workload", { required: false })} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    Lecturer's Teaching Load
                </div>
                <div>
                    <input type="number"  {...register("teachingload", { required: false })} />
                </div>
            </Container>

            <br></br>


            <Container style={{ width: '75%', maxWidth: '80%', margin: 'auto', textAlign: 'right' }}>
                <Button style={{ width: '80px', height: '40px', marginRight: '20px', backgroundColor: '#e7e7e7', color: 'black', borderRadius: '8px', border: '2px solid #e7e7e7' }} onClick={() => { navigate('/hrhomepage') }}> Return </Button>

                <Button style={{ width: '80px', height: '40px', marginRight: '20px', backgroundColor: '#e7e7e7', color: 'black', borderRadius: '8px', border: '2px solid #e7e7e7' }} onClick={handleSubmit(onSubmit)}> Approve </Button>
            </Container>
            <br></br>

        </>)
}
