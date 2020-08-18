function modalWindow(modalWindow, closebtn, openbtn){
    let window = document.querySelector('.' + modalWindow),
        close = document.querySelector('.' + closebtn),
        button = document.querySelector('.' + openbtn);

    button.addEventListener('click', function() {
        window.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        window.style.display = 'none';
        button.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
}