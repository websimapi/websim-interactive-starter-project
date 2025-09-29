/**
 * Generates a random hexadecimal color string.
 * @returns {string} A random hex color (e.g., #A3B1C5).
 */
export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

