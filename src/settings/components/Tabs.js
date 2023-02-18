import React from 'react';
import { TabPanel } from '@wordpress/components';
import General from './Contents/General';
// import Content from './Contents/Content';
// import Styling from './Contents/Styling';
// import Advanced from './Contents/Advanced';


const Tabs = ( ) => {

    return (
        <>
            <div className='w-full sm:w-[74%] mb-4 sm:mb-0 rounded-md overflow-hidden'>
                <TabPanel className="ud-tab-panel"
                    activeClass="is-active"
                    initialTabName="general"
                    tabs={ [
                        {
                            name: 'general',
                            title: 'General',
                            className: 'tab-general',
                        },
                        {
                            name: 'content',
                            title: 'Content',
                            className: 'tab-content',
                        },
                        {
                            name: 'styling',
                            title: 'Styling',
                            className: 'tab-styling',
                        },
                        // {
                        //     name: 'advanced',
                        //     title: 'Advanced',
                        //     className: 'tab-advanced',
                        // },
                    ] }>
                    {
                        ( tab ) => {
                            if ( 'general' === tab.name ) {
                                return <General />;
                            }
                            {/* } else if ( 'content' === tab.name ) {
                                return <Content />;
                            } else if ( 'styling' === tab.name ) {
                                return <Styling />;
                            } else if ( 'advanced' === tab.name ) {
                                return <Advanced />;
                            } else {
                                return 'ultraDevs';
                            } */}
                        }
                    }
                </TabPanel>
            </div>
        </>
    );
};

export default Tabs;