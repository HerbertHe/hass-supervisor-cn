import { clone_supervisor_repo } from "./scripts/git.js"
import { run_adapter } from "./scripts/adapter.js"

const run = async () => {
    clone_supervisor_repo().then(() => {
        console.log("Run adapter...")
        run_adapter()
    })
}

run()
