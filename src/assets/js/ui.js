$(function(){

    // sidenav
    $("#sidenav li.has-depth-nav > a").on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        

        if($this.hasClass('is-active')) {
            $this.removeClass('is-active');
        } else {
            $("#sidenav li.has-depth-nav > a").removeClass('is-active');
            $this.addClass('is-active');
        }
    });

    // .case-view
    $(".case-view button").on('click', function(e){
        e.preventDefault();

        var $this = $(this), id = $this.attr('id');

        if(id == 'toggle-darkmode') {
            $("body").toggleClass('dark-mode');
        }
    });

});