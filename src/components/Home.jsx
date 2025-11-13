import React, { useState } from "react"; // 💡 Bỏ useEffect và useCallback
import { useFavorites } from "../hooks/useFavorites";

function Home({ quotes }) {
  // 💡 THAY ĐỔI 1: Dùng state để lưu chỉ số (index) hiện tại
  const [currentIndex, setCurrentIndex] = useState(() => {
    return Math.floor(Math.random() * quotes.length);
  });

  // Bỏ state: const [currentQuote, setCurrentQuote] = useState(null);

  const [isFading, setIsFading] = useState(false);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  // 💡 THAY ĐỔI 2: Quote hiện tại được LẤY RA từ index
  // Nó không còn là một state riêng nữa
  const currentQuote = quotes[currentIndex];

  // 💡 THAY ĐỔI 3: Bỏ hàm getRandomQuote()
  // 💡 Bỏ luôn cả useEffect() tải quote lần đầu (vì useState(0) đã lo việc đó)

  // Hàm xử lý khi nhấn "Quote Mới" (có hiệu ứng)
  const handleNewQuote = () => {
    setIsFading(true);
    setTimeout(() => {
      // 💡 THAY ĐỔI 4: Logic chuyển sang quote tiếp theo
      // Dùng toán tử Modulo (%) để tự động quay lại 0 khi đến cuối mảng
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);

      setIsFading(false);
    }, 400);
  };

  // Xử lý khi nhấn nút Yêu thích
  const handleFavoriteClick = () => {
    if (!currentQuote) return;

    if (isFavorite(currentQuote.text)) {
      removeFavorite(currentQuote.text);
    } else {
      addFavorite(currentQuote);
    }
  };

  // (Các logic còn lại không cần thay đổi)
  const isFavorited = currentQuote ? isFavorite(currentQuote.text) : false;
  const favoriteBtnClass = `btn icon-btn ${isFavorited ? "favorited" : ""}`;

  return (
    <main>
      <div
        id="quote-container"
        className={`quote-container ${isFading ? "fade" : ""}`}
      >
        {/* Chúng ta vẫn dùng 'currentQuote' ở đây,
                  nhưng giờ nó được lấy từ 'quotes[currentIndex]'
                */}
        {currentQuote ? (
          <>
            <p id="quote-text">"{currentQuote.text}"</p>
            <p id="quote-author">- {currentQuote.author}</p>
          </>
        ) : (
          <p>Đang tải danh ngôn...</p>
        )}
      </div>

      <div className="actions">
        <button
          id="favorite-btn"
          className={favoriteBtnClass}
          onClick={handleFavoriteClick}
        >
          ❤️
        </button>
        <button id="new-quote-btn" className="btn" onClick={handleNewQuote}>
          Quote Mới
        </button>
      </div>
    </main>
  );
}

export default Home;
