const SVG_NS = 'http://www.w3.org/2000/svg';
const DEFAULT_LOGO_SIZE = 16;

export const TERMY_RIBBON_ICON_ID = 'termy-logo';

function createSvgElement<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: Record<string, string>
): SVGElementTagNameMap[K] {
  const el = document.createElementNS(SVG_NS, tag);
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
  return el;
}

export function createTermyLogoSvg(size: number): SVGElement {
  const svg = createSvgElement('svg', {
    width: String(size),
    height: String(size),
    viewBox: '0 0 560 512',
    xmlns: SVG_NS,
    'aria-hidden': 'true',
  });

  const rect = createSvgElement('rect', {
    x: '25',
    y: '45',
    width: '510',
    height: '422',
    rx: '45',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '32',
  });

  const outline = createSvgElement('path', {
    d: 'M95 385 V 125 A 15 15 0 0 1 110 110 H 450 A 15 15 0 0 1 465 125 V 385',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '24',
    'stroke-linecap': 'round',
  });

  const group = createSvgElement('g', {
    stroke: 'currentColor',
    'stroke-width': '28',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  });

  const arrow = createSvgElement('path', {
    d: 'M210 190 L 270 245 L 210 300',
    fill: 'none',
  });
  const line = createSvgElement('line', {
    x1: '295',
    y1: '300',
    x2: '365',
    y2: '300',
  });

  group.append(arrow, line);
  svg.append(rect, outline, group);

  return svg;
}

export function createTermyLogoSvgMarkup(): string {
  const svg = createTermyLogoSvg(DEFAULT_LOGO_SIZE);
  svg.removeAttribute('width');
  svg.removeAttribute('height');
  return svg.outerHTML;
}
