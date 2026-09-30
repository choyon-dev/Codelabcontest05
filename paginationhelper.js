function getPageMetadata(totalItems, pageSize, currentPage) {

  let totalPages = Math.ceil(totalItems / pageSize);

  if (totalItems === 0) {
    return {
      totalPages: 0,
      startItem: 0,
      endItem: 0,
      hasPrev: false,
      hasNext: false
    };
  }

  let startItem = (currentPage - 1) * pageSize + 1;

  let endItem = currentPage * pageSize;

  if (endItem > totalItems) {
    endItem = totalItems;
  }

  let hasPrev = currentPage > 1;
  let hasNext = currentPage < totalPages;

  return {
    totalPages: totalPages,
    startItem: startItem,
    endItem: endItem,
    hasPrev: hasPrev,
    hasNext: hasNext
  };
}

// let test = getPageMetadata(100, 10, 1);

let test = getPageMetadata(100, 10, 5);



console.log(test)