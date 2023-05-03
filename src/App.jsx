import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver'; // If you want to download the PDF

function fillPdf() {
    const json = {
        c1: [
            'Indian Institute of Technology - 1',
            'Resulting Branch -  1',
            'OR -  1',
            'CR -  1',
        ],
        c2: [
            'Indian Institute of Technology - 2',
            'Resulting Branch -  2',
            'OR -  2',
            'CR -  2',
        ],
        c3: [
            'Indian Institute of Technology - 3',
            'Resulting Branch -  3',
            'OR -  3',
            'CR -  3',
        ],
    };

    const options = {
        method: 'POST',
        url: 'https://app.useanvil.com/api/v1/fill/YXj74hzV1jGDoNAqn4dD.pdf',
        headers: {
            'Authorization': 'Basic WEJWejZ6MHZaWU9QVjRNNFRrbGFoSHVrQWpFck9oMWo6',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://app.useanvil.com',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
        data: {
            title: 'College Predictor',
            fontSize: 10,
            textColor: '#333333',
            data: json,
        },
    };

    axios
        .request({
          method: 'POST',
          url: 'https://app.useanvil.com/api/v1/fill/YXj74hzV1jGDoNAqn4dD.pdf',
          headers: {
              'Authorization': 'Basic WEJWejZ6MHZaWU9QVjRNNFRrbGFoSHVrQWpFck9oMWo6',
              'Content-Type': 'application/json'
          },
          data: {
              title: 'College Predictor',
              fontSize: 10,
              textColor: '#333333',
              data: json,
          },
      })
        .then(function(response) {
            const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
            saveAs(pdfBlob, 'a.pdf'); // If you want to download the PDF
            // Alternatively, you can display the PDF in an iframe:
            const pdfUrl = URL.createObjectURL(pdfBlob);
            const iframe = document.createElement('iframe');
            iframe.src = pdfUrl;
            document.body.appendChild(iframe);
        })
        .catch(function(error) {
            console.error(error);
        });
}


function App() {
  return (
    <div className="App">
      <h1>Welcome to my website!</h1>
      <button onClick = { fillPdf }> Fill PDF </button>
    </div>
  );
}

export default App;