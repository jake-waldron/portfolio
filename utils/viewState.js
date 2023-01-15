import { create } from 'zustand';

const useStore = create((set, get) => ({
	highlightViewCount: 0,
	increaseHighlightViewCount: () => set((state) => ({ highlightViewCount: state.highlightViewCount + 1 })),
}));

export default useStore;
