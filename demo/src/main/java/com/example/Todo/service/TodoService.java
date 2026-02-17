package com.example.Todo.service;

import com.example.Todo.model.Todo;
import com.example.Todo.repository.TodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // Tells Spring this class holds business logic
public class TodoService {

    @Autowired // Automatically injects the repository so we can use it
    private TodoRepository repository;

    // 1. Get all Todos (with optional filter)
    public List<Todo> getAllTodos(Boolean completed) {
        if (completed != null) {
            return repository.findByCompleted(completed);
        }
        return repository.findAll();
    }

    // 2. Create a Todo
    public Todo createTodo(Todo todo) {
        return repository.save(todo);
    }

    // 3. Update a Todo
    public Todo updateTodo(Long id, Todo todoDetails) {
        // Find it first, or throw an error if it doesn't exist
        Todo todo = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));
        
        // Update the fields
        todo.setTitle(todoDetails.getTitle());
        todo.setDescription(todoDetails.getDescription());
        todo.setCompleted(todoDetails.isCompleted());
        
        // Save and return the updated version
        return repository.save(todo);
    }

    // 4. Delete a Todo
    public void deleteTodo(Long id) {
        repository.deleteById(id);
    }
}