var convert = function(s, numRows) {
  if (numRows === 1) return s;

  let y = 0;
  let isZigging = true;
  const rows = [...new Array(numRows)].map(_ => []);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    rows[y].push(char);

    if (y === numRows - 1) isZigging = false;
    if (y === 0) isZigging = true;

    y = isZigging ? y + 1 : y - 1;
  }

  return rows.reduce((string, row) => string + row.join(''), '');
};
