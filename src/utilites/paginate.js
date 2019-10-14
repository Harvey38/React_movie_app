export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const finalIndex = startIndex + pageSize;
  return items.slice(startIndex, finalIndex);
}
