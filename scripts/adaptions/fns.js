import fs from "fs"
import { targets_kv, TARGET_FILES, TARGET_CONST_PY_PATH } from "./targets.js"

/**
 * 替换 version url
 * @param {string} s
 * @returns
 */
const replace_version_url = (s) =>
    s.replace(
        /URL_HASSIO_VERSION\s*=\s*"([^"]+)"/,
        `URL_HASSIO_VERSION = "${targets_kv.get("URL_HASSIO_VERSION")}"`
    )

/**
 * 替换 apparmor url
 * @param {string} s
 * @returns
 */
const replace_apparmor_url = (s) =>
    s.replace(
        /URL_HASSIO_APPARMOR\s*=\s*"([^"]+)"/,
        `URL_HASSIO_APPARMOR = "${targets_kv.get("URL_HASSIO_APPARMOR")}"`
    )

/**
 * 对 `const.py` 文件进行替换
 */
export const replace_const_url_with_write = () => {
    const content = fs.readFileSync(TARGET_CONST_PY_PATH, "utf8")
    const res = replace_version_url(replace_apparmor_url(content))
    fs.writeFileSync(TARGET_CONST_PY_PATH, res)

    console.log(`Adapt ${TARGET_CONST_PY_PATH} finished!`)
}

/**
 * 对兜底文件进行替换
 * @returns
 */
export const replace_hard_code_url_with_write = () => {
    TARGET_FILES.forEach((path) => {
        const content = fs.readFileSync(path, "utf8")
        const res = content.replace(`f"ghcr.io/`, `f"ghcr.nju.edu.cn/`)
        fs.writeFileSync(path, res)

        console.log(`Adapt ${path} finished!`)
    })
}
