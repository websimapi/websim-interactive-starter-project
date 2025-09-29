import { getRandomColor } from 'utils';

document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.getElementById('actionButton');
    const messageElement = document.getElementById('message');
    const body = document.body;

    let clickCount = 0;

    actionButton.addEventListener('click', () => {
        // Generate a new background color
        const newColor = getRandomColor();
        body.style.backgroundColor = newColor;
        
        clickCount++;
        
        // Update the message
        messageElement.textContent = `You changed the color ${clickCount} time${clickCount === 1 ? '' : 's'}! Current color: ${newColor}`;
        
        // Optionally adjust text color for contrast (simple logic)
        // Note: Full contrast calculation is more complex, this is just a quick visual change if needed.
        // If the color is very dark, make the container text lighter.
        
        const container = document.getElementById('container');
        // Check relative luminance (simple approximation for darkness)
        const r = parseInt(newColor.substring(1, 3), 16);
        const g = parseInt(newColor.substring(3, 5), 16);
        const b = parseInt(newColor.substring(5, 7), 16);
        
        // Using W3C luminance approximation: (0.299*R + 0.587*G + 0.114*B)
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255; 

        // If luminance is low (dark color), ensure container text is white for contrast
        if (luminance < 0.5) {
            container.style.color = '#fff';
            actionButton.style.backgroundColor = '#66a3ff'; // Lighter button if background is dark
        } else {
            container.style.color = '#333';
            actionButton.style.backgroundColor = '#007bff';
        }
    });
});

