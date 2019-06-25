USE maxk_tmt;

CREATE TABLE tourItems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    place VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    event VARCHAR(200) DEFAULT NULL
);

INSERT INTO tourItems(date, place, city, event)
VALUES
    (
        '2016-12-03',
        'Cousteau',
        'Uppsala',
        'https://www.facebook.com/events/214858735617336/'
    ),
    (
        '2016-10-29',
        'Norrlands Nation',
        'Uppsala',
        NULL
    ),
    (
        '2016-10-22',
        'Borgen',
        'Uppsala',
        NULL
    ),
    (
        '2016-09-08',
        'Borgen',
        'Uppsala',
        'https://www.facebook.com/events/300722853641291/'
    ),
    (
        '2016-08-25',
        'Botaniska Trädgården',
        'Uppsala',
        NULL
    ),
    (
        '2016-06-17',
        'Kings Table',
        'Stockholm',
        'https://www.facebook.com/events/1156129114407406/'
    ),
    (
        '2016-06-15',
        'Borgen',
        'Uppsala',
        NULL
    ),
    (
        '2016-06-04',
        'Borgen',
        'Uppsala',
        NULL
    ),
    (
        '2016-05-27',
        'Borgen',
        'Uppsala',
        'https://www.facebook.com/events/802731679828646/'
    ),
    (
        '2016-05-19',
        'Cantina Real',
        'Stockholm',
        'https://www.facebook.com/events/1088966211165054/'
    ),
    (
        '2016-05-18',
        'Borgen',
        'Uppsala',
        'https://www.facebook.com/events/1156129114407406/'
    ),
    (
        '2016-05-15',
        'Borgen',
        'Uppsala',
        'https://www.facebook.com/events/1156129114407406/'
    ),
    (
        '2016-04-15',
        'Broder Tuck',
        'Stockholm',
        'https://www.facebook.com/events/524190741114881'
    ),
    (
        '2017-06-15',
        'PSB',
        'Stockholm',
        NULL
    ),
    (
        '2017-06-04',
        'Base 10',
        'Uppsala',
        'https://www.facebook.com/events/383014042093433/'
    ),
    (
        '2017-07-29',
        'Kinnekulle',
        'Lidköping',
        NULL
    ),
    (
        '2017-08-05',
        'Creperie Lemoni',
        'Uppsala',
        NULL
    ),
    (
        '2017-08-11',
        'Gamleby',
        'Gamleby',
        NULL
    ),
	(
		'2017-11-30',
		'Clarion Hotel Sign',
		'Stockholm',
		NULL
	)
    ;
