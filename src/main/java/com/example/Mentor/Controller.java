package com.example.Mentor;

import com.example.Mentor.Model.ModelMentor;
import com.example.Mentor.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
public class Controller {
    @Autowired
    private MentorService service;
    @PostMapping("/addMentor")
    public ModelMentor addMentor(@RequestBody ModelMentor mentor){
        return  service.saveMentor(mentor);
    }
    @PostMapping("/addMentors")
    public List<ModelMentor> addMentors(@RequestBody List<ModelMentor> mentors){
        return service.saveMentors(mentors);
    }
    @GetMapping("/mentors")
    public List<ModelMentor> findAllMentors(){
        return  service.getMentors();
    }
    @GetMapping("ment/{id}")
    public ResponseEntity<ModelMentor> findMentorById(@PathVariable long id){

        return service.getMentorById(id);
    }
    @GetMapping("/mentor/{name}")
    public List<ModelMentor> findMentorByName(@PathVariable String name){
        return service.getMentorByName(name);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<ModelMentor> updateMentor(@PathVariable long id, @RequestBody ModelMentor mentor){

        return service.updateMentor(id,mentor);
    }

    @DeleteMapping("/delete/{id}")
    public String  deleteMentor(@PathVariable Long id){
        return service.deleteMentor(id);
    }

}
