import { loadTodos, saveTodos } from "./state.js";
import { renderTodos } from "./ui.js";

function addTodo(text) {
    const todos = loadTodos();

    const newTodo = {
        id: Date.now(),
        text,
        completed: false
    };

    todos.push(newTodo);
    saveTodos(todos);
    renderTodos();
}

function toggleTodo(id) {
    const todos = loadTodos();
    const todo = todos.find(t => t.id === id);

    if (todo) {
        todo.completed = !todo.completed;
        saveTodos(todos);
        renderTodos();
    }
}

function deleteTodo(id) {
    let todos = loadTodos();
    todos = todos.filter(t => t.id !== id);
    saveTodos(todos);
    renderTodos();
}

// Make available globally
window.toggle = toggleTodo;
window.remove = deleteTodo;

document.addEventListener("DOMContentLoaded", () => {
    renderTodos();

    const form = document.getElementById("todo-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.getElementById("todo-input");

        addTodo(input.value);
        input.value = "";
    });
});