export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll(/[^\w-]+/g, '')
    .replaceAll(/--+/g, '-');
};
