import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function Form() {

    const { control, register, unregister, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    var role = JSON.parse(localStorage.getItem('role'));
    const nameArray = role.name.split(" ")
    console.log(role)

    // Submit
    const onSubmit = data => {
        console.log(data)
        var personalInfo = {
            firstName: data.FirstName,
            lastName: data.LastName,
            email: data.Email,
            school: data.School,
            code: data.Code,
            title: data.AcademicTitle,
            telephone: data.Telephone,
            department: data.Department
        }
        // console.log(personalInfo)
        var sem1 = []
        var sem2 = []
        var sem3 = []
        var teaching1 = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('T_1')))
        for (var i = 1; i <= Object.keys(teaching1).length / 5; i++) {
            var object = {
                courseCode: teaching1[`T_1CourseCode${i}`],
                courseCredit: teaching1[`T_1CourseCredit${i}`],
                courseTitle: teaching1[`T_1CourseTitle${i}`],
                hours_per_week: teaching1[`T_1Hours_Week${i}`],
                no_of_section: teaching1[`T_1NoOfSection${i}`],
            }
            sem1.push(object)
        }
        // console.log('sem1', sem1)

        var teaching2 = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('T_2')))
        for (var i = 1; i <= Object.keys(teaching2).length / 5; i++) {
            var object = {
                courseCode: teaching2[`T_2CourseCode${i}`],
                courseCredit: teaching2[`T_2CourseCredit${i}`],
                courseTitle: teaching2[`T_2CourseTitle${i}`],
                hours_per_week: teaching2[`T_2Hours_Week${i}`],
                no_of_section: teaching2[`T_2NoOfSection${i}`],
            }
            sem2.push(object)
        }
        // console.log('sem2', sem2)

        var teaching3 = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('T_3')))
        for (var i = 1; i <= Object.keys(teaching3).length / 5; i++) {
            var object = {
                courseCode: teaching3[`T_3CourseCode${i}`],
                courseCredit: teaching3[`T_3CourseCredit${i}`],
                courseTitle: teaching3[`T_3CourseTitle${i}`],
                hours_per_week: teaching3[`T_3Hours_Week${i}`],
                no_of_section: teaching3[`T_3NoOfSection${i}`],
            }
            sem3.push(object)
        }
        // console.log('sem3', sem3)

        var under_senior = []
        var under_independent = []
        var grad_independent = []
        var grad_thesis = []
        var advising1 = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('A_1')))
        for (var i = 1; i <= Object.keys(advising1).length / 3; i++) {
            var object = {
                topic: advising1[`A_1Topic${i}`],
                students: advising1[`A_1Students${i}`],
                grade: advising1[`A_1Grade${i}`]
            }
            under_senior.push(object)
        }
        // console.log('under_senior', under_senior)

        var advising2 = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('A_2')))
        for (var i = 1; i <= Object.keys(advising2).length / 3; i++) {
            var object = {
                topic: advising2[`A_2Topic${i}`],
                students: advising2[`A_2Students${i}`],
                grade: advising2[`A_2Grade${i}`]
            }
            under_independent.push(object)
        }
        // console.log('under_independent', under_independent)

        var advising3 = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('A_3')))
        for (var i = 1; i <= Object.keys(advising3).length / 3; i++) {
            var object = {
                topic: advising3[`A_3Topic${i}`],
                students: advising3[`A_3Students${i}`],
                grade: advising3[`A_3Grade${i}`]
            }
            grad_independent.push(object)
        }
        // console.log('grad_independent', grad_independent)

        var advising4 = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('A_4')))
        for (var i = 1; i <= Object.keys(advising4).length / 3; i++) {
            var object = {
                topic: advising4[`A_4Topic${i}`],
                students: advising4[`A_4Students${i}`],
                grade: advising4[`A_4Grade${i}`]
            }
            grad_thesis.push(object)
        }
        // console.log('grad_thesis', grad_thesis)


        var researchArticle = []
        var academicArticle = []
        var bookArticle = []
        var publication1 = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('P_1')))
        for (var i = 1; i <= Object.keys(publication1).length / 3; i++) {
            var object = {
                title: publication1[`P_1Title${i}`],
                weight: publication1[`P_1Weight${i}`],
                contribution: publication1[`P_1Contribution${i}`]
            }
            researchArticle.push(object)
        }
        // console.log('researchArticle', researchArticle)

        var publication2 = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('P_2')))
        for (var i = 1; i <= Object.keys(publication2).length / 3; i++) {
            var object = {
                title: publication2[`P_2Title${i}`],
                weight: publication2[`P_2Weight${i}`],
                contribution: publication2[`P_2Contribution${i}`]
            }
            academicArticle.push(object)
        }
        console.log('academicArticle', academicArticle)

        var publication3 = Object.fromEntries(Object.entries(data).filter(([key, value]) => key.includes('P_3')))
        for (var i = 1; i <= Object.keys(publication3).length / 3; i++) {
            var object = {
                title: publication3[`P_3Title${i}`],
                weight: publication3[`P_3Weight${i}`],
                contribution: publication3[`P_3Contribution${i}`]
            }
            bookArticle.push(object)
        }
        // console.log('bookArticle', bookArticle)

        var data = {
            personalInfo: personalInfo,
            sem1: sem1,
            sem2: sem2,
            sem3: sem3,
            under_senior: under_senior,
            under_independent: under_independent,
            grad_independent: grad_independent,
            grad_thesis: grad_thesis,
            researchArticle: researchArticle,
            academicArticle: academicArticle,
            bookArticle: bookArticle,
            DeanStatus: 'Pending',
            HRStatus: 'Pending',
            AAStatus: 'Pending',
            IRASStatus: 'Pending',
            ComStatus: "Pending",
        }
        var wholeData = JSON.parse(localStorage.getItem('wholeData'));
        wholeData.push(data);
        localStorage.setItem('wholeData', JSON.stringify(wholeData));

        navigate('/lectpreviewpage');
    };

    const [T1, setT1] = useState(2);
    const [T2, setT2] = useState(2);
    const [T3, setT3] = useState(1);
    //Teaching Forms
    const [formsT1, setFormT1] = useState([
        <Container key={1} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Code
                </div>
                <div>
                    <input type="text" {...register(`T_1CourseCode1`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Title
                </div>
                <div>
                    <input type="text" {...register(`T_1CourseTitle1`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Credit
                </div>
                <div>
                    <input type="number" {...register(`T_1CourseCredit1`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    No. of Section
                </div>
                <div>
                    <input type="number" defaultValue={1} {...register(`T_1NoOfSection1`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Hours/Week
                </div>
                <div>
                    <input type="number" {...register(`T_1Hours_Week1`, { required: true })} />
                </div>
            </div>

        </Container>
    ])
    let handleAddFormT1 = (e) => {
        e.preventDefault()
        setT1(T1 + 1)
        setFormT1([...formsT1,
        <Container key={T1} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Code
                </div>
                <div>
                    <input type="text" {...register(`T_1CourseCode${T1}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Title
                </div>
                <div>
                    <input type="text" {...register(`T_1CourseTitle${T1}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Credit
                </div>
                <div>
                    <input type="number" {...register(`T_1CourseCredit${T1}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    No. of Section
                </div>
                <div>
                    <input type="number" defaultValue={1} {...register(`T_1NoOfSection${T1}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Hours/Week
                </div>
                <div>
                    <input type="number" {...register(`T_1Hours_Week${T1}`, { required: true })} />
                </div>
            </div>

        </Container>
        ]);
    }

    const [formsT2, setFormT2] = useState([
        <Container key={1} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Code
                </div>
                <div>
                    <input type="text" {...register(`T_2CourseCode1`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Title
                </div>
                <div>
                    <input type="text" {...register(`T_2CourseTitle1`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Credit
                </div>
                <div>
                    <input type="number" {...register(`T_2CourseCredit1`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    No. of Section
                </div>
                <div>
                    <input type="number" defaultValue={1} {...register(`T_2NoOfSection1`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Hours/Week
                </div>
                <div>
                    <input type="number" {...register(`T_2Hours_Week1`, { required: true })} />
                </div>
            </div>
        </Container>
    ]);
    let handleAddFormT2 = (e) => {
        e.preventDefault()
        setT2(T2 + 1)
        setFormT2([...formsT2,
        <Container key={T2} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Code
                </div>
                <div>
                    <input type="text" {...register(`T_2CourseCode${T2}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Title
                </div>
                <div>
                    <input type="text" {...register(`T_2CourseTitle${T2}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Credit
                </div>
                <div>
                    <input type="number" {...register(`T_2CourseCredit${T2}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    No. of Section
                </div>
                <div>
                    <input type="number" defaultValue={1} {...register(`T_2NoOfSection${T2}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Hours/Week
                </div>
                <div>
                    <input type="number" {...register(`T_2Hours_Week${T2}`, { required: true })} />
                </div>
            </div>
        </Container>
        ]);
    }

    const [formsT3, setFormT3] = useState([]);
    let handleAddFormT3 = (e) => {
        e.preventDefault()
        setT3(T3 + 1)
        setFormT3([...formsT3,
        <Container key={T3} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Code
                </div>
                <div>
                    <input type="text" {...register(`T_3CourseCode${T3}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Title
                </div>
                <div>
                    <input type="text" {...register(`T_3CourseTitle${T3}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Course Credit
                </div>
                <div>
                    <input type="number" {...register(`T_3CourseCredit${T3}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    No. of Section
                </div>
                <div>
                    <input type="number" defaultValue={1} {...register(`T_3NoOfSection${T3}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Hours/Week
                </div>
                <div>
                    <input type="number" {...register(`T_3Hours_Week${T3}`, { required: true })} />
                </div>
            </div>
        </Container>
        ]);
    }


    const [A1, setA1] = useState(1);
    const [A2, setA2] = useState(1);
    const [A3, setA3] = useState(1);
    const [A4, setA4] = useState(1);
    //Advising Forms
    const [formsA1, setFormA1] = useState([])
    let handleAddFormA1 = (e) => {
        e.preventDefault()
        setA1(A1 + 1)
        setFormA1([...formsA1,
        <Container key={A1} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Topic
                </div>
                <div>
                    <input type="text" {...register(`A_1Topic${A1}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Students
                </div>
                <div>
                    <input type="text" {...register(`A_1Students${A1}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Grade
                </div>
                <div>
                    <input type="text" {...register(`A_1Grade${A1}`, { required: true })} />
                </div>
            </div>
        </Container>
        ]);
    }

    const [formsA2, setFormA2] = useState([])
    let handleAddFormA2 = (e) => {
        e.preventDefault()
        setA2(A2 + 1)
        setFormA2([...formsA2,
        <Container key={A2} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Topic
                </div>
                <div>
                    <input type="text" {...register(`A_2Topic${A2}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Students
                </div>
                <div>
                    <input type="text" {...register(`A_2Students${A2}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Grade
                </div>
                <div>
                    <input type="text" {...register(`A_2Grade${A2}`, { required: true })} />
                </div>
            </div>
        </Container>
        ]);
    }

    const [formsA3, setFormA3] = useState([])
    let handleAddFormA3 = (e) => {
        e.preventDefault()
        setA3(A3 + 1)
        setFormA3([...formsA3,
        <Container key={A3} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Topic
                </div>
                <div>
                    <input type="text" {...register(`A_3Topic${A3}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Students
                </div>
                <div>
                    <input type="text" {...register(`A_3Students${A3}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Grade
                </div>
                <div>
                    <input type="text" {...register(`A_3Grade${A3}`, { required: true })} />
                </div>
            </div>
        </Container>
        ]);
    }

    const [formsA4, setFormA4] = useState([])
    let handleAddFormA4 = (e) => {
        e.preventDefault()
        setA4(A4 + 1)
        setFormA4([...formsA4,
        <Container key={A4} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Topic
                </div>
                <div>
                    <input type="text" {...register(`A_4Topic${A4}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Students
                </div>
                <div>
                    <input type="text" {...register(`A_4Students${A4}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Grade
                </div>
                <div>
                    <input type="text" {...register(`A_4Grade${A4}`, { required: true })} />
                </div>
            </div>
        </Container>
        ]);
    }

    //Publication
    const [P1, setP1] = useState(1);
    const [P2, setP2] = useState(1);
    const [P3, setP3] = useState(1);
    const [formsP1, setFormP1] = useState([])
    let handleAddFormP1 = (e) => {
        e.preventDefault()
        setP1(P1 + 1)
        setFormP1([...formsP1,
        <Container key={P1} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Title
                </div>
                <div>
                    <input type="text" {...register(`P_1Title${P1}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Weight
                </div>
                <div>
                    <input type="text" {...register(`P_1Weight${P1}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Contribution
                </div>
                <div>
                    <input type="text" {...register(`P_1Contribution${P1}`, { required: true })} />
                </div>
            </div>
        </Container>
        ]);
    }

    const [formsP2, setFormP2] = useState([])
    let handleAddFormP2 = (e) => {
        e.preventDefault()
        setP2(P2 + 1)
        setFormP2([...formsP2,
        <Container key={P2} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Title
                </div>
                <div>
                    <input type="text" {...register(`P_2Title${P2}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Weight
                </div>
                <div>
                    <input type="text" {...register(`P_2Weight${P2}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Contribution
                </div>
                <div>
                    <input type="text" {...register(`P_2Contribution${P2}`, { required: true })} />
                </div>
            </div>
        </Container>
        ]);
    }

    const [formsP3, setFormP3] = useState([])
    let handleAddFormP3 = (e) => {
        e.preventDefault()
        setP3(P3 + 1)
        setFormP3([...formsP3,
        <Container key={P3} style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Title
                </div>
                <div>
                    <input type="text" {...register(`P_3Title${P3}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Weight
                </div>
                <div>
                    <input type="text" {...register(`P_3Weight${P3}`, { required: true })} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    Contribution
                </div>
                <div>
                    <input type="text" {...register(`P_3Contribution${P3}`, { required: true })} />
                </div>
            </div>
        </Container>
        ]);
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

            <br></br>

            <Container style={{ maxWidth: '80%', margin: 'auto' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto 40% auto', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                First Name
                            </div>
                            <div>
                                <input style={{ width: '80%' }} type="text" defaultValue={nameArray[1]} readonly='readonly' {...register("FirstName")} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Last Name
                            </div>
                            <div>
                                <input style={{ width: '80%' }} type="text" defaultValue={nameArray[2]} readonly='readOnly' {...register("LastName", { required: false })} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Code
                            </div>
                            <div>
                                <input style={{ width: '80%' }} type="text" defaultValue={role.code} readonly='readOnly' {...register("Code", { required: false })} />
                            </div>
                        </div>

                    </div>
                    <Container style={{ display: 'grid', gridTemplateColumns: 'auto auto', marginLeft: '5%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Academic Title
                            </div>
                            <div>
                                <input style={{ width: '70%' }} type="text" defaultValue={nameArray[0]} readonly='readOnly' {...register("AcademicTitle", { required: false })} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Department/Program
                            </div>
                            <div>
                                <input style={{ width: '70%' }} type="text" defaultValue="Computer Science" readonly='readOnly' {...register("Department", { required: false })} />
                            </div>
                        </div>
                    </Container>

                    <Container style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                School
                            </div>
                            <div>
                                <input style={{ width: '83%' }} type="text" defaultValue="Vincent Mary School of Science and Technology" readonly='readonly' {...register("School", { required: false })} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Telephone
                            </div>
                            <div>
                                <input style={{ width: '87%' }} type="text" defaultValue="0954567895" readonly='readonly' {...register("Telephone", { required: false })} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                Email
                            </div>
                            <div>
                                <input style={{ width: '83%' }} type="text" defaultValue={role.email} readonly='readonly' {...register("Email", { required: false })} />
                            </div>
                        </div>

                    </Container>
                </form>
            </Container>
            <br></br>

            {/* Teaching Part */}
            <Container style={{ maxWidth: '80%', margin: 'auto' }}>
                <div> 1. Teaching </div>
                <div> Semester 1/2019* </div>
                {formsT1}
                <Button onClick={handleAddFormT1}> Add </Button>
                <div> Semester 2/2019* </div>
                {formsT2}
                <Button onClick={handleAddFormT2}> Add </Button>
                <div> Semester 3/2019 </div>
                {formsT3}
                <Button onClick={handleAddFormT3}> Add </Button>
            </Container>

            <br></br>

            {/* Advising Part */}
            <Container style={{ maxWidth: '80%', margin: 'auto' }}>
                <div> 2. Advising </div>
                <div> Undergraduate Program </div>
                <div> Senior Project </div>
                {formsA1}
                <Button onClick={handleAddFormA1}> Add Senior Project </Button>
                <div> Independent Study  </div>
                {formsA2}
                <Button onClick={handleAddFormA2}> Add Indepent Study</Button>

                <div> Graduate Program </div>
                <div> Independent Study </div>
                {formsA3}
                <Button onClick={handleAddFormA3}> Add Indepent Study </Button>
                <div> Thesis/Dissertation </div>
                {formsA4}
                <Button onClick={handleAddFormA4}> Add Thesis/Dissertation </Button>
            </Container>

            <br></br>

            {/* Publication */}
            <Container style={{ maxWidth: '80%', margin: 'auto' }}>
                <div> 3. Publication/Dissemination of Academic Works </div>
                <div> Publication of Research Article</div>
                {formsP1}
                <Button onClick={handleAddFormP1}> Add Research Article </Button>
                <div> Publication of Academic Article</div>
                {formsP2}
                <Button onClick={handleAddFormP2}> Add Academic Article</Button>
                <div> Publication Of Book/Text Article</div>
                {formsP3}
                <Button onClick={handleAddFormP3}> Add Book Article</Button>

            </Container>

            <br></br>

            

            <Container style={{ width: '75%', maxWidth: '80%', margin: 'auto', textAlign: 'right' }}>
                <button onClick={handleSubmit(onSubmit)} style={{ width: '80px', height: '40px', marginRight: '20px', backgroundColor: '#e7e7e7', color: 'black', borderRadius: '8px', border: '2px solid #e7e7e7' }}>Preview</button>
            </Container>

            <br></br>


        </>)
}
