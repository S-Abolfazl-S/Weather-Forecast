$(() => {
    let searchBox = document.querySelector('#searchBox');
    let btn = document.querySelector('#searchBtn');
    let input = document.querySelector('#searchBox>input');
    let li = document.querySelectorAll('nav>ul>li');
    $(window).on('resize load', e => {
        if (window.innerWidth < 400) {
            $('#searchBox , #searchBox *').css({ width: '100%', margin: '5px 0' });
            $(btn).html('search');
            // 
            $(li).css({ 'width': '100%', 'margin': '0 0 10px 0' });
            // 
            $(li).children('a').removeClass('btn-outline-light')
            $(li).children('a').addClass('btn-danger')
        } else {
            $(searchBox).css({ width: '50%', margin: 'auto' });
            $(btn).css({ width: 'auto', 'margin': 'auto auto auto 0' });
            $(input).css({ width: '70%', 'margin': 'auto 10px auto auto ' });
            $(btn).html('<i class="fa fa-search"></i>')
            // 
            $(li).css({ 'width': '150px', 'margin-left': '10px' });
            //
            $(li).children('a').removeClass('btn-danger')
            $(li).children('a').addClass('btn-outline-light')

        }
    });

});