const { runningProd } = require('../utilities/env.util');

let mongoUser;
let mongoPass;
let mongoCluster;
let secret;
let sendgridApiKey;
let test;
let storyConsumerKey;
let storyConsumerSecret;
let storyAccessToken;
let storyAccessTokenSecret;
let orderConsumerKey;
let orderConsumerSecret;
let orderAccessToken;
let orderAccessTokenSecret;
let clueConsumerKey;
let clueConsumerSecret;
let clueAccessToken;
let clueAccessTokenSecret;
let vmConsumerKey;
let vmConsumerSecret;
let vmAccessToken;
let vmAccessTokenSecret;

const port = process.env.PORT || 5000;

if (runningProd) {
  mongoUser = process.env.MONGO_USER;
  mongoPass = process.env.MONGO_PASS;
  mongoCluster = process.env.MONGO_CLUSTER;
  secret = process.env.SECRET;
  sendgridApiKey = process.env.SENDGRID_API_KEY;

  twitConsumerKey = process.env.TWIT_CONSUMER_KEY;
  twitConsumerSecret = process.env.TWIT_CONSUMER_SECRET;
  twitAccessToken = process.env.TWIT_ACCESS_TOKEN;
  twitAccessTokenSecret = process.env.TWIT_ACCESS_TOKEN_SECRET;

  storyConsumerKey = process.env.STORY_CONSUMER_KEY;
  storyConsumerSecret = process.env.STORY_CONSUMER_SECRET;
  storyAccessToken = process.env.STORY_ACCESS_TOKEN;
  storyAccessTokenSecret = process.env.STORY_ACCESS_TOKEN_SECRET;

  clueConsumerKey = process.env.CLUE_CONSUMER_KEY;
  clueConsumerSecret = process.env.CLUE_CONSUMER_SECRET;
  clueAccessToken = process.env.CLUE_ACCESS_TOKEN;
  clueAccessTokenSecret = process.env.CLUE_ACCESS_TOKEN_SECRET;

  questConsumerKey = process.env.QUEST_CONSUMER_KEY;
  questConsumerSecret = process.env.QUEST_CONSUMER_SECRET;
  questAccessToken = process.env.QUEST_ACCESS_TOKEN;
  questAccessTokenSecret = process.env.QUEST_ACCESS_TOKEN_SECRET;

  orderConsumerKey = process.env.ORDER_CONSUMER_KEY;
  orderConsumerSecret = process.env.ORDER_CONSUMER_SECRET;
  orderAccessToken = process.env.ORDER_ACCESS_TOKEN;
  orderAccessTokenSecret = process.env.ORDER_ACCESS_TOKEN_SECRET;

  vmConsumerKey = process.env.VM_CONSUMER_KEY;
  vmConsumerSecret = process.env.VM_CONSUMER_SECRET;
  vmAccessToken = process.env.VM_ACCESS_TOKEN;
  vmAccessTokenSecret = process.env.VM_ACCESS_TOKEN_SECRET;

  test = process.env.TEST;
} else {
  try {
    const {
      MONGO_USER,
      MONGO_PASS,
      MONGO_CLUSTER,
      SECRET,
      SENDGRID_API_KEY,
      TWIT_CONSUMER_KEY,
      TWIT_CONSUMER_SECRET,
      TWIT_ACCESS_TOKEN,
      TWIT_ACCESS_TOKEN_SECRET,
      STORY_CONSUMER_KEY,
      STORY_CONSUMER_SECRET,
      STORY_ACCESS_TOKEN,
      STORY_ACCESS_TOKEN_SECRET,
      CLUE_CONSUMER_KEY,
      CLUE_CONSUMER_SECRET,
      CLUE_ACCESS_TOKEN,
      CLUE_ACCESS_TOKEN_SECRET,
      QUEST_CONSUMER_KEY,
      QUEST_CONSUMER_SECRET,
      QUEST_ACCESS_TOKEN,
      QUEST_ACCESS_TOKEN_SECRET,
      ORDER_CONSUMER_KEY,
      ORDER_CONSUMER_SECRET,
      ORDER_ACCESS_TOKEN,
      ORDER_ACCESS_TOKEN_SECRET,
      VM_CONSUMER_KEY,
      VM_CONSUMER_SECRET,
      VM_ACCESS_TOKEN,
      VM_ACCESS_TOKEN_SECRET,
      TEST
    } = require("../local.env");

    mongoUser = MONGO_USER;
    mongoPass = MONGO_PASS;
    mongoCluster = MONGO_CLUSTER;
    secret = SECRET;
    sendgridApiKey = SENDGRID_API_KEY;

    twitConsumerKey = TWIT_CONSUMER_KEY;
    twitConsumerSecret = TWIT_CONSUMER_SECRET;
    twitAccessToken = TWIT_ACCESS_TOKEN;
    twitAccessTokenSecret = TWIT_ACCESS_TOKEN_SECRET;

    storyConsumerKey = STORY_CONSUMER_KEY;
    storyConsumerSecret = STORY_CONSUMER_SECRET;
    storyAccessToken = STORY_ACCESS_TOKEN;
    storyAccessTokenSecret = STORY_ACCESS_TOKEN_SECRET;

    clueConsumerKey = CLUE_CONSUMER_KEY;
    clueConsumerSecret = CLUE_CONSUMER_SECRET;
    clueAccessToken = CLUE_ACCESS_TOKEN;
    clueAccessTokenSecret = CLUE_ACCESS_TOKEN_SECRET;

    questConsumerKey = QUEST_CONSUMER_KEY;
    questConsumerSecret = QUEST_CONSUMER_SECRET;
    questAccessToken = QUEST_ACCESS_TOKEN;
    questAccessTokenSecret = QUEST_ACCESS_TOKEN_SECRET;

    orderConsumerKey = ORDER_CONSUMER_KEY;
    orderConsumerSecret = ORDER_CONSUMER_SECRET;
    orderAccessToken = ORDER_ACCESS_TOKEN;
    orderAccessTokenSecret = ORDER_ACCESS_TOKEN_SECRET;

    vmConsumerKey = VM_CONSUMER_KEY;
    vmConsumerSecret = VM_CONSUMER_SECRET;
    vmAccessToken = VM_ACCESS_TOKEN;
    vmAccessTokenSecret = VM_ACCESS_TOKEN_SECRET;

    test = TEST;
  }
  catch (e) {
    if (e instanceof Error && e.code === "MODULE_NOT_FOUND")
      console.log("Env setup incomplete");
    else
      throw e;
  }
}

module.exports = {
  mongoUser: mongoUser,
  mongoPass: mongoPass,
  mongoCluster: mongoCluster,
  port: port,
  secret: secret,
  sendgridApiKey: sendgridApiKey,
  twitConsumerKey: twitConsumerKey,
  twitConsumerSecret: twitConsumerSecret,
  twitAccessToken: twitAccessToken,
  twitAccessTokenSecret: twitAccessTokenSecret,
  storyConsumerKey,
  storyConsumerSecret,
  storyAccessToken,
  storyAccessTokenSecret,
  orderConsumerKey,
  orderConsumerSecret,
  orderAccessToken,
  orderAccessTokenSecret,
  clueConsumerKey,
  clueConsumerSecret,
  clueAccessToken,
  clueAccessTokenSecret,
  questConsumerKey,
  questConsumerSecret,
  questAccessToken,
  questAccessTokenSecret,
  vmConsumerKey,
  vmConsumerSecret,
  vmAccessToken,
  vmAccessTokenSecret,
  test: test
};
