import React from 'react';
import json2xls from 'json2xls';

function ExportFile({ data, fileName }) {
  const handleExport = () => {
    const xls = json2xls(data);
    const blob = new Blob([xls], { type: 'application/vnd.ms-excel' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4 className="m-0">List of Items</h4>
      <button className="btn btn-primary" onClick={handleExport}>
        Export to Excel
      </button>
    </div>
  );
}

export default ExportFile;