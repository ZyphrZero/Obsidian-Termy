/**
 * 终端插件设置标签页
 * 提供终端配置界面
 */

import type { App } from 'obsidian';
import { PluginSettingTab, setIcon } from 'obsidian';
import type TerminalPlugin from '../main';
import { TerminalSettingsRenderer } from './renderers/terminalSettingsRenderer';
import type { RendererContext } from './types';
import { t } from '../i18n';

/**
 * 终端设置标签页类
 */
export class TerminalSettingTab extends PluginSettingTab {
  plugin: TerminalPlugin;
  private terminalRenderer: TerminalSettingsRenderer;
  private expandedSections: Set<string> = new Set();

  constructor(app: App, plugin: TerminalPlugin) {
    super(app, plugin);
    this.plugin = plugin;
    this.terminalRenderer = new TerminalSettingsRenderer();
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    // 添加主容器类
    containerEl.addClass('terminal-settings-container');

    // 渲染头部区域
    this.renderHeader(containerEl);

    // 内容容器
    const contentEl = containerEl.createDiv({ cls: 'terminal-settings-content' });

    // 创建渲染器上下文
    const context: RendererContext = {
      app: this.app,
      plugin: this.plugin,
      containerEl: contentEl,
      expandedSections: this.expandedSections
    };

    // 渲染终端设置
    this.terminalRenderer.render(context);
  }

  /**
   * 渲染头部区域
   */
  private renderHeader(containerEl: HTMLElement): void {
    const headerEl = containerEl.createDiv({ cls: 'terminal-settings-header settings-header' });

    // 标题行（包含 icon、标题和重载按钮）
    const titleRow = headerEl.createDiv({ cls: 'settings-title-row' });

    // 左侧：Logo + 标题
    const titleGroup = titleRow.createDiv({ cls: 'settings-title-group' });
    
    // 添加 Termy Logo
    const iconContainer = titleGroup.createDiv({ cls: 'settings-title-icon' });
    iconContainer.innerHTML = `<svg width="32" height="32" viewBox="0 0 560 512" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="45" width="510" height="422" rx="45" fill="none" stroke="currentColor" stroke-width="32"/>
      <path d="M95 385 V 125 A 15 15 0 0 1 110 110 H 450 A 15 15 0 0 1 465 125 V 385" fill="none" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>
      <g stroke="currentColor" stroke-width="28" stroke-linecap="round" stroke-linejoin="round">
        <path d="M210 190 L 270 245 L 210 300" fill="none"/>
        <line x1="295" y1="300" x2="365" y2="300"/>
      </g>
    </svg>`;

    const titleEl = titleGroup.createEl('h2', { text: t('settings.header.title') });
    titleEl.addClass('settings-title');

    // 右侧：反馈链接 + 重载按钮
    const actionsGroup = titleRow.createDiv({ cls: 'settings-actions-group' });
    
    const feedbackContainer = actionsGroup.createDiv({ cls: 'settings-feedback' });
    feedbackContainer.appendText(t('settings.header.feedbackText'));
    feedbackContainer.createEl('a', {
      text: t('settings.header.feedbackLink'),
      href: 'https://github.com/ZyphrZero/Termy'
    });

    const reloadBtn = actionsGroup.createEl('button', { cls: 'clickable-icon' });
    setIcon(reloadBtn, 'refresh-cw');
    reloadBtn.setAttribute('aria-label', t('settings.header.reload'));
    reloadBtn.addEventListener('click', async () => {
      const pluginId = this.plugin.manifest.id;
      // @ts-expect-error - 访问 Obsidian 内部 API
      await this.app.plugins.disablePlugin(pluginId);
      // @ts-expect-error - 访问 Obsidian 内部 API
      await this.app.plugins.enablePlugin(pluginId);
      // @ts-expect-error - 访问 Obsidian 内部 API
      this.app.setting.openTabById(pluginId);
    });
  }
}
