function changeTabs(headerTab, tabContent, tabBlock) {
    window.addEventListener('DOMContentLoaded', function() {

        'use strict';
        let tab = document.querySelectorAll('.' + headerTab),
            content = document.querySelectorAll('.' + tabContent),
            info = document.querySelector('.' + tabBlock);
    
        function hideTab(a) {
            for (let i=a; i<content.length;i++) {
                content[i].classList.add('hide');
                content[i].classList.remove('show');
            }
        }
    
        hideTab(1);
    
        function showTab(b) {
            if (content[b].classList.contains('hide')) {
                content[b].classList.add('show');
                content[b].classList.remove('hide');
            }
        }
    
        info.addEventListener('click', function(event){
            if (event.target && event.target.classList.contains(headerTab)){
                for (let i = 0; i<tab.length; i++) {
                    if (event.target == tab[i]){
                        hideTab(0);
                        showTab(i);
                        break;
                    }
                }
            }
        });
    });
}