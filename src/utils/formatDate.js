 export const formatDate = (isoDateString) => {
        const date = new Date(isoDateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Місяці починаються з 0
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };