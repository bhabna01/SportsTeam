import React from 'react';
import './SinglePlayer.css'
const SinglePlayer = ({ player, cart, setCart }) => {

    const { idPlayer, strNationality, strPlayer, strDescriptionEN, strCutout } = player
    const handleAddToCart = () => {
        const info = {
            strNationality, strPlayer, strDescriptionEN, strCutout
            , idPlayer, price: 115
        }
        if (cart?.length) {
            const newPlayer = [...cart, info]
            setCart(newPlayer)
        }
        else {
            setCart([info])
        }
    }
    const handleBookmark = () => {
        const info = {
            strNationality, strPlayer, strDescriptionEN, strCutout
            , idPlayer, qty: 1, bookmark: "true"
        }
        const prevBookmark = localStorage.getItem("bookmark");
        const oldBookmark = JSON.parse(prevBookmark)
        if (oldBookmark) {
            const isExist = oldBookmark.find(p => p.idPlayer === idPlayer)
            if (isExist) {

                isExist.qty = isExist.qty + 1
                localStorage.setItem("bookmark", JSON.stringify(oldBookmark))

                // alert("Already Bookmarked")
                // return
            }
            else {
                localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]))
            }




        }
        else {
            localStorage.setItem("bookmark", JSON.stringify([info]))
        }

    }


    return (
        <div className='card' data-aos="fade-up">
            <img className="player-img" src={strCutout} alt=""></img>
            <h6>{strPlayer}</h6>
            <p>{strDescriptionEN ? strDescriptionEN?.slice(0, 60) : "not found"}</p>
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add to cart</button>
            <button className='card-btn' onClick={handleBookmark}>Bookmark</button>

        </div>
    );
};

export default SinglePlayer;