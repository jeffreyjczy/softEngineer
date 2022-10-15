import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function AAPreviewPage() {
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
        wholeData1[c]['AAStatus'] = 'Approved'
        var verification = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('verification')))
        if (wholeData1[c].under_senior.length != 0) {
            wholeData1[c].under_senior.forEach((x, i) => {
                x['verification'] = verification[`verificationUS${i}`]
            })
        }
        if (wholeData1[c].under_independent.length != 0) {
            wholeData1[c].under_independent.forEach((x, i) => {

                x['verification'] = verification[`verificationUI${i}`]
            })
        }
        if (wholeData1[c].grad_independent.length != 0) {
            wholeData1[c].grad_independent.forEach((x, i) => {
                x['verification'] = verification[`verificationGI${i}`]
            })
        }
        if (wholeData1[c].grad_thesis.length != 0) {
            wholeData1[c].grad_thesis.forEach((x, i) => {
                x['verification'] = verification[`verificationGT${i}`]
            })
        }
        localStorage.setItem('wholeData', JSON.stringify(wholeData1));
        navigate('/aahomepage');
    }



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
                        <select style={{ width: '28%' }} {...register(`verificationUS${i}`)}>
                            <option value="Reject">Reject</option>
                            <option value="Accept">Accept</option>
                        </select>
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

                        <select style={{ width: '28%' }} {...register(`verificationUI${i}`)}>
                            <option value="Reject">Reject</option>
                            <option value="Accept">Accept</option>
                        </select>
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
                        <select style={{ width: '28%' }} {...register(`verificationGI${i}`)}>
                            <option value="Reject">Reject</option>
                            <option value="Accept">Accept</option>
                        </select>
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
                        <select style={{ width: '28%' }} {...register(`verificationGT${i}`)}>
                            <option value="Reject">Reject</option>
                            <option value="Accept">Accept</option>
                        </select>
                    </div>

                </Container>
            ));
        }

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
                <h4>Academic Year 2022</h4>
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



            <br></br>

            {/* Advising Part */}
            <Container style={{
                paddingBottom: '10px', paddingTop: '10px', paddingLeft: '20px', borderRadius: 28, border: '1px solid #D8D8D8', boxShadow: '0px 0px 20px -18px #000000', maxWidth: '80%', margin: 'auto'
            }}>
                <div> Advising </div>
                {A1}
            </Container>

            <br></br>




            <Container style={{ width: '75%', maxWidth: '80%', margin: 'auto', textAlign: 'right' }}>
                <Button style={{ width: '80px', height: '40px', marginRight: '20px', backgroundColor: '#e7e7e7', color: 'black', borderRadius: '8px', border: '2px solid #e7e7e7' }} onClick={() => { navigate('/aahomepage') }}> Return </Button>

                <Button style={{ width: '80px', height: '40px', marginRight: '20px', backgroundColor: '#e7e7e7', color: 'black', borderRadius: '8px', border: '2px solid #e7e7e7' }} onClick={handleSubmit(onSubmit)}> Approve </Button>
            </Container>
            <br></br>

        </>)
}
