import { colorToInt, intToHex } from './colorUtils';
import * as sRGB from './color/transformSRGB';
import * as LAB from './color/transformCIELAB';
export function parse(theme) {
    const colors = Object.keys(theme);
    const parsedTheme = {};
    for (let i = 0; i < colors.length; ++i) {
        const name = colors[i];
        const value = theme[name];
        parsedTheme[name] = colorToInt(value);
    }
    return parsedTheme;
}
/**
 * Generate the CSS for a base color (.primary)
 */
export const genBaseColor = (name, value) => {
    const rgb = intToHex(value);
    return `
.${name} {
  background-color: ${rgb} !important;
  border-color: ${rgb} !important;
}
.${name}--text {
  color: ${rgb} !important;
}
.${name}--text input,
.${name}--text textarea {
  caret-color: ${rgb} !important;
}`;
};
/**
 * Generate the CSS for a variant color (.primary.darken-2)
 */
export const genVariantColor = (name, value, type, n) => {
    const rgb = intToHex(value);
    return `
.${name}.${type}-${n} {
  background-color: ${rgb} !important;
  border-color: ${rgb} !important;
}
.${name}--text.text--${type}-${n} {
  color: ${rgb} !important;
}
.${name}--text.text--${type}-${n} input,
.${name}--text.text--${type}-${n} textarea {
  caret-color: ${rgb} !important;
}`;
};
export function genVariations(name, value) {
    const values = Array(10);
    values[0] = genBaseColor(name, value);
    for (let i = 1, n = 5; i <= 5; ++i, --n) {
        values[i] = genVariantColor(name, lighten(value, n), 'lighten', n);
    }
    for (let i = 1; i <= 4; ++i) {
        values[i + 5] = genVariantColor(name, darken(value, i), 'darken', i);
    }
    return values;
}
function lighten(value, amount) {
    const lab = LAB.fromXYZ(sRGB.toXYZ(value));
    lab[0] = lab[0] + amount * 10;
    return sRGB.fromXYZ(LAB.toXYZ(lab));
}
function darken(value, amount) {
    const lab = LAB.fromXYZ(sRGB.toXYZ(value));
    lab[0] = lab[0] - amount * 10;
    return sRGB.fromXYZ(LAB.toXYZ(lab));
}