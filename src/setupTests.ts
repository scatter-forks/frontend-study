import NP from 'number-precision'

const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

NP.enableBoundaryChecking(false)

configure({ adapter: new Adapter() })

// jest.mock('@/redux-related/store', () => {
//     return { persistor: {}, store: {} }
// })
