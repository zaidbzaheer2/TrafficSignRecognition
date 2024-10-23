import {create} from 'zustand';

type State = {
    loading: boolean;
    output : string;
};
type Actions = {
    setLoading : (state:boolean)=>void;
    setOutput : (output: string)=>void;
};

export const useLoadingStore = create<State & Actions>()((set,get)=>({
    loading : false,
    output : 'None',
    setLoading : (loading: boolean) => set({loading}),
    setOutput : (output: string) => set({output})
}));