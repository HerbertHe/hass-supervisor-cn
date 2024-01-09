import path from "path"

import { SUPERVISOR_PATH } from "../consts.js"

export const TARGET_CONST_PY_PATH = path.join(SUPERVISOR_PATH, "const.py")

const TARGET_HOMEASSISTANT_MODULE_PY_PATH = path.join(
    SUPERVISOR_PATH,
    "homeassistant",
    "module.py"
)

const TARGET_PLUGINS_BASE_PY_PATH = (SUPERVISOR_PATH, "plugins", "base.py")

export const TARGET_FILES = [
    TARGET_HOMEASSISTANT_MODULE_PY_PATH,
    TARGET_PLUGINS_BASE_PY_PATH,
]

export const targets_kv = new Map([
    [
        "URL_HASSIO_APPARMOR",
        "https://version.ha.ibert.me/apparmor_{channel}.txt",
    ],
    ["URL_HASSIO_VERSION", "https://version.ha.ibert.me/{channel}.json"],
])
