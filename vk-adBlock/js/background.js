const resize_ob = new ResizeObserver(function(entries) {

    function vkBlock(displayState, ...className ){

        let element = document.getElementsByClassName(...className)

        for (let i = 0; i < element.length; i++){
                element[i].style.display = displayState;
        }

    }

    vkBlock( 'none', '_ads_block_data_w', 'apps_feedRightAppsBlock__row', 'ads_ads_box')
});

resize_ob.observe(document.querySelector("#feed_rows"));