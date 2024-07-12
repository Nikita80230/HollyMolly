export const formatSize = (size) => {
   if (!size) return size;
  switch(size.toUpperCase()) {
    case 'S':
      return 'S';
    case 'M':
      return 'M';
    case 'L':
      return 'L';
    default:
      return size;
  }
};

