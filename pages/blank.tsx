import { Fragment } from 'react';
import type { NextPage } from 'next';

const Blank: NextPage = () => {
    return (
        <Fragment>
            {/* ========== header section ========== */}
            <header className="wrapper mb-1">

            </header>

            <main className="content-wrapper">
                <div className='container'>
                    <h1>This is blank page</h1>
                </div>

            </main>

        </Fragment>
    )
}

export default Blank;
