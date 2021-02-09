import React from 'react';

const RecordsContext = React.createContext({
    records: [
        {
            id: x,
            artist: x,
            album_title: x,
            album_cover: x,        
            genre: x
        },
        {
            id: 1,
            artist: "Diana Ross",
            album_title: "diana",
            album_cover: "https://www.albumartexchange.com/coverart/gallery/di/dianaross_diana_71q.jpg",        
            genre: "r&b"
        },
        {
            id: 2,
            artist: "Maxwell",
            album_title: "BLACKsummer's Night",
            album_cover: "https://www.albumartexchange.com/coverart/gallery/ma/maxwell_blacksummersnight_2a0t.jpg",        
            genre: "r&b"
        },
        {
            id: 3,
            artist: "Kendrick Lamar",
            album_title: "DAMN",
            album_cover: "https://www.albumartexchange.com/coverart/gallery/ke/kendricklamar_damncollectorseditio_aiug.jpg",        
            genre: "rap"
        },
        {
            id: 4,
            artist: "Amy Winehouse",
            album_title: "Back to Build",
            album_cover: "https://www.albumartexchange.com/coverart/gallery/am/amywinehouse_backtoblackdeluxeedi_7hcc.jpg",        
            genre: "r&b"
        },
    ]
})