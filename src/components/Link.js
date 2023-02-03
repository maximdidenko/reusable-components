import { useContext } from 'react';
import NavigationContext from '../context/navigation';
import classNames from 'classnames';

function Link({ to, children, className }) {
  const { navigate, currentPath } = useContext(NavigationContext);

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    navigate(to);
  };

  const classes = classNames('text-blue-500 cursor-pointer', className, {
    'font-bold border-l-4 border-blue-500 pl-2': currentPath === to,
  });

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
