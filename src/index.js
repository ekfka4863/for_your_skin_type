import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// skinType - 보낼때
fetch('http://localhost:9090/items/skintype', {   //  items/skintype
   method: 'POST',
   body: {
      임의로성정한key : {
         "skinType": "민감성"              
      }
   }
});

// brand - 보낼때
fetch('http://localhost:9090/____', {   //    items/drjart / items/innisfree / ...                                                                       
   method: 'POST',
   body: {
      임의로성정한key : {
         "brand": "drjart"         
      }
   }
});

