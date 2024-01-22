import React, { useEffect } from "react";
import { useVoteStore } from "../zustand/createVoteStore";

const votingURL = "https://api.github.com/search/users?q=john&per_page=10";

export const Vote = () => {
  const votes = useVoteStore((state) => state.votes);
  const addVotes = useVoteStore((state) => state.addVotes);
  const subtractVotes = useVoteStore((state) => state.subtractVotes);

  const votesList = useVoteStore((state) => state.votesList);
  const fetchVotes = useVoteStore((state) => state.fetchVotes);

  return (
    <div style={{background: 'rgb(196 171 237)', margin: '20px', padding: '20px'}}>
      <h1>{votes} people have cast their votes</h1>
      <button onClick={addVotes}>Cast a vote</button>
      <button onClick={subtractVotes}>Delete a vote</button>
      <button onClick={() => fetchVotes(votingURL)}>Fetch votes</button>
      <div>
        <h1>Fetching Votes list asynchronously on button click</h1>
        <ul>
          {votesList.map((vote, index) => {
            return <li key={index}>{vote.login}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
