import { useState, useEffect, useCallback } from 'react';
import { Storage } from '@capacitor/storage';

const FAVORITES_KEY = 'favorites';

export function useFavorites() {
    const [favorites, setFavorites] = useState([]);
    
    // Tải danh sách yêu thích khi hook được khởi tạo
    useEffect(() => {
        async function loadFavorites() {
            try {
                const { value } = await Storage.get({ key: FAVORITES_KEY });
                if (value) {
                    setFavorites(JSON.parse(value));
                }
            } catch (e) {
                console.error("Lỗi khi tải favorites:", e);
            }
        }
        loadFavorites();
    }, []);

    // Hàm lưu danh sách mới vào Storage
    const saveToStorage = useCallback(async (newFavorites) => {
        try {
            await Storage.set({
                key: FAVORITES_KEY,
                value: JSON.stringify(newFavorites)
            });
            setFavorites(newFavorites); // Cập nhật state
        } catch (e) {
            console.error("Lỗi khi lưu favorites:", e);
        }
    }, []);

    // Hàm thêm một quote
    const addFavorite = useCallback((quote) => {
        const newFavorites = [...favorites, quote];
        saveToStorage(newFavorites);
    }, [favorites, saveToStorage]);

    // Hàm xóa một quote
    const removeFavorite = useCallback((quoteText) => {
        const newFavorites = favorites.filter(q => q.text !== quoteText);
        saveToStorage(newFavorites);
    }, [favorites, saveToStorage]);

    // Hàm kiểm tra
    const isFavorite = useCallback((quoteText) => {
        return favorites.some(q => q.text === quoteText);
    }, [favorites]);

    // Trả về các hàm và state để component sử dụng
    return { favorites, addFavorite, removeFavorite, isFavorite };
}