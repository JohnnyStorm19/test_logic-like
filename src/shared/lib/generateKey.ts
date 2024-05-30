import { nanoid } from "nanoid";

export const generateKey = () => {
    const id = nanoid(10);
    return id;
}