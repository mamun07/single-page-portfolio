import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

import theme from './theme/theme';
import Home from './pages/Home';
import Header from './container/header/Header';
import Footer from './container/footer/Footer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Router>
          <Header />
          <Home />
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
