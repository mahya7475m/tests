import React from 'react';

const Coin = ({ name, symbol, volume, price, image, priceChange, marketcap }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volom" >${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="red">{priceChange}%</p>) : (
                        <p className="green">{priceChange}%</p>)}
                    <p className="coin_marke">market:{marketcap.toLocaleString()}</p>

                </div>

            </div>
        </div>
    );
}

export default Coin;