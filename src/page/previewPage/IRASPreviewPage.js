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
        wholeData1[c]['IRASStatus'] = 'Approved'
        var publication = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('weight')))
        var verification = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('verification')))
        if (wholeData1[c].researchArticle.length != 0) {
            wholeData1[c].researchArticle.forEach((x, i) => {
                x['weight'] = publication[`weightRA${i}`]
                x['verification'] = verification[`verificationRA${i}`]
            })
        }
        if (wholeData1[c].academicArticle.length != 0) {
            wholeData1[c].academicArticle.forEach((x, i) => {
                x['weight'] = publication[`weightAA${i}`]
                x['verification'] = verification[`verificationAA${i}`]
            })
        }
        if (wholeData1[c].bookArticle.length != 0) {
            wholeData1[c].bookArticle.forEach((x, i) => {
                x['weight'] = publication[`weightBA${i}`]
                x['verification'] = verification[`verificationBA${i}`]
            })
        }
        localStorage.setItem('wholeData', JSON.stringify(wholeData1));
        navigate('/irashomepage');
    }


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
                    <input style={{ textAlign: 'center' }} type="number" defaultValue={x.weight} {...register(`weightRA${i}`, { required: true })} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.contribution}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <select {...register(`verificationRA${i}`)}>
                        <option value="Inaccurate">Inaccurate</option>
                        <option value="Accurate">Accurate</option>
                    </select>
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
                    <input style={{ textAlign: 'center' }} type="number" defaultValue={x.weight} {...register(`weightAA${i}`, { required: true })} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.contribution}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <select {...register(`verificationAA${i}`)}>
                        <option value="Inaccurate">Inaccurate</option>
                        <option value="Accurate">Accurate</option>
                    </select>
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
                    <input style={{ textAlign: 'center' }} type="number" defaultValue={x.weight} {...register(`weightBA${i}`, { required: true })} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    {x.contribution}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <select {...register(`verificationBA${i}`)}>
                        <option value="Inaccurate">Inaccurate</option>
                        <option value="Accurate">Accurate</option>
                    </select>
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


            {/* Publication */}
            <Container style={{
                paddingBottom: '10px', paddingTop: '10px', paddingLeft: '20px', borderRadius: 28, border: '1px solid #D8D8D8', boxShadow: '0px 0px 20px -18px #000000', maxWidth: '80%', margin: 'auto'
            }}>
                <div> Publication/Dissemination of Academic Works </div>
                {P}

            </Container>

            <br></br>


            <Container style={{width:'75%', maxWidth: '80%', margin: 'auto', textAlign:'right' }}>
            <Button style={{ width: '80px', height: '40px', marginRight: '20px', backgroundColor: '#e7e7e7', color: 'black', borderRadius: '8px', border: '2px solid #e7e7e7' }} onClick={() => { navigate('/irashomepage')}}> Return </Button>

                <Button style={{ width: '80px', height: '40px', marginRight: '20px', backgroundColor: '#e7e7e7', color: 'black', borderRadius: '8px', border: '2px solid #e7e7e7' }} onClick={handleSubmit(onSubmit)}> Approve </Button>
            </Container>
            <br></br>

        </>)
}
