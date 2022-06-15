import reqMethods from '~/api/requestsMethods';

export default ($axios) => ({
    request: reqMethods($axios),
})