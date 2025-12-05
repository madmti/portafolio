/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly VITE_WEB3FORMS_ACCESS_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
