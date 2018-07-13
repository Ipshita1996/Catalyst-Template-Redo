$(document).ready(()=>{
    const $nav=$('.navigation');
    $('.nav-button').on('click', () =>{
        $nav.slideToggle('fast');
    });
});