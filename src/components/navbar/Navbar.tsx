import Link from 'next/link';
import LinkType from '../../../src/types/link';
import { FC, Fragment, ReactElement, useRef } from 'react';
// -------- custom hook -------- //
import useSticky from '../../../src/hooks/useSticky';
import useNestedDropdown from '../../../src/hooks/useNestedDropdown';
// -------- custom component -------- //
import NextLink from '../../../src/components/reuseable/links/NextLink';
import ListItemLink from '../../../src/components/reuseable/links/ListItemLink';
import DropdownToggleLink from '../../../src/components/reuseable/links/DropdownToggleLink';

// -------- partial header component -------- //
import Search from './partials/Search';
// -------- data -------- //
import {
  pages,
  projectsNavigation,
} from '../../../src/data/navigation';

// ===================================================================
type NavbarProps = {
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {
  const { navClassName, search, button, fancy, navOtherClass, stickyBox, logoAlt } =
    props;

  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo' : logoAlt ?? 'logo';
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink href="/" title={<img alt="logo" src={`/img/${logo}.png`} srcSet={`/img/${logo}.png 2x`} />} />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">SAABTEST</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">

            {/*  ===================== pages nav item  ===================== */}
            <li className="nav-item dropdown">
              <DropdownToggleLink title="Pages" className="nav-link dropdown-toggle" />

              <ul className="dropdown-menu">
                {pages.map(({ id, title, children }) => {
                  return (
                    <li className="dropdown dropdown-submenu dropend" key={id}>
                      <DropdownToggleLink title={title} className="dropdown-item dropdown-toggle" />
                      <ul className="dropdown-menu">{renderLinks(children)}</ul>
                    </li>
                  );
                })}
              </ul>
            </li>

            {/* ===================== projects nav item  ===================== */}
            <li className="nav-item dropdown">
              <DropdownToggleLink title="Projects" className="nav-link dropdown-toggle" />
              <div className="dropdown-menu dropdown-lg">
                <div className="dropdown-lg-content">
                  {projectsNavigation.map(({ title, children }, i) => (
                    <div key={title + i}>
                      <h6 className="dropdown-header">{title}</h6>
                      <ul className="list-unstyled">{renderLinks(children)}</ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* ============= search icon button ============= */}
          {search && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" />
              </a>
            </li>
          )}

          {/* ============= hamburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>
      {/* ============= show search box ============= */}
      {search && <Search />}
    </Fragment>
  );
};

Navbar.defaultProps = {
  search: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
