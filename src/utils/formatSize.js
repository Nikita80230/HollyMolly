export const formatSize = (size) => {
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