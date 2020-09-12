export default function filterName(name: string) {
  let filter = name.split('.')[0].replace(/-/g, ' ');
  return filter = filter.toLowerCase()
    .replace(/(?:^|\s)\S/g, (letter: string) => 
      letter.toUpperCase());
}