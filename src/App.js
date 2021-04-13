import { useState } from 'react';

import UserHome from './pages/usersPage';
import PostHome from './pages/postsPage';
import Navigation from './components/navigation';
import UserProvider from './providers/UserProvider';

import './App.css';

function App() {
  const [page, setPage] = useState({
    userHome: true,
    postHome: false,
  });
  const [currentPage, setCurrentPage] = useState('userHome');

  const onPageChange = (pageKey) => {
    const updateActivePage = { ...page };
    let newCurrentPage = '';
    Object.keys(updateActivePage).forEach((key) => {
      if (key === pageKey) {
        updateActivePage[pageKey] = true;
        newCurrentPage = pageKey;
      } else {
        updateActivePage[key] = false;
      }
    });

    setCurrentPage(newCurrentPage);
    setPage(updateActivePage);
  };

  return (
    <div className="container">
      <Navigation onPageChange={onPageChange} pages={page} />
      <UserProvider>
        {page.userHome && <UserHome page={currentPage} />}
      </UserProvider>
      {page.postHome && <PostHome />}
    </div>
  );
}

export default App;
