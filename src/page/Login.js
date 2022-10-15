import { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@mui/styles';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: 587,
        height: 424,
        backgroundColor: '#FFFFFF',
        borderRadius: 28,
        border: '1px solid #D8D8D8',
        top: '50%',
        left: '50%',
        position: 'absolute',
        marginLeft: -293.5,
        marginTop: 120,
        boxShadow: '0px 0px 20px -18px #000000',
        zIndex: 4,
        opacity: 0.9
    },
    inputframe: {
        width: 398,
        height: 49,
        border: '1px solid #D8D8D8',
        borderRadius: 8,
        textAlign: 'center'
    },
    login_btn: {
        height: 45,
        width: 398,
        borderRadius: 8,
        backgroundColor: '#48846F',
        color: '#FFFFFF',
        border: '0px solid #FFFFFF'
    },
    art1: {
        height: 95,
        width: 5,
        backgroundColor: '#48846F',
        right: -3,
        position: 'absolute',
        top: 30
    },

}));
export default function Login(props) {

    const navigate = useNavigate();
    const classes = useStyles()
    const [id, setId] = useState()
    const [password, setPassword] = useState()


    const handlerClick = (e) => {
        if (id == 'L001') {
            var role = {
                name: 'Prof.Dr. Sonthya Vanichvatana',
                code: '360040',
                email: 'sonthya@gmail.com'
            }
            navigate('/lecthomepage');
        }
        else if (id == 'D001') {
            var role = {
                name: 'Asst.Prof. Dr. Kitti Phothikitti',
            }
            navigate('/deanhomepage');
        }
        else if (id == 'A001') {
            var role = {
                name: 'Dr. Vindhai Cocracul'
            }
            navigate('/aahomepage');
        }
        else if (id == 'H001') {
            var role = {
                name: 'Mr. Ronachai Homchantr'
            }
            navigate('/hrhomepage');
        }
        else if (id == 'I001') {
            var role = {
                name: 'Dr. Preecha Methavasaraphak'
            }
            navigate('/irashomepage');
        }
        else if (id == 'C001') {
            var role = {
                name: 'Dr. Kitikorn Dowpiset'
            }
            navigate('/comhomepage');
        }
        localStorage.setItem('role', JSON.stringify(role));

    }

    // ID: 'D001',  pass: '12345'
    // ID: 'H001',  pass: '12345'
    // ID: 'A001',  pass: '12345'
    // ID: 'I001',  pass: '12345'
    // ID: 'L001',  pass: '12345'
    // ID: 'C001',  pass: '12345'
    return (
        <div >

            <div className={classes.paper} style={{ top: '12%' }}>
                <div className={classes.art1} />
                <div style={{ position: 'absolute', top: '20%', left: '22.5%', margin: '-35px 0 0 -35px' }}>
                    <div style={{ fontWeight: 700, fontSize: 30, color: '#48846F', width: '100%', textAlign: 'center' }}>
                        ACADEMIC REMUNERATION
                    </div>
                    <div style={{ fontWeight: 400, fontSize: 18, color: '#48846F', textAlign: 'center' }}>
                        of Academic Title Holders
                    </div>
                    <div style={{ height: 50 }} />

                    <input placeholder='  L001' type='text' className={classes.inputframe} onChange={(e) => setId(e.target.value)}>

                    </input>
                    <div style={{ height: 14 }} />
                    <input placeholder='  1234567' type='password' className={classes.inputframe} onChange={(e) => setPassword(e.target.value)}>

                    </input>
                    <div style={{ height: 30 }} />
                    <button className={classes.login_btn} onClick={() => handlerClick()}>
                        Login
                    </button>

                </div>





            </div>


        </div>

    )
}
