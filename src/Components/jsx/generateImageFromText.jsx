import html2canvas from 'html2canvas';

export const generateImageFromText = async (text) => {
  // Create a container for the image content
  const container = document.createElement('div');
  container.style.position = 'relative';
  container.style.width = '300px';
  container.style.height = '400px';
  container.style.padding = '20px';
  container.style.background = '#f0f0f0'; // Use a solid background color for testing
  container.style.borderRadius = '15px';
  container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.textAlign = 'center';
  container.style.color = '#000000'; // Dark text color for visibility
  container.style.fontFamily = 'Poppins, sans-serif';
  container.style.overflow = 'hidden'; // Hide overflow

  // Create the text element
  const textElement = document.createElement('div');
  textElement.style.fontSize = '20px'; // Adjust font size if needed
  textElement.style.marginBottom = '10px';
  textElement.style.width = '100%'; // Ensure text wraps within the container
  textElement.style.wordWrap = 'break-word'; // Ensure long words break and wrap
  textElement.style.textOverflow = 'ellipsis'; // Add ellipsis for overflow text
  textElement.style.overflow = 'hidden'; // Hide overflow
  textElement.innerText = text;

  // Create a watermark element
  const watermark = document.createElement('div');
  watermark.style.position = 'absolute';
  watermark.style.bottom = '10px';
  watermark.style.right = '10px';
  watermark.style.fontSize = '12px';
  watermark.style.opacity = '0.5';
  watermark.innerText = 'Made by Arsh';

  // Append elements to the container
  container.appendChild(textElement);
  container.appendChild(watermark);

  // Append the container to the body temporarily
  document.body.appendChild(container);

  // Use html2canvas to generate an image
  const canvas = await html2canvas(container, {
    useCORS: true, // Enable CORS for external images
    logging: true, // Enable logging for debugging
    backgroundColor: null, // Transparent background
  });

  // Convert the canvas to a data URL
  const dataUrl = canvas.toDataURL('image/png');

  // Remove the container from the body
  document.body.removeChild(container);

  return dataUrl;
};
