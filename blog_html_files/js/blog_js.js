document.getElementById('toggleButton').addEventListener('click', function() {
    const hiddenElements = document.querySelectorAll('.hidden');
    const button = this;

    hiddenElements.forEach(element => {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });

    if (button.textContent === 'See less images') {
        button.textContent = 'See more images';
    } else {
        button.textContent = 'See less images';
    }
});



// JS for theme change

// document.getElementById('moon').addEventListener('click', ()=> {
//     document.body.classList.toggle('dark')
// })
// document.getElementById('sun').addEventListener('click', ()=> {
//     document.body.classList.toggle('dark')
// })

// Javascript for theme change


document.querySelectorAll('.theme_icon').forEach(icon => {
    
    icon.addEventListener('click', () => {

        document.body.classList.toggle('dark');

        if(document.body.classList.contains('dark')){
            document.getElementById('sun').classList.remove('no_display');
            document.getElementById('moon').classList.add('no_display');
            return localStorage.setItem('curr_mode', 'dark');
        } else {
            document.getElementById('sun').classList.add('no_display');
            document.getElementById('moon').classList.remove('no_display');
            return localStorage.setItem('curr_mode', 'light');
        }
    });
    
});

// Js for dark mode in all the pages



function onload() {

    let current_mode = localStorage.getItem('curr_mode');

    if (!current_mode) {
        current_mode = 'light';
        localStorage.setItem('curr_mode', current_mode);
    }

    if (current_mode === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('sun').classList.remove('no_display');
        document.getElementById('moon').classList.add('no_display');
    } else {
        document.body.classList.remove('dark');
        document.getElementById('sun').classList.add('no_display');
        document.getElementById('moon').classList.remove('no_display');
    }

}
