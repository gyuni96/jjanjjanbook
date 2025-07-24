import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

// 테마 상태
export const themeAtom = atomWithStorage("theme", "light")
