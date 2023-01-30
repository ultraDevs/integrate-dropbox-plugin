const { __ } = wp.i18n;
const { Component } = wp.element;
const { Tooltip } = wp.components;
import './editor.scss';

class ResponsiveDeviceControl extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            device: 'undefined' !== typeof props.device && '' !== props.device ? props.device : 'md'
        }
    }
    componentDidMount() {
        if ( 'undefined' !== typeof this.props.device && '' !== this.props.device ) {
            window.pbDevice = this.props.device;
        }
    }

    _setDevice( value ) {
        window.pbDevice = value;
        this.setState( { device: value } );
        this.props.onChange( value );
    }

    render() {
        
        const devices = [
            {
                device : 'xs',
                title : __( 'Extra Small' ),
            },
            {
                device : 'sm',
                title : __( 'Small' ),
            },
            {
                device : 'md',
                title : __( 'Medium' ),
            },
            {
                device : 'lg',
                title : __( 'Large' ),
            },
        ];
        return(
            <div className="pb-device-control">
                { devices.map( ( device, key ) => { 
                    return (
                        <Tooltip text={ device.title }>
                            <button onClick={ () => this._setDevice( device.device ) } className={ `pb-device-control__device-${device.device} ${ device.device === this.state.device ? 'active' : '' }` } />
                        </Tooltip>
                    );
                })
                }
            </div>
        );
    }

}

export default ResponsiveDeviceControl;