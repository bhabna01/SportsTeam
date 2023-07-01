import React, { useEffect, useState } from 'react';
import './Home.css'
import Players from '../Players/Players';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const [search, setSearch] = useState("")
    const [players, setPlayers] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
            .then((res) => res.json())
            .then(data => setPlayers(data?.player))


    }, [search])
    const handleDelete = (id) => {
        const leftPlayer = cart.filter((pd) => pd.idPlayer !== id)
        setCart(leftPlayer)
        toast('Deleted successfully')
    }
    return (
        <div>
            <div className="home-container">
                <div className='left-side'>
                    <input onChange={(e) => setSearch(e.target.value)} type='text' className='search-input'></input>
                    <button className='search-btn'>Search</button>
                    <div className="players">
                        <Players players={players} cart={cart} setCart={setCart}></Players>
                    </div>
                </div>
                <div className='right-side'>
                    <div className="cart">
                        <h1>This is cart</h1>
                        {cart?.map((p) => (
                            <div className="cart-info-container">
                                <li>{p.strPlayer}</li>
                                <button
                                    onClick={() => handleDelete(p.idPlayer)}
                                    className="delete-btn"
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;