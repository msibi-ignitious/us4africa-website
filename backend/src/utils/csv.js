// Convert values to safe CSV cells.
export function csvCell(value) {
  if (value === null || value === undefined) {
    return '';
  }

  let text = String(value);

  // Prevent spreadsheet formula injection.
  // A value beginning with =, +, -, or @ could be interpreted as a formula.
  if (/^[\s]*[=+\-@]/.test(text)) {
    text = `'${text}`;
  }

  // Escape quotes and wrap cells containing CSV special characters.
  return `"${text.replace(/"/g, '""')}"`;
}

export function toCsv(headers, rows) {
  const headerLine = headers.map(csvCell).join(',');

  const dataLines = rows.map(row =>
    row.map(csvCell).join(',')
  );

  // UTF-8 BOM helps spreadsheet applications recognise UTF-8.
  return '\uFEFF' + [headerLine, ...dataLines].join('\r\n');
}