const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	SelectControl,
	RangeControl,
	Dropdown,
	ButtonGroup,
	Button,
	BaseControl,
} = wp.components;

import './editor.scss';

import FONTS from './fonts';

import ResponsiveRangeControl from '../responsive-range-control';

import FontFamilyPicker from './fontPicker';

const WEIGHTS = [
    { label: __( 'Default', 'sticky-list' ), value: "" },
    { label: __( '100', 'sticky-list' ), value: "100" },
    { label: __( '200', 'sticky-list' ), value: "200" },
    { label: __( '300', 'sticky-list' ), value: "300" },
    { label: __( '400', 'sticky-list' ), value: "400" },
    { label: __( '500', 'sticky-list' ), value: "500" },
    { label: __( '600', 'sticky-list' ), value: "600" },
    { label: __( '700', 'sticky-list' ), value: "700" },
    { label: __( '800', 'sticky-list' ), value: "800" },
    { label: __( '900', 'sticky-list' ), value: "900" },
];

const STYLES = [
    { label: __( 'Normal', 'sticky-list' ), value: "normal" },
    { label: __('Italic', 'sticky-list' ), value: "italic" },
    { label: __('Oblique', 'sticky-list' ), value: "oblique" },
    { label: __('Initial', 'sticky-list' ), value: "initial" },
    { label: __('Inherit', 'sticky-list' ), value: "inherit" },
];

const TRANSFORMS = [
    { label: __( 'None', 'sticky-list' ), value: "" },
    { label: __( 'AA', 'sticky-list' ), value: "uppercase" },
    { label: __( 'aa', 'sticky-list' ), value: "lowercase" },
    { label: __( 'Aa', 'sticky-list' ), value: "capitalize" },
];

const DECORATIONS = [
    { label: __( 'Initial', 'sticky-list' ), value: 'initial' },
    { label: __( 'Overline', 'sticky-list' ), value: 'overline' },
    { label: __( 'Line Through', 'sticky-list' ), value: 'line-through' },
    { label: __( 'Underline', 'sticky-list' ), value: 'underline' },
    { label: __( 'Underline Overline', 'sticky-list' ), value: 'underline overline' },
];


const TypographyControl = ( props ) => {
    const label = props.label;
    const fontFamily = props.fontFamily;
    const fontSize = props.fontSize;
    const fontStyle = props.fontStyle;
    const fontSizeTablet = props.fontSizeTablet;
    const fontSizeMobile = props.fontSizeMobile;
    const fontWeight = props.fontWeight;
    const lineHeight = props.lineHeight;
    const letterSpacing = props.letterSpacing;
    const textTransform = props.textTransform;
    const textDecoration = props.textDecoration;
    const setAttributes = props.setAttributes;


    const onFontChange = ( value ) => {
		// const { fontFamily, fontWeight } = props.attributes;

		setAttributes({ [fontFamily.name]: value });

		if (
			typeof FONTS[value] !== "undefined" &&
			typeof FONTS[value].weight !== "undefined"
		) {
			if (
				fontWeight.value &&
				Object.values(FONTS[fontFamily.value].weight).indexOf(fontWeight) < 0
			) {
				setAttributes({ [fontWeight.name]: "" });
			}
		}

		// onClose();
	};

    return (
        <BaseControl
            label={ label }
            className="pb-typography-control"
        >
            <Dropdown
                className="pb-typography-control--dropdown"
                contentClassName="pb-control-dropdown--content"
                position="bottom right"
                renderToggle={ ( { isOpen, onToggle } ) => (
                    <Button
                        isSmall
                        onClick={ onToggle }
                        aria-expanded={ isOpen }
                        icon="edit"
                    ></Button>
                ) }
                renderContent={ ( ) => (
                    <div className="pb-typography-control--content">
                        <FontFamilyPicker
							label={ __( 'Font', 'sticky-list' ) }
							value={ fontFamily.value || null }
							onChange={ ( nextFontFamily ) => {
								onFontChange(nextFontFamily );
							} }
							className="components-base-control--with-flex"
						/>
                        <SelectControl
                            className = "pb-custom-select-control"
                            label={ __(
                                'Weight',
                                'sticky-list'
                            ) }
                            value={ fontWeight.value }
                            onChange={ ( value ) => {
                                setAttributes( { [ fontWeight.name] : value } );
                            } }
                            options={ WEIGHTS }
                        />
                        <SelectControl
                            className = "pb-custom-select-control"
                            label={ __(
                                'Style',
                                'sticky-list'
                            ) }
                            value={ fontStyle.value }
                            onChange={ ( value ) => {
                                setAttributes( { [ fontStyle.name] : value } );
                            } }
                            options={ STYLES }
                        />
                        <ResponsiveRangeControl
                            label={ __( 'Size', 'sticky-list' ) }
                            sizeType = {
                                { value: props.sizeType.value, name: props.sizeType.name }
                            }
                            sizeOnDesktop = { { value: fontSize.value, name: fontSize.name } }
                            sizeOnTablet = { { value: fontSizeTablet.value, name: fontSizeTablet.name } }
                            sizeOnMobile = { { value: fontSizeMobile.value, name: fontSizeMobile.name } }
                            min={ 0 }
                            max={ 100 }
                            setAttributes = { setAttributes }
                        />
                        <RangeControl
                            label={ __(
                                'Line Height',
                                'sticky-list'
                            ) }
                            value={ lineHeight.value }
                            onChange={ ( value ) => {
                                setAttributes( { [lineHeight.name] : value } )
                            }}
                            min={ 0 }
                            step={ 1 }
                            max={ 100 }
                        />
                        <RangeControl
                            label={ __(
                                'Letter Spacing',
                                'sticky-list'
                            ) }
                            value={ letterSpacing.value }
                            onChange={ ( value ) =>
                                setAttributes( { [letterSpacing.name] : value } )
                            }
                            min={ 0 }
                            step={ 1 }
                            max={ 100 }
                        />
                        <BaseControl 
                            label={ __(
                                'Text Transform',
                                'sticky-list'
                            ) }
                            className="pb-typography-control--transform"
                        >
                            <ButtonGroup>
                                { TRANSFORMS.map( (item) => (
                                    <Button
                                        isPrimary={ textTransform.value === item.value}
                                        isSecondary={textTransform.value !== item.value}
                                        onClick={() =>
                                            setAttributes({
                                                [textTransform.name]: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <SelectControl
                            className = "pb-custom-select-control"
                            label={ __(
                                'Text Decoration',
                                'sticky-list'
                            ) }
                            value={ textDecoration.value }
                            onChange={ ( value ) => {
                                setAttributes( { [textDecoration.name]: value } );
                            } }
                            options={ DECORATIONS }
                        />
                    </div>
                ) }
            />
        </BaseControl>
    );
}
export default TypographyControl;