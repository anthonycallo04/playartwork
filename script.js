jQuery(document).ready(function($) {
        setInterval(function() {
            $.get('https://live.radiorockhits.com/api/nowplaying/radiorockhits')
                .done(function(data) {

                    const coverImageUrl = data.now_playing.song.art || 'assets/Logoradiorockhits.webp';
                    $('#cover-image').attr('src', coverImageUrl);

                    $('#song-title').text(data.now_playing.song.text || 'Cargando...');

                })
                .fail(function() {
                    $('#cover-image').attr('src', 'assets/Logoradiorockhits.webp');

                    $('#song-title').text('Cargando...');
                })
        }, 1000);
    });
