import { initContract } from "@ts-rest/core";

const c = initContract();

const router = c.router({});

console.log(typeof router);
