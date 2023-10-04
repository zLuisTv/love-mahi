export const getDarkModeFromLocalStorage = () => {
    if (typeof window === 'undefined') {
      // Verificar si estamos en el entorno del servidor
      return false; // En el servidor, no hay acceso a localStorage
    }
  
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  };
  
  export const setDarkModeToLocalStorage = (darkMode: boolean) => {
    if (typeof window === 'undefined') {
      // Verificar si estamos en el entorno del servidor
      return; // En el servidor, no hay acceso a localStorage
    }
  
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  };