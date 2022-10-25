import { Imagen } from "../imagen";

export interface Usuario {
    id?: string,
    usuario: string,
    password: string,
    role: string,
    imagenesFavs: Array<Imagen>
}
