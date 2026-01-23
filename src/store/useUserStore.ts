import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserData {
  // memberId: number;
  // nickname: string;
  accessToken: string | null;
  // refreshToken: string | null;
  isNewMember: string | null;
}

interface UserStoreType {
  user: UserData | null;
  setUser: (user: UserData) => void;
  resetUser: () => void;
}

const UserStore: StateCreator<UserStoreType> = set => ({
  user: null,
  setUser: user => set({ user }),
  resetUser: () => set({ user: null }),
});
const useUserStore = create<UserStoreType>()(
  persist(UserStore, {
    name: "user",
    storage: createJSONStorage(() => localStorage),
  }),
);

export default useUserStore;
