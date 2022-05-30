import { MicoModel } from './micro'
import { Category } from './category';

export type Blog = {
    content: any;
    title: string;
    eyecatch: EyeCatch;
    category: Category;
} & MicoModel

export type EyeCatch = {
    height: number;
    width: number;
    url: string;
}

