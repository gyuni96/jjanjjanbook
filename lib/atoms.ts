import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

// 테마 상태
export const themeAtom = atomWithStorage("theme", "light")

// 현재 활성화된 페이지 상태
export const activePageAtom = atom("dashboard")
