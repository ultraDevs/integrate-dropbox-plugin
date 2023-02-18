import React from 'react';


const Header = ( ) => {
    return (
        <div className='flex items-center justify-center py-6 mb-5 bg-white shadow-xs'>
            <h1 className='mr-2 text-3xl'>Integrate Dropbox</h1>
            <span className='px-2 py-0.5 text-[10px] text-white bg-indigo-400 rounded-xs'>{ IDBAdmin.version }</span>
        </div>
    );
};

export default Header;