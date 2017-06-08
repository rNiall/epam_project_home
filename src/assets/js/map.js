function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.41085705873785, lng: 13.281021118164029},
        zoom: 2,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        styles: [
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "color": "#cdcdcd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    });

    var locations = [
        {
            title: 'test',
            position: {lat: 62.6349438, lng: 35.9600986},
            icon: {
                url: "assets/img/marker.png",
                scaledSize: new google.maps.Size(18, 27)
            }

        },
        {
            title: 'test',
            position: {lat: 55.82740807, lng: 26.1163486},
            icon: {
                url: "assets/img/marker.png",
                scaledSize: new google.maps.Size(18, 27)
            }
        },
        {
            title: 'test',
            position: {lat: 52.53782677, lng: 19.4366611},
            icon: {
                url: "assets/img/marker.png",
                scaledSize: new google.maps.Size(18, 27)
            }
        },{
            title: 'test',
            position: {lat: 46.3790165, lng: 33.1475986},
            icon: {
                url: "assets/img/marker.png",
                scaledSize: new google.maps.Size(18, 27)
            }
        },{
            title: 'test',
            position: {lat: 42.36043147, lng: 126.6632236},
            icon: {
                url: "assets/img/marker.png",
                scaledSize: new google.maps.Size(18, 27)
            }
        },
        {
            title: 'test',
            position: {lat: 34.96008882, lng: -84.9774014},
            icon: {
                url: "assets/img/marker.png",
                scaledSize: new google.maps.Size(18, 27)
            }
        },
        {
            title: 'test',
            position: {lat: 44.90438729, lng: -107.1258389},
            icon: {
                url: "assets/img/marker.png",
                scaledSize: new google.maps.Size(18, 27)
            }
        }
    ];

    locations.forEach( function( element, index ){
        var marker = new google.maps.Marker({
            position: element.position,
            map: map,
            title: element.title,
            icon: element.icon
        });
    });
}