const pictureSize = (selectorBlock) => {
    const blocks = document.querySelectorAll(selectorBlock);

    function showBlok(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + "-1.png";
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideBlok(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + ".png";
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showBlok(block);
        });
        block.addEventListener('mouseout', () => {
            hideBlok(block);
        });
    });


};
export default pictureSize;