import github from '@actions/github';

async function run() {
    const { ref } = github.context.payload.pull_request.head;
    console.log(github.context.payload.pull_request);
}
run();