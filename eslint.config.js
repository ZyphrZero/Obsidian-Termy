import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default [
  // JavaScript 基础规则 (继承 ESLint 推荐配置)
  js.configs.recommended,

  // TypeScript/TSX 文件规则
  {
    files: ['src/**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Obsidian 全局变量
        ObsidianModAPI: 'readonly',
        requestUrl: 'readonly',
        // 浏览器环境 (Obsidian Electron 应用环境)
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        navigator: 'readonly',
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLButtonElement: 'readonly',
        Element: 'readonly',
        Node: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        DOMRect: 'readonly',
        ResizeObserver: 'readonly',
        SVGElement: 'readonly',
        SVGElementTagNameMap: 'readonly',
        Blob: 'readonly',
        MessageEvent: 'readonly',
        WheelEvent: 'readonly',
        DOMParser: 'readonly',
        atob: 'readonly',
        requestAnimationFrame: 'readonly',
        // Node.js 环境 (Electron 主进程通信)
        process: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        Buffer: 'readonly',
        WebSocket: 'readonly',
        TextEncoder: 'readonly',
        TextDecoder: 'readonly',
        URL: 'readonly',
        require: 'readonly',
        NodeJS: 'readonly',
      },
    },
    rules: {
      // TypeScript 相关规则
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      // 禁用未使用变量检查（对于开发中的插件项目过于严格）
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      // 对于 Obsidian 插件，禁用 no-undef 因为浏览器/Node API 在该环境中可用
      'no-undef': 'off',
    },
  },

  // 忽略规则
  {
    ignores: [
      'node_modules/',
      'dist/',
      '*.config.mjs',
      'scripts/',
      'main.js',
      'styles.css',
      'rust-servers/',
      'binaries/',
      'plugin-package/'
    ],
  },
];
