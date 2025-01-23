export const getColorCssVariable = (key) => {
  let keyToSearch = `--${key}`;
  let color = getComputedStyle(document.documentElement).getPropertyValue(
    keyToSearch
  );
  return color;
};
