import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import MentorServices from '../services/MentorServices'
const AddMentor = () => {

    const [name, setName] = useState("")
    const [emailId, setEmail] = useState("")
    const [experience, setExperience] = useState("")
    const [designation, setDesignation] = useState("")
    const [topic, setTopic] = useState("")
    const [date, setDate] = useState("")
    const [recording, setRecording] = useState("")
    const history = useNavigate();
    const {id} = useParams();

    const saveOrUpdateMentor = (e) => {
        e.preventDefault();

        const mentor = { name, emailId, experience, designation, topic, date, recording }
        if (id) {
            MentorServices.updateMentor(id, mentor).then((response) => {
                history('/mentors')
            }).catch(error => {
                console.log(error)
            })

        } else {
            MentorServices.createMentor(mentor).then((response) => {
                console.log(response.data)
                history('/mentors');

            }).catch(error => {
                console.log(error)
            })
        }
    }


    useEffect(() => {
        MentorServices.getMentorById(id).then((response) => {
            setName(response.data.name)
            setEmail(response.data.emailId)
            setExperience(response.data.experience)
            setDesignation(response.data.designation)
            setDate(response.data.date)
            setTopic(response.data.topic)
            setRecording(response.data.recording)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {
        if (id) {
            return <h2 className='text-center'>Update Mentor</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
    return (
        <div>

            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {title()}
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Name</label>
                                    <input
                                        type="text"
                                        placeholder='Enter name '
                                        name="name"
                                        className='form-control'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email_id</label>
                                    <input
                                        type="text"
                                        placeholder='Enter email '
                                        name="emailId"
                                        className='form-control'
                                        value={emailId}
                                        onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Experience</label>
                                    <input
                                        type="text"
                                        placeholder='Enter mentors work experience '
                                        name="experience"
                                        className='form-control'
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Designation</label>
                                    <input
                                        type="text"
                                        placeholder='Enter designation '
                                        name="designation"
                                        className='form-control'
                                        value={designation}
                                        onChange={(e) => setDesignation(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Topic</label>
                                    <input
                                        type="text"
                                        placeholder='Enter topic of the session '
                                        name="topic"
                                        className='form-control'
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Date</label>
                                    <input
                                        type="text"
                                        placeholder='Enter date '
                                        name="date"
                                        className='form-control'
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Recording</label>
                                    <input
                                        type="text"
                                        placeholder='Enter recording link '
                                        name="recording"
                                        className='form-control'
                                        value={recording}
                                        onChange={(e) => setRecording(e.target.value)}></input>
                                </div>
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateMentor(e)}>Submit</button>
                                <Link to="/mentors" className='btn btn-danger'>Cancel</Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMentor