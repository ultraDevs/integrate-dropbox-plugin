import React from 'react';

const Previewer = ( props ) => {

    const { options } = props;
    return (
        <div
            className='px-4 my-6 ud-ud-id-preview sm:ml-5'
            style={{
                '--panel-w': ` ${ options.sl_panel_settings.width }px`,
                '--panel-position': options.sl_panel_settings.position,
                '--panel-font': ` '${options.sl_panel_styles.typo.font_family }', sans-serif`,
                '--panel-font-size': options.sl_panel_styles.typo.font_size + 'px',
                '--panel-bg': options.sl_panel_styles.bg_color,
                '--panel-title-bg': options.sl_panel_styles.title_bg_color,
                '--panel-title-color': options.sl_panel_styles.title_color,
                '--panel-title-font': ` '${options.sl_panel_styles.title_typo.font_family }', sans-serif`,
                '--panel-title-font-size': options.sl_panel_styles.title_typo.font_size + 'px',
            }}
            
        >
            <h2 className='ud-ud-id-preview__title'>
                { options.sl_panel_content.title }
            </h2>
            <div
                className='ud-ud-id-preview__content'
                dangerouslySetInnerHTML={{
                    __html: options.sl_panel_content.html ? options.sl_panel_content.html.trim() : '',
                }}
            >
            </div>
        </div>
    )
}

export default Previewer;
