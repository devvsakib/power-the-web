/// <reference types="vite/client" />

// Declare env types here
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ImportMetaEnv {}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare const env: ImportMetaEnv
