package com.example.Mentor.service;

import com.example.Mentor.Model.ModelMentor;
import com.example.Mentor.repositary.MentorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorService {
 @Autowired
 private MentorRepo repository;

    public ModelMentor saveMentor(ModelMentor mentor){
        return repository.save(mentor);
    }

    public List<ModelMentor>  saveMentors(List<ModelMentor> mentors) {
        return repository.saveAll(mentors);
    }
        public List<ModelMentor> getMentors(){
            return  repository.findAll();
        }

        public ResponseEntity<ModelMentor> getMentorById(Long id){

        ModelMentor m=repository.findById(id).orElse(null);
        return  ResponseEntity.ok(m);
        }

    public List<ModelMentor> getMentorByName(String name){

        return repository.findByName(name);
    }
        public String deleteMentor(Long id){
            repository.deleteById(id);
            return "mentor removed !!" +id;
        }

        public ResponseEntity<ModelMentor> updateMentor(long id, ModelMentor mentor){
            ModelMentor existingMentor= repository.findById(id).orElse(null);
            existingMentor.setName(mentor.getName());
            existingMentor.setEmailId(mentor.getEmailId());
            existingMentor.setDate(mentor.getDate());
            existingMentor.setExperience(mentor.getExperience());
            existingMentor.setDesignation(mentor.getDesignation());
            existingMentor.setRecording(mentor.getRecording());
            existingMentor.setTopic(mentor.getTopic());

            repository.save(existingMentor);
            return ResponseEntity.ok(existingMentor);

        }


    }


