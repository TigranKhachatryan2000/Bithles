let selectedValue = document.getElementById("mode");
selectedValue.addEventListener('click', () => {
    if( selectedValue.value === 'light' ) {
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'rgb(216, 212, 212)';
    }
    else if( selectedValue.value === 'dark' ) {
        document.body.style.color = 'white';
        document.body.style.backgroundColor = 'rgb(32, 31, 31)';
    }
});