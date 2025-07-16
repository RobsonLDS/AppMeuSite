$(document).ready(function () {
    $('#hamburger').click(function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
});