export const getDarkModeFromLocalStorage = () => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
};

export const setDarkModeToLocalStorage = (darkMode: boolean) => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
};