export const isEmpty = (obj) => Object.keys(obj).length === 0;
export const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);