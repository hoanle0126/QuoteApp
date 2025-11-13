import React from 'react';
import { useFavorites } from '../hooks/useFavorites';

function Favorites() {
    // Lấy danh sách và hàm xóa từ hook
    const { favorites, removeFavorite } = useFavorites();

    const handleRemove = (quoteText) => {
        removeFavorite(quoteText);
    };

    return (
        <main>
            <div id="favorites-list">
                {favorites.length === 0 ? (
                    <p>Bạn chưa có quote yêu thích nào.</p>
                ) : (
                    favorites.map((quote, index) => (
                        <div key={index} className="quote-item">
                            <p>"{quote.text}"</p>
                            <p className="author">- {quote.author}</p>
                            <button 
                                className="remove-btn" 
                                onClick={() => handleRemove(quote.text)}
                            >
                                Bỏ thích
                            </button>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}

export default Favorites;