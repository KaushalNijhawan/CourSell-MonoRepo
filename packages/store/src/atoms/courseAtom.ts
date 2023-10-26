import { atom } from "recoil";
type course = { 
    published : boolean;
    title: string;
    description: string;
    price: string;
    _id: string
}

export const courseDetail = atom<course[]>({
    default : [],
    key : 'courseDetail'
})