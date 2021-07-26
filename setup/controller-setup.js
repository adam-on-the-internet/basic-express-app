function setupControllers(app) {
  app.get('/', (req, res) => {
    res.send({ message: "basic-express-app is running" });
  });

  const actuatorController = require('../actuator/actuator.controller');
  app.use('/actuator', actuatorController);

  const widgetController = require('../widget/widget.controller');
  app.use('/widget', widgetController);

  const doodadController = require('../doodad/doodad.controller');
  app.use('/doodad', doodadController);

  const contraptionController = require('../contraption/contraption.controller');
  app.use('/contraption', contraptionController);

  const chitChatController = require('../chit-chat/chit-chit.controller');
  app.use('/chitChat', chitChatController);

  const clueBotController = require('../clue-bot/clue-bot.controller');
  app.use('/clueBot', clueBotController);

  const storyController = require('../stories/stories.controller');
  app.use('/story', storyController);

  const evidenceController = require('../evidence/evidence.controller');
  app.use('/evidence', evidenceController);

  const witnessController = require('../witness/witness.controller');
  app.use('/witness', witnessController);

  const issueController = require('../issue/issue.controller');
  app.use('/issue', issueController);

  const caseController = require('../case/case.controller');
  app.use('/case', caseController);

  const applicationController = require('../application/application.controller');
  app.use('/application', applicationController);

  const userController = require('../user/user.controller');
  app.use('/user', userController);

  const randomController = require('../random/random.controller');
  app.use('/random', randomController);

  const logController = require('../log/log.controller');
  app.use('/log', logController);

  const authController = require('../auth/auth.controller');
  app.use('/auth', authController);

  const bookmarkController = require('../bookmark/bookmark.controller');
  app.use('/bookmark', bookmarkController);

  const spectreCardController = require('../spectre-card/spectreCard.controller');
  app.use('/spectreCard', spectreCardController);

  const questController = require('../quest/quest.controller');
  app.use('/quest', questController);

  const tweetController = require('../tweet/tweet.controller');
  app.use('/tweet', tweetController);

  const contactController = require('../contact/contact.controller');
  app.use('/contact', contactController);

  const blockController = require('../block/block.controller');
  app.use('/block', blockController);

  const sparksBotController = require('../sparks-bot/sparks-bot.controller');
  app.use('/sparks', sparksBotController);

  const blockDeckController = require('../block-deck/blockDeck.controller');
  app.use('/blockDeck', blockDeckController);

  const characterController = require('../character/character.controller');
  app.use('/character', characterController);

  const vmArchiveController = require('../vm-archive/vm-archive.controller');
  app.use('/vmArchive', vmArchiveController);

  const superlativeController = require('../superlative-scavenger/superlative-scavenger.controller');
  app.use('/superlativeScavenger', superlativeController);

  const muppetController = require('../muppet/muppet.controller');
  app.use('/muppet', muppetController);

  const meetingAgendaController = require('../meeting-agenda/meeting-agenda.controller');
  app.use('/meetingAgenda', meetingAgendaController);
}

module.exports = {
  setupControllers
}
