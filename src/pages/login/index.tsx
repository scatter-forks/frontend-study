import { Component } from 'react'

import { History } from 'history'

import { Button } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

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
			<div className="flex bg-login bg-cover bg-top-4 h-screen">
				<div className="mx-auto mt-32 rounded-lg w-60 h-80 bg-white shadow-2xl">
					<h2 className="text-center font-serif text-2xl mt-7">LOGIN</h2>
					<div className="flex justify-center flex-col login-container">
						<div className="mx-auto mt-10">
							<UserOutlined className="m-2" />
							<input
								type="text"
								className="w-3/4 mx-auto outline-none border-b-2"
								placeholder="Enter your username"
							/>
						</div>
						<div className="mx-auto mt-5">
							<LockOutlined className="mx-2 my-1" />
							<input
								type="password"
								className="w-3/4 mx-auto outline-none border-b-2"
								placeholder="Enter your password"
							/>
						</div>
					</div>
					<Button
						className="flex justify-center focus:outline-none rounded-lg mx-auto mt-12 w-1/2 bg-blue-200"
					>Sign In
					</Button>
					<span className="flex justify-center cursor-pointer text-xs mt-5 text-blue-500">Not ready? Click here to register</span>
				</div>
			</div>
		)
	}
}

export default LoginPage

