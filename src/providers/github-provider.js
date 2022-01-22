import React, { createContext, useState } from "react";

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    user: {
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      location: undefined,
      followers: 0,
      followings: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const contextValue = {
    githubState,
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;