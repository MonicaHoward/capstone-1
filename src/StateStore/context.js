import React from 'react';

const RecordsContext = React.createContext({
    records: [
        // {
        //     id: x,
        //     artist: x,
        //     album_title: x,
        //     album_cover: x,        
        //     genre: x
        // },
        {
            id: 1,
            artist: "Diana Ross",
            album_title: "diana",
            album_cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",        
            genre: "r&b"
        },
        {
            id: 2,
            artist: "Maxwell",
            album_title: "BLACKsummer's Night",
            album_cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",        
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
        {
            id: 5,
            artist: "Santana",
            album_title: "Santana",
            album_cover: "https://www.albumartexchange.com/coverart/gallery/sa/santana_santana1stalbum_5xv6.jpg",        
            genre: "rock"
        }
    ],
    cart: [

    ]
})



export default RecordsContext