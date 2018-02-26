import * as React from 'react';

const MenuItem = ({active, url, title, children}: { active: boolean, url: string, title: string, children?: any }) => (
  <li className={active ? 'active' : ''}>
    <a href={url} title={title}>{children}</a>
  </li>
);

export default ({name}: { name: string }) => (
<nav>
  <div className='nav-wrapper white'>
        <a className='brand-logo center'><span><div className='container'><img style={{ maxHeight: '100%', width: 'auto' }} src='/images/logo.png'/></div></span></a>
  </div>
</nav>
);
