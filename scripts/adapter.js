import fs from "fs"

import { RAW_SOURCE_PATH } from "./consts.js"
import { replace_const_url_with_write, replace_hard_code_url_with_write } from "./adaptions/fns.js"

/**
 * 判断路径是否存在
 * @returns 
 */
const is_raw_source_existed = () => {
    return fs.existsSync(RAW_SOURCE_PATH)
}

export const run_adapter = () => {
    if (!is_raw_source_existed()) {
        throw new Error("Path Error: raw_source directory is not existed!")
    }

    replace_const_url_with_write()
    replace_hard_code_url_with_write()
}