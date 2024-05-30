import ky from "ky";

export const API_URL = 'https://logiclike.com';

export const API = ky.create({prefixUrl: API_URL});