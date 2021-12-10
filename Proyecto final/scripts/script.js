$(".electrica2").hover(
    function () {
        $(this).removeClass('zoomin').addClass('over');
    },
    function () {
        $(this).removeClass('over').addClass('out');
    }
);
