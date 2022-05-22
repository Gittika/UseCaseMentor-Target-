import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MentorServices from '../services/MentorServices'
export const ListMentor = () => {

    const [mentors, setMentors] = useState([])
    useEffect(() =>{ getMentor();}, [])

const getMentor=()=>{
    MentorServices.getAllMentors().then((response) => {
        setMentors(response.data)
        console.log(response.data);
    })
        .catch(error => {
            console.log(error);
        })
}
    const deleteMentor=(mentorId)=>{
        MentorServices.deleteMentor(mentorId).then((response)=>{
            getMentor();
        }).catch(error=>{
            console.log(error)
        })

    }
    return (
        <div className='container'>
            <h2 className='text=center'>List of Mentors</h2>
            <Link to="/add-employee" className='btn btn-primary mb-2' >Add Mentor</Link>
            <table className="table table-bordered table-light table-striped">
                <thead>
                    <th>Name</th>
                    <th>Email_id</th>
                    <th>Experience</th>
                    <th>Designation</th>
                    <th>Topic</th>
                    <th>Date</th>
                    <th> Recording</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        mentors.map(
                            mentor =>
                                <tr key={mentor.id}>
                                    <td>{mentor.name}</td>
                                    <td>{mentor.emailId}</td>
                                    <td>{mentor.experience}</td>
                                    <td>{mentor.designation}</td>
                                    <td>{mentor.topic}</td>
                                    <td>{mentor.date}</td>
                                    <td >
                                       
                                        <a href={mentor.recording}>Recording</a>
                                   </td>
                                    <td>

                                        <Link className='btn btn-info'  to={`/edit-mentor-detail/${mentor.id}`} >Update</Link>
                                        <button className='btn btn-danger mt-2' onClick={()=>deleteMentor(mentor.id)} style={{display:'block',width:78}}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
