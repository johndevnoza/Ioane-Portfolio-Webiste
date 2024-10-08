import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type States = {
  isTutorial: boolean;
  tooltip: number;
};
export const tutorialStore = create<States>()(
  persist(
    (_set) => ({
      isTutorial: true,
      tooltip: 1,
    }),
    {
      name: "Tutorial-Store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
