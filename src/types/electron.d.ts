declare module 'electron' {
  export interface Shell {
    openExternal: (url: string, options?: { activate?: boolean }) => Promise<void>;
    openPath: (path: string) => Promise<string>;
  }

  export interface WebUtils {
    getPathForFile: (file: File) => string;
  }

  export const shell: Shell;
  export const webUtils: WebUtils | undefined;
}
