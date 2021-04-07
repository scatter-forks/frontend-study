import { Component } from 'react'

import { History } from 'history'

interface Props {
	history: History
}

interface State { }

class LoginPage extends Component<Props, State> {
	onClick = () => {
		const { history } = this.props
		history.push('/welcome')
	}

	render() {
		return (
			<div className="flex justify-center flex-col">
				<h1 className="text-3xl text-center my-6">please input your name</h1>
				<button onClick={this.onClick} className="w-1/4 mx-auto rounded-md py-3 px-6 bg-blue-100">click here jump to next page</button>
			</div>
		)
	}
}

export default LoginPage

