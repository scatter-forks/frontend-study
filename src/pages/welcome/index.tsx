import { Component } from 'react'

import { History } from 'history'

interface Props {
  history: History
}

interface State { }

class Welcome extends Component<Props, State> {

  handleGoBack = () => {
    this.props.history.push('/')
  }

  handleGoPersonInfo = () => {
    this.props.history.push('/home')
  }

  render() {

    return (
      <div className="flex justify-center flex-col">
        <h1 className="text-center text-5xl my-4 font-serif">Demo</h1>
        <h2 className="text-center font-mono my-2">click will alert LOVE</h2>
        <button onClick={this.handleGoBack} className="w-1/4 mx-auto rounded-md py-3 px-6 bg-blue-100">Go back</button>
        <button onClick={this.handleGoPersonInfo} className="w-1/4 mx-auto my-10 rounded-md py-3 px-6 bg-blue-100">Person Experience</button>      </div>
    )
  }
}

export default Welcome