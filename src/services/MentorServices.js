
import axios from 'axios'
const MENTOR_BASE_REST_API_URL="http://localhost:8080/";
class MentorServices{
    getAllMentors(){
        return axios.get(MENTOR_BASE_REST_API_URL+'mentors')
    }
    createMentor(mentor){
        return axios.post(MENTOR_BASE_REST_API_URL+'addMentor',mentor)
    }

   getMentorById(mentorId){
       return axios.get(MENTOR_BASE_REST_API_URL+'ment'+'/'+mentorId);
   }

   updateMentor(mentorId,mentor){
       return axios.put(MENTOR_BASE_REST_API_URL+'update'+'/'+mentorId,mentor);
   }
   deleteMentor(mentorId){
       return axios.delete(MENTOR_BASE_REST_API_URL+'delete'+'/'+mentorId);
   }
}
export default  new MentorServices();