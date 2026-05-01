import { saveToStorage, getFromStorage } from "./storage.js";

const STORAGE_KEY = "todos";

export function loadTodos() {
    return getFromStorage(STORAGE_KEY, []);
}

export function saveTodos(todos) {
    saveToStorage(STORAGE_KEY, todos);
}