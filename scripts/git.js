import "zx/globals"
import { SUPERVISOR_REPO_URL } from "./consts.js"

/**
 * clone supervisor repo
 */
export const clone_supervisor_repo = async () => {
    try {
        await $`git clone -b main ${SUPERVISOR_REPO_URL} raw_source`.pipe(
            process.stdout
        )
    } catch (e) {
        throw new Error(`Clone Error: ${e}`)
    }
}
