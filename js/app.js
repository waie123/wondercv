$(function() {
    // photo slides
    var curPtr = -1;
    var $photo = $('#overview .photo');
    (function swapPhoto() {
        var photos = [
            'photos/wonder-md.jpg',
            'photos/wonder-rainbow.jpg',
            'photos/wonder-hsjq.jpg',
        ];
        if(curPtr >= photos.length - 1) {
            console.log('new turn');
            curPtr = 0;
        } else {
            curPtr += 1;
        }

        if($photo.attr('src') !== photos[curPtr]) {
            $photo.fadeOut('fast', function(){
                $photo.attr('src', photos[curPtr]);
                $photo.fadeIn('slow');
            });
        }
        setTimeout(swapPhoto, 3500);
    })();


    // Skill list
    $('.skill-list li').each(function(i,e) {
        var grade = e.dataset.grade;
        $(this).addClass('text-energized').css({
            'opacity': grade / 10,
            'font-size': (10 * (1 + grade/10)) + 'px',
            'font-weight': 100 * grade
        });
    });
});
