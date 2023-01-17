import { create } from 'zustand';

const useStore = create((set) => ({
	projectSectionViewCount: 0,
	increaseProjectSectionViewCount: () =>
		set((state) => ({ projectSectionViewCount: state.projectSectionViewCount + 1 })),
	helloSectionViewCount: 0,
	increaseHelloSectionViewCount: () => set((state) => ({ helloSectionViewCount: state.helloSectionViewCount + 1 })),
}));

export default useStore;
