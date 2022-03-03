const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const messageValue = core.getInput('message');
  console.log(`OA-Demo: ${messageValue}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`Your event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}