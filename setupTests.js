// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
// import { Environment } from './src/typed/environment'
import NP from 'number-precision'

const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
// global.BASE_URL_APAC = 'BASE_URL_APAC'
// global.BASE_URL_CYPRUS = 'BASE_URL_CYPRUS'
// global.ENV_NAME = Environment.TEST

NP.enableBoundaryChecking(false)

configure({ adapter: new Adapter() })

// jest.mock('@/redux-related/store', () => {
//     return { persistor: {}, store: {} }
// })
