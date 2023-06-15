// Core
import { api } from "core/function/global";
import Env from "./Env.json";

const env = 'local'; // Environment

export const count = async date => { return await api({ url: `${Env[env].url}/count/${date}`, method: 'get' }).then(res => res.data); }
export const clicked = async data => { return await api({ url: `${Env[env].url}/click`, method: 'post', data: data }).then(res => res.data); }