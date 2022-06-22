module.exports = {
  branches: ["master"],
  extends: ["semantic-release-monorepo"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@axalotl/semantic-release-plugin-debug",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
