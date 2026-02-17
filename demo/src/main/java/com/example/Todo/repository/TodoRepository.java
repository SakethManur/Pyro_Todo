package com.example.Todo.repository; // <-- Update this to your package name!

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Todo.model.Todo;

import java.util.List;

// JpaRepository takes two types: <The Model, The Type of the Primary Key>
public interface TodoRepository extends JpaRepository<Todo, Long> {
    
    // Spring Boot is smart enough to see "findByCompleted" and automatically 
    // write a SQL query like: SELECT * FROM todos WHERE completed = ?
    List<Todo> findByCompleted(boolean completed); 
}