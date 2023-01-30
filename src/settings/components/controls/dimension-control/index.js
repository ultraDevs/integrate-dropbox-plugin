const { Component } = wp.element;
import ResponsiveDeviceControl from "./ResponsiveDeviceControl";

class DimensionControl extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            isLock: false,
            cData: this._Value()
        }
    }

    _Value( val ) {
        const { value, isResponsive, device } = this.props;

        if ( 'object' === typeof value && Object.keys( value ).length > 0 ) {
            if ( val ) {
                return isResponsive ? ( value[ window.pbDevice ] ? value[ window.pbDevice ][val] || '' : '' ) : value[val];
            } else {
                return isResponsive ? value[window.pbDevice] || '' : value;
            }
        } else {
            return '';
        }
    }

    _setData( name, val ) {
        const { value, isResponsive, onChange } = this.props;


        let data = ( this.state.isLock && 'unit' !== name ) ? {
            'top' : val,
            'right' : val,
            'bottom' : val,
            'left' : val,
        } : { [ name ] : val };

        data = Object.assign( {}, isResponsive ? value[ window.pbDevice ] || {} : value, data );
        data.unit = data.unit || 'px';

        const finalData = Object.assign( {}, value, isResponsive ? { [ window.pbDevice ]: data } : data );

        onChange( finalData );
        this.setState( { cData: finalData });

    }

    render() {

        const { unit, label, isResponsive, value, device } = this.props;

        const units = 'object' === typeof unit ? unit : [ 'px', 'em', '%' ];

        const positions = [ 'top', 'right', 'bottom', 'left' ];

        return (
            <div className='pb-dimension-control'>
                <div className='pb-dimension-control__top'>
                    { label && (
                        <div className='pb-dimension-control__label'>
                            <label>{ label }</label>
                        </div>
                    ) }
                    { isResponsive && (
                        <div className='pb-dimension-control__responsive'>
                            <ResponsiveDeviceControl
                                onChange = { ( value ) => {
                                    this.setState( { cData: value });
                                }}
                            />
                        </div>
                    ) }
                    { unit && (
                        <div className='pb-dimension-control__unit'>
                            {
                                units.map( ( value ) => (
                                    <button
                                        className={ (this.props.value && value == this.props.value[window.pbDevice].unit) ? 'active' : ''}
                                        onClick={
                                            () => this._setData( 'unit',  value )
                                        }
                                    >{ value }</button>
                                ) )
                            }
                        </div>
                    ) }
                </div>
                <div
                    className={ 
                        'pb-dimension-control__box' + ( ! this.props.noLock ? ' pb-dimension-control__box--hasLock' : '' ) 
                    }
                >
                    {
                        positions.map( ( val, key ) => (
                            <span>
                                <input
                                    type='number'
                                    value={
                                        this._Value( val )
                                    }
                                    onChange={
                                        (e) => this._setData( val, e.target.value )
                                    }
                                />
                                <span>{ val }</span>
                            </span>
                            
                        ) )
                    }
                    {
                        ! this.props.noLock && (
                            <button
                                className = {
                                    ( this.state.isLock ? 'active ' : '' ) 
                                }
                                onClick = {
                                    () => this.setState( { isLock: ! this.state.isLock } )
                                }
                            >
                                {
                                    this.state.isLock ? <span className='dashicons dashicons-lock' /> : <span className='dashicons dashicons-visibility' /> 
                                }
                            </button>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default DimensionControl;