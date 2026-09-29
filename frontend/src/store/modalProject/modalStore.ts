import { create } from "zustand";

import { UseModalProject } from "./types";

const useModalProject = create<UseModalProject>((set, get) => ({
    showIdModal: '',
    setShowIdModal: (value: string) => set({ showIdModal: value })
}))

export default useModalProject;