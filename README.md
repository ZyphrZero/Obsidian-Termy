<div align="center">

<svg width="280" height="256" viewBox="0 0 560 512" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="45" width="510" height="422" rx="45" fill="none" stroke="#333136" stroke-width="32"/><path d="M95 385 V 125 A 15 15 0 0 1 110 110 H 450 A 15 15 0 0 1 465 125 V 385" fill="none" stroke="#333136" stroke-width="24" stroke-linecap="round"/><g stroke="#333136" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"><path d="M210 190 L 270 245 L 210 300" fill="none"/><line x1="295" y1="300" x2="365" y2="300" /></g><text x="280" y="405" font-family="Arial, sans-serif" font-size="92" font-weight="bold" fill="#333136" text-anchor="middle">Termy</text></svg>

# Obsidian Termy

</div>

A full-featured terminal plugin for Obsidian with xterm.js and Rust PTY backend.

## Features

- **Full Terminal Experience**: Powered by xterm.js with Canvas/WebGL rendering
- **Cross-Platform Support**: Works on Windows, macOS, and Linux
- **Multiple Shell Support**: 
  - Windows: cmd, PowerShell, WSL, Git Bash
  - macOS/Linux: bash, zsh, custom shells
- **Advanced Features**:
  - Split panes (horizontal/vertical)
  - Multiple terminal sessions
  - Search functionality
  - Font customization
  - Theme support (Obsidian theme or custom)
  - Background images with blur effects
- **Keyboard Shortcuts**:
  - Ctrl+O: Open terminal
  - Ctrl+Shift+R: Clear screen
  - Ctrl+Shift+C/V: Copy/Paste
  - Ctrl+F: Search
  - Ctrl+=/−/0: Zoom in/out/reset
  - Ctrl+Shift+H/J: Split horizontal/vertical

## Installation

### From Obsidian Community Plugins

1. Open Obsidian Settings
2. Go to Community Plugins
3. Search for "Termy"
4. Click Install
5. Enable the plugin

### Manual Installation

1. Download the latest release from [GitHub Releases](https://github.com/ZyphrZero/Obsidian-Termy/releases)
2. Extract the files to your vault's .obsidian/plugins/obsidian-termy/ directory
3. Reload Obsidian
4. Enable the plugin in Settings → Community Plugins

## Usage

1. Press Ctrl+O or use the command palette to open a terminal
2. The terminal will start in your vault directory by default
3. Use the toolbar buttons or right-click menu for additional options

## Configuration

Access plugin settings in Obsidian Settings → Termy to configure:

- Default shell and arguments
- Font size and family
- Cursor style and blinking
- Theme colors
- Background images
- Renderer type (Canvas/WebGL)
- Scrollback buffer size

## Development

See [DEVELOPMENT.md](docs/DEVELOPMENT.md) for build instructions and development guide.

## License

GPL-3.0 License - see [LICENSE](LICENSE) for details.

## Credits

- Built with [xterm.js](https://xtermjs.org/)
- PTY backend powered by [portable-pty](https://github.com/wez/wezterm/tree/main/pty)
- Inspired by various terminal emulators and Obsidian plugins

## Support

- Report issues: [GitHub Issues](https://github.com/ZyphrZero/Obsidian-Termy/issues)
- Discussions: [GitHub Discussions](https://github.com/ZyphrZero/Obsidian-Termy/discussions)
