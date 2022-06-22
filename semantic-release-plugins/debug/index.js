const debug =
  (name) =>
  (pluginConfig, { logger }) =>
    logger.log(name, pluginConfig);

module.exports.verifyConditions = debug("verifyConditions");
module.exports.analyzeCommits = debug("analyzeCommits");
module.exports.verifyRelease = debug("verifyRelease");
module.exports.generateNotes = debug("generateNotes");
module.exports.prepare = debug("prepare");
module.exports.publish = debug("publish");
module.exports.addChannel = debug("addChannel");
module.exports.success = debug("success");
module.exports.fail = debug("fail");
