package com.example.Mentor;

import com.example.Mentor.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MentorApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(MentorApplication.class, args);
	}
@Autowired
	private MentorService mentorService;

	@Override
	public void run(String... args) throws Exception {

	}
}
