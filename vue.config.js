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
            token: "3f29f540a9c47679ac0dfc53ab3cf2006282748d"
          }
        ]
      }
    }
  }
};
