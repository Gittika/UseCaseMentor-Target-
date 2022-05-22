package com.example.Mentor.repositary;

import com.example.Mentor.Model.ModelMentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MentorRepo extends JpaRepository <ModelMentor,Long> {
   @Query("FROM ModelMentor  where name=?1")
    public List<ModelMentor > findByName(String name);


}
