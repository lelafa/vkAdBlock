const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        if(entry.contentBoxSize) {
            function VkBlock(displayState, ...className ){
                
                var elements = document.getElementsByClassName(className)
                
                for (var i = 0; i < elements.length; i++){
                    elements[i].style.display = displayState;
                    console.log(loop)
                }
                console.log('runned')

            }

            VkBlock( 'none', '_ads_block_data_w', 'apps_feedRightAppsBlock__row')
        }
    }
console.log('Size changed');
});
//window.onscroll = () => VkBlock( 'none', '_ads_block_data_w', 'apps_feedRightAppsBlock__row')
resizeObserver.observe(document.getElementsByClassName('upanel').item(0));
