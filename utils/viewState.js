import { create } from 'zustand';

const useStore = create((set) => ({
	highlightViewed: true,
	setHighlightViewed: () => set((state) => ({ highlightViewed: !state.highlightViewed ? true : true })),
}));

export default useStore;
