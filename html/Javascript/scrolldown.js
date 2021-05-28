
    alert ("Selamat Datang di Website Dealer Honda");   


    $(document).ready(function() {
        $("contact").click(function() {
            $("html, body").animate({
                scrollTop: $(
                    'html, body').get(0).scrollHeight
            }, 9999);
        });
    });
