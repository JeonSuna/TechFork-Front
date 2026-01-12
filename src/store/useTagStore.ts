import { create } from "zustand";

interface TagStore {
  tag: string[];
  setTag: (tag: string[]) => void;
  toggleTag: (tag: string) => void;
  resetTag: () => void;
}

export const useTagStore = create<TagStore>(set => ({
  tag: [],
  setTag: tag => set({ tag }),
  toggleTag: tag =>
    set(state => ({
      tag: state.tag.includes(tag)
        ? state.tag.filter(t => t !== tag)
        : [...state.tag, tag],
    })),
  resetTag: () => set({ tag: [] }),
}));
