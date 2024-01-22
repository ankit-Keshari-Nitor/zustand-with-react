import { create } from "zustand";

export const useVoteStore = create((set, get) => ({
  votes: 0,
  votesList: [],
  addVotes: () => set((state) => ({ votes: state.votes + 1 })),
  subtractVotes: () => set((state) => ({ votes: state.votes - 1 })),
  fetchVotes: async (votingURL) => {
    const response = await fetch(votingURL);
    const json = await response.json();
    set({ votesList: json.items });
  },
}));
