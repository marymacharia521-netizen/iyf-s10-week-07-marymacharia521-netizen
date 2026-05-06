import { loadTodos, saveTodos } from "./state.js";
import { renderTodos } from "./ui.js";

// ADD TODO
function addTodo(text) {
    if (!text.trim()) return;

    const todos = loadTodos();

    const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
    };

    todos.push(newTodo);
    saveTodos(todos);
    renderTodos();
}

// TOGGLE TODO
function toggleTodo(id) {
    const todos = loadTodos();

    const todo = todos.find(t => t.id === id);

    if (todo) {
        todo.completed = !todo.completed;
        saveTodos(todos);
        renderTodos();
    }
}

// DELETE TODO
function deleteTodo(id) {
    let todos = loadTodos();

    todos = todos.filter(t => t.id !== id);

    saveTodos(todos);
    renderTodos();
}

// expose functions to HTML
window.toggle = toggleTodo;
window.remove = deleteTodo;

// INIT APP
document.addEventListener("DOMContentLoaded", () => {
    renderTodos();

    const form = document.getElementById("todo-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const input = document.getElementById("todo-input");
        const value = input.value.trim();

        if (!value) return;

        addTodo(value);
        input.value = "";
    });
});