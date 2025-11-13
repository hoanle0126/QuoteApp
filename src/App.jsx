import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import './App.css'; // File CSS chung của chúng ta

// Dữ liệu (có thể đặt ở file riêng)
const localQuotes = [
    { text: "Cách tốt nhất để dự đoán tương lai là tạo ra nó.", author: "Peter Drucker" },
    { text: "Cuộc sống là 10% những gì xảy ra với bạn và 90% cách bạn phản ứng với nó.", author: "Charles R. Swindoll" },
    { text: "Không có gì là không thể, từ 'không thể' chính nó nói rằng 'Tôi có thể!' (I'm possible)", author: "Audrey Hepburn" },
    { text: "Hãy giữ lấy ước mơ, vì nếu ước mơ chết, cuộc sống chỉ là một con chim gãy cánh không thể bay.", author: "Langston Hughes" },
    { text: "Bạn không thể thay đổi hướng gió, nhưng bạn có thể điều chỉnh lại cánh buồm.", author: "Jimmy Dean" }
];

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                {/* Layout Header - Luôn hiển thị */}
                <header>
                    <h1>Danh Ngôn</h1>
                    <nav>
                        <Link to="/" className="nav-link">Trang chủ</Link>
                        <Link to="/favorites" className="nav-link">Yêu thích</Link>
                    </nav>
                </header>

                {/* Định nghĩa các trang */}
                <Routes>
                    <Route 
                        path="/" 
                        element={<Home quotes={localQuotes} />} 
                    />
                    <Route 
                        path="/favorites" 
                        element={<Favorites />} 
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;