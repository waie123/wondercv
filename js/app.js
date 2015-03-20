$(function() {
    $('.skill-list li').each(function(i,e) {
        var grade = e.dataset.grade;
        $(this).addClass('text-energized').css({
            'opacity': grade / 10,
            'font-size': (10 * (1 + grade/10)) + 'px',
            'font-weight': 100 * grade
        });
    });
});
