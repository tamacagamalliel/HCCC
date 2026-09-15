/** Inline before paint to avoid theme flash. Keep in sync with THEME_STORAGE_KEY. */
export const themeInitScript = `(function(){try{var k='hccc-theme';var t=localStorage.getItem(k)||'system';var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`;
