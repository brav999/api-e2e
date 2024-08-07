import { request } from "@playwright/test";

export class Login {


  async login(username: string, password: string) {
    const response = await request.post('http://localhost:3000/login", {
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email: "fulano@qa.com",
      password: "teste",
    },
  ');
  }
}
