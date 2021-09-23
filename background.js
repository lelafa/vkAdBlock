function VkBlock(className, displayState){
    
    var elements = document.getElementsByClassName(className)
    
    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }

}

window.onscroll = () => VkBlock('_ads_block_data_w', 'none')