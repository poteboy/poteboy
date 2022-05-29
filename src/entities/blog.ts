import { MicoModel } from './micro'

export type Blog = {
    content: any;
    title: string;
    eyecatch: EyeCatch
} & MicoModel

export type EyeCatch = {
    height: number;
    width: number;
    url: string;
}

