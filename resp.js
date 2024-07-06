// Javascript code for burger class

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav_list = document.querySelector('.nav_list')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    nav_list.classList.toggle('v-class');
})


// Javascript code for projects page

document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const textElements = document.querySelectorAll('.project_abstract');

    readMoreButtons.forEach((readMoreBtn, index) => {
        const text = textElements[index];
        readMoreBtn.addEventListener('click', () => {
            text.classList.toggle('show_more');
            if (readMoreBtn.innerText === 'read more') {
                readMoreBtn.innerText = 'read less';
            } else {
                readMoreBtn.innerText = 'read more';
            }
        });
    });
});


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

