import React from 'react';
import { CsvToHtmlTable } from 'react-csv-to-table';
import { sampleData1 } from './sample';

export const App = () => {
  const sampleData = sampleData1;

  return (
    <div>
      <CsvToHtmlTable
        data={sampleData}
        csvDelimiter=","
        tableClassName="table table-bordered table-sm table-hover"
        trStyleCallback={(sampleData1) => ({
          color: sampleData1.Status ? 'green' : 'red',
        })}
      />
    </div>
  );
};

export default App;
