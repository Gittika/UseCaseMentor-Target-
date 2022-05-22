package com.example.Mentor.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Entity
    @Table(name="Mentor")
    public class ModelMentor {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;

        @Column(name="name")
        private String name;

        @Column(name="email_id")
        private String emailId;

        @Column(name="experience")
        private String experience;

        @Column(name="designation")
        private String designation;

        @Column(name="topic")
        private String topic;
        @Column(name="date")
        private String date;
        @Column(name="recording")
        private String recording;

    }


