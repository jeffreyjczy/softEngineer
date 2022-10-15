import React, { useState, useEffect } from 'react';
import Navbar from '../component/navbar/Navbar';
import { makeStyles } from '@mui/styles';
import * as ReactDOM from 'react-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '65vw',
        height: 424,
        backgroundColor: '#FFFFFF',
        borderRadius: 28,
        border: '1px solid #D8D8D8',
        top: '50%',
        left: '35%',
        position: 'absolute',
        marginLeft: -293.5,
        marginTop: 120,
        boxShadow: '0px 0px 20px -18px #000000',
        zIndex: 4,
        opacity: 0.9
    },

}));

export default function LectHomePage() {

    const navigate = useNavigate();
    const classes = useStyles()
    var wholeData = JSON.parse(localStorage.getItem('wholeData'));
    const role = JSON.parse(localStorage.getItem('role'));
    var name = role.name.split(" ")[1]

    var isSubmitted = false;
    for (var i = 0; i < wholeData.length; i++) {
        if (wholeData[i].personalInfo.firstName == name) {
            isSubmitted = true;
            wholeData = wholeData[i]
        }
    }
    console.log(wholeData)


    return (
        <>
            <Navbar />


            <div className={classes.paper} style={{ top: '8%' }}>
                <div style={{ width: '100%', display: 'flex', borderBottom: '2px solid #D8D8D8', height: '60px', justifyContent: 'space-between', fontSize: '1.5rem', alignItems: 'center', }}>
                    <div style={{ marginLeft: '20px' }}>Submission</div>
                    {!isSubmitted &&
                        <button onClick={() => { navigate('/form') }} style={{ marginRight: '20px', backgroundColor: '#e7e7e7', color: 'black', borderRadius: '8px', border: '2px solid #e7e7e7' }}>Create Form</button>


                    }
                </div>
                {!isSubmitted &&
                    <div style={{ alignItems: 'center', textAlign: 'center', fontSize: '3rem' }}>
                        No form submitted
                    </div>
                }
                {isSubmitted &&
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '5px', marginTop: '10px', width: '63vw', height: '55px', paddingLeft: '20px', alignItems: 'center', fontSize: '1.5rem', border: '1px solid #e7e7e7', borderRadius: '28px', boxShadow: '0px 0px 20px -18px #000000', }}>
                        <div>
                            Academic Year 2022 Form
                        </div>
                        <div style={{ fontSize: '1rem' }}>
                            Dean: {wholeData.DeanStatus}
                        </div>
                        <div style={{ fontSize: '1rem' }}>
                            HR: {wholeData.HRStatus}
                        </div>
                        <div style={{ fontSize: '1rem' }}>
                            AA: {wholeData.AAStatus}
                        </div>
                        <div style={{ fontSize: '1rem' }}>
                            IRAS: {wholeData.IRASStatus}
                        </div>
                        <button onClick={() => { navigate('/lectpreviewpage') }} style={{ width: '55px', marginRight: '20px', backgroundColor: '#e7e7e7', color: 'black', borderRadius: '8px', border: '2px solid #e7e7e7' }}>View</button>


                    </div>
                }
            </div>


        </>)
}
