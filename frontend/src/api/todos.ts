import { TODO } from ".";
import { TodoType } from "../type";
import { privateAPI } from "./instance/privateApi";

export const todoApi = {
  createTodo({ title, content }: TodoType) {
    return privateAPI.post(TODO.CREATE, {
      title,
      content,
    });
  },
  getTodoList() {
    return privateAPI.get(TODO.READTODOLIST);
  },

  getTodo(id: string) {
    return privateAPI.get(`${TODO.READTODO}/${id}`);
  },

  editTodo(id: string, title: string, content: string) {
    return privateAPI.put(`${TODO.EDITTODO}/${id}`, {
      title,
      content,
    });
  },

  deleteTodo(id: string) {
    return privateAPI.delete(`${TODO.DELETETODO}/${id}`);
  },
};
