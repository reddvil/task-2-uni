import PropTypes from 'prop-types';

const Navigation = ({ onPageChange, pages }) => {
  return (
    <header className="header pt-4">
      <h1 className="text-muted">Main</h1>
      <nav className="navbar navbar-dark">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${pages.todoHome ? 'active' : ''}`}
              onClick={() => onPageChange('userHome')}>
              Users Page
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${pages.counterHome ? 'active' : ''}`}
              onClick={() => onPageChange('postHome')}>
              Posts Page
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  pages: PropTypes.object.isRequired,
};

export default Navigation;
