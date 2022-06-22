module.exports = {
  branches: ["master"],
  extends: ["semantic-release-monorepo"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@axalotl/semantic-release-plugin-debug",
  ],
};
