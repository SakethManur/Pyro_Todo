package com.example.Todo.controller; // <-- Update to your package name!

import com.example.Todo.model.Todo;
import com.example.Todo.service.TodoService;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Tells Spring this class handles REST API requests
@RequestMapping("/api/todos") // The base URL for all routes in this file
@CrossOrigin(origins = "*") // CRITICAL: Allows your React app to talk to this API without CORS errors
public class TodoController {

    @Autowired
    private TodoService service;

    // GET /api/todos (or GET /api/todos?completed=true)
    @GetMapping
    public List<Todo> getAllTodos(@RequestParam(required = false) Boolean completed) {
        return service.getAllTodos(completed);
    }

    // POST /api/todos
    @PostMapping
    public Todo createTodo(@Valid @RequestBody Todo todo) {
        // @Valid tells Spring to check the @NotBlank rule we put on the Title in the Model!
        return service.createTodo(todo);
    }

    // PUT /api/todos/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @RequestBody Todo todo) {
        return ResponseEntity.ok(service.updateTodo(id, todo));
    }

    // DELETE /api/todos/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        service.deleteTodo(id);
        return ResponseEntity.noContent().build(); // Returns a 204 No Content status
    }
}