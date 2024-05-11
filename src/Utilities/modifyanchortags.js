/**
 * Modifies all anchor tags within the specified element to open in new tabs securely.
 * @param {HTMLElement} element - The DOM element within which to modify anchor tags.
 */
const modifyanchortags = (element) => {
    if (!element) return;
    
    const anchors = element.querySelectorAll('a');
    anchors.forEach(anchor => {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');
    });
  };
  
  export default modifyanchortags;
  