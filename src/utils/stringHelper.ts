const stringHelper = {
  capitalizeFirstLetter: (s: string) => s.charAt(0).toUpperCase() + s.slice(1),
  removeComma: (str: string): number => parseInt(str.replace(/,/g, '')),
};

export default stringHelper;
