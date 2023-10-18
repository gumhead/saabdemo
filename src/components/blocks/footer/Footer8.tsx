import { FC } from 'react';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //

const Footer8: FC = () => {
  return (
    <footer className="bg-dark text-inverse mb-n6 mt-11">
      <div className="container py-8 py-md-8">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <div className="widget">
                <div className="navbar-brand w-100">
                  <h3 className="fs-30 mb-0 text-primary">
                    headlesstest
                  </h3>
                </div>
                <p className="mb-4">
                  © 2022 headlesstest <br className="d-none d-lg-block" />
                </p>
              </div>
            </div>
          </div>
          {/*styling spaces*/}
          <div className="col-md-4 col-lg-3">
          </div>
          {/*styling spaces*/}
          <div className="col-md-4 col-lg-3">
          </div>

          <div className="col-md-12 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">kontakta</h4>
              <NextLink title="info@mail.com " href="mailto:info@mail.com " />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer8;
