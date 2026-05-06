import { loadTodos } from "./state.js";

export function renderTodos() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";

    const todos = loadTodos();

    todos.forEach(todo => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span style="text-decoration:${todo.completed ? "line-through" : "none"}">
                ${todo.text}
            </span>

            <button onclick="toggle(${todo.id})">✔</button>
            <button onclick="remove(${todo.id})">❌</button>
        `;

        list.appendChild(li);
    });
}