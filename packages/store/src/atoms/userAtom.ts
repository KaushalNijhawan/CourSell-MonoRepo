import { atom } from 'recoil';
type user = {
    username: string;
    isLoading: boolean;
}
export const userDetail = atom<user>({
    default: { username: '', isLoading: false },
    key: 'userDetail'
});