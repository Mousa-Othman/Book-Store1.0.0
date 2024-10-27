import React from 'react';
import ReactDOM from 'react-dom/client'; // تأكد من استيراد ReactDOM من client
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../../bookstore/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'; // ربط ملف index.css

const root = ReactDOM.createRoot(document.getElementById('root')); // إنشاء الجذر
root.render(<App />); // استخدام createRoot بدلاً من render
