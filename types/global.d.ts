/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

import type { ReactNode } from 'react'

declare global {
    interface Window {
        YT: any
        onYouTubeIframeAPIReady: (() => void) | null
    }

    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any
        }
    }
}

export { } 