module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: [
          {
            provider: "github",
            owner: "warowatto",
            repo: "electron-app",
            releaseType: "release",
            private: false,
            protocol: "https",
            token: "c7efdfbfbfc84d6fe3e46dea9b1d118ea44b95df"
          }
        ]
      }
    }
  }
};
