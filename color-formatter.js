const colors = {
    // primary
    primary: '#054256',
    // secondary
    secondary: '#F7B628',
    // dark green
    niagara: '#20AD90',
    // branding green
    downy: '#75DFC0',
    // warning
    parisDaisy: '#FFE44C',
    // default background
    white: '#FFFFFF',
    // required, error
    flamePea: '#B75C50',
    // font default
    oil: '#444444',
    //
    brightGrey: '#606164',
    // disabled
    silver: '#C4C4C4',
    // light-grey
    lightGrey: '#FAFAFA',
    // lighter-gray
    whiteGrey: '#E5E5E5',
    // lighter-gray
    lighterGrey: '#f3f3f3',
    // grey
    grey: '#9E9E9E',
    // dark grey
    dark: '#323330',
    // dark grey for button
    grayscale: '#8F8F8F',
    // black
    black: '#000000',
    // light shade of cyan
    cyan: '#6DC4CD',
    // silverDark
    silverDark: '#666666',
    // darkMailContent
    darkMailContent: '#323330',
    // faux-blanched almond:
    almond: '#FBEEC7',
    // USP background light gray color
    lightGreyBG: '#F9F9F9',
    // lightBackground
    lightBackground: '#F9F9F9',
    // secondaryBlack
    secondaryBlack: '#333333',
    // text
    typography: '#363636',
    // typo
    typo: '#575756',
    // error colour
    signal: '#FF0000',
    //aler color
    orange: '#F78B28',
    // turquoise, used in radio buttons, very similar to niagara
    bermuda: '#76DFBF',
    // one more shade of light grey
    alabaster: '#F7F7F7',
    //turqoise
    turquoise: '#6EC4CE',
    //turqoise text
    turquoiseText: '#29929e',
    //turqoise opacity
    turquoiseOpacity: 'rgba(110, 196, 206, 0.4)',
    //java
    java: '#21939f'
};

const keys = Object.keys(colors);

keys.forEach((key) => {
   console.log(key + ' - ' + colors[key])
});