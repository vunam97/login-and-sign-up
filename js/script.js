$(Document).on('click', '.login-btn, .sign-up-btn', function(){
    $('.main').addClass('main-active')
})

$(Document).on('click', '.login-btn', function(){
    $('.side-login').addClass('side-login-active')
})

$(Document).on('click', '.sign-up-btn', function(){
    $('.side-sign-up').addClass('side-sign-up-active')
})