import React, {Component} from 'react'
import { History } from 'history'

interface Props {
  history: History
}

interface State {}

class Welcome extends Component<Props, State> {
  handleGoBack = () => {
    this.props.history.push('/')
  }
  
  render() {
    return (
      <div className="flex justify-center flex-col">
        <h1 className="text-center text-5xl my-4 font-serif">Demo</h1>
        <h2 className="text-center font-mono my-2">click will alert LOVE</h2>
        <h3 className="app">222</h3>
        <button onClick={this.handleGoBack} className="w-1/4 mx-auto rounded-md py-3 px-6 bg-blue-100">click here go back</button>
      </div>
    )
  }
}

export default Welcome