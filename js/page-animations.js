// loading animation for page transitions

        $(document).ready(function(){
            $('a[href$=".html"]').on('click', function(e){
                var targetUrl = $(this).attr('href');
                if(targetUrl && targetUrl !== window.location.pathname){
                    e.preventDefault();
                    $('.page-transition').addClass('active');
                    setTimeout(function(){
                        window.location.href = targetUrl;
                    }, 600); // Match CSS transition duration
                }
            });
        
            // Animate new page in
            $('.page-transition').css('left', '-100%').addClass('active');
            setTimeout(function(){
                $('.page-transition').removeClass('active');
            }, 600);
        });