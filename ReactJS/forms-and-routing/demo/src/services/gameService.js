import { request } from "./requester";

const baseUrl = 'http://localhost:3030';

export const getAll = () => request(`${baseUrl}/data/games`);



