
 $(document).ready(function() {
 	/**

 	*Scroolhorrizontal
 	**/
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});