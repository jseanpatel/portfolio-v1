<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js">
</script>
    <script>
        $("button").click(function() {
            $('html,body').animate({
                scrollTop: $(".content").offset().top
            },
                'slow');
        });
</script>