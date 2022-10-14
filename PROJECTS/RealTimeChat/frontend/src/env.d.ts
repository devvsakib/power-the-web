/// <reference types="vite/client" />

// Declare env types here
interface ImportMetaEnv {}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare const env: ImportMetaEnv
