<div align="center">

# Termy

<img src="assets/termy.svg" width="150" />

*A terminal emulator plugin for Obsidian*

Full terminal emulator with split panes, preset scripts, multiple shells, and native Rust PTY backend.

English / [中文版](./README_ZH.md)

</div>

## Key Advantages (At a Glance)

- **Smaller native backend binary**: Rust PTY backend keeps the runtime package lean.
- **No extra third-party runtime dependency**: No need to install separate bridge services or external terminal runtimes.
- **Faster startup path**: Native backend + direct plugin integration reduces startup overhead.
- **Built for real workflows**: Split panes, multi-session, preset scripts, and drag-to-paste file paths in one plugin.

## Features

- **Full Terminal Experience**: Powered by xterm.js with Canvas/WebGL rendering
- **Cross-Platform Support**: Works on Windows, macOS, and Linux
- **Multiple Shell Support**: 
  - Windows: cmd, PowerShell, WSL, Git Bash
  - macOS/Linux: bash, zsh, custom shells
- **Advanced Features**:
  - Split panes (horizontal/vertical)
  - Multiple terminal sessions
  - Preset scripts
  - Search functionality
  - Font customization
  - Theme support (Obsidian theme or custom)
  - Multi-language support (English, Chinese, Japanese, Korean, Russian)
  - Background images with blur effects
- **Keyboard Shortcuts**:
  - Ctrl+O: Open terminal
  - Ctrl+Shift+R: Clear screen
  - Ctrl+Shift+C/V: Copy/Paste
  - Ctrl+F: Search
  - Ctrl+=/−/0: Zoom in/out/reset
  - Ctrl+Shift+H/J: Split horizontal/vertical

## Demo

<img src="assets/ScreenShot.png" width="600" />  
<img src="assets/ScreenShot2.jpg" width="600" />

## Installation

> **Note**: This plugin is currently under review and is not yet listed in the Obsidian Community Plugins marketplace. Please install it via BRAT or manual installation for now.

### Using BRAT

1. Install [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin first
2. Open BRAT plugin settings, click "Add beta plugin"
3. Enter `ZyphrZero/Termy`
4. Click "Add plugin" to complete the installation
5. Enable the plugin in Settings → Community Plugins

### Manual Installation

1. Download the latest release from [GitHub Releases](https://github.com/ZyphrZero/Termy/releases)
2. Extract the files to your vault's .obsidian/plugins/termy/ directory
3. Reload Obsidian
4. Enable the plugin in Settings → Community Plugins

## License

GPL-3.0 License - see [LICENSE](LICENSE) for details.

## Credits

- Built with [xterm.js](https://xtermjs.org/)
- PTY backend powered by [portable-pty](https://github.com/wez/wezterm/tree/main/pty)
- Inspired by various terminal emulators and Obsidian plugins

## Support

- Report issues: [GitHub Issues](https://github.com/ZyphrZero/Termy/issues)
- Discussions: [GitHub Discussions](https://github.com/ZyphrZero/Termy/discussions)
