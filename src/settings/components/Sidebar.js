import React from 'react';


const Sidebar = ( ) => {
    return (
        <>
            <div className='w-full sm:w-1/4'>
                <div className='p-6 mb-4 text-white rounded-md shadow-sm bg-secondary'>
                    <h3 className='text-[24px] mb-4 text-white'>Documentation</h3>
                    <p className='text-[17px] text-white mb-8 leading-7'>Do you want to learn more about our products? Reading our documentation will help you to learn and solve your issue. We have documented and documenting almost everything!</p>
                    <a className="inline-block px-5 py-1 leading-8 bg-white rounded-sm text-secondary" href='https://docs.ultradevs.com'>Visit Docs</a>
                </div>
                <div className='p-6 mb-4 bg-white rounded-md shadow-sm'>
                    <h3 className='text-[24px] mb-6'>Connect With US</h3>
                    <ul className='flex flex-row space-x-3 ud-social-icons'>
                        <li>
                            <a href="https://facebook.com/hello.ultradevs" target='_blank'>
                                <img src={ IDBAdmin.assets + 'images/social/facebook.svg' } title='ultraDevs - Facebook' alt='ultraDevs - Facebook' />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ultraDevsBD" target='_blank'>
                                <img src={ IDBAdmin.assets + 'images/social/twitter.svg' } title='ultraDevs - Twitter' alt='ultraDevs - Twitter' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ultradevs/" target='_blank'>
                                <img src={ IDBAdmin.assets + 'images/social/instagram.svg' } title='ultraDevs - Instagram' alt='ultraDevs - Instagram' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCc2yL-QGQjscXpPx9Pp7J8w" target='_blank'>
                                <img src={ IDBAdmin.assets + 'images/social/youtube.svg' } title='ultraDevs - Youtube' alt='ultraDevs - Youtube' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ultradevs/" target='_blank'>
                                <img src={ IDBAdmin.assets + 'images/social/linked-in.svg' } title='ultraDevs - Linked In' alt='ultraDevs - Linked In' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;