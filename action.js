import github from '@actions/github';

async function run() {
    const { title, body } = github.context.payload.pull_request;
    console.log(title);
    console.log(body);
}
run();