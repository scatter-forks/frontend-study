import { Component } from 'react'

import { History } from 'history'

import { Button } from 'antd'
import { LockOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons'

interface Props {
	history: History
}

interface State {
	isRegister: boolean
}

class LoginPage extends Component<Props, State> {
	state = {
		isRegister: false
	}

	handleRegister = () => {
		const { isRegister } = this.state
		this.setState({
			isRegister: !isRegister
		})
	}

	render() {

		const { isRegister } = this.state
		const height = isRegister ? 'h-88' : 'h-80'


		return (
			<div className="flex bg-login bg-cover bg-top-4 h-screen">
				<div className={"mx-auto mt-32 rounded-lg w-60 bg-white shadow-2xl " + height} >
					<h2 className="text-center font-serif text-2xl mt-7">{isRegister ? 'REGISTER' : 'LOGIN'}</h2>
					<div className="flex justify-center flex-col login-container">
						<div className="mx-auto mt-10">
							<UserOutlined className="m-2" />
							<input
								type="text"
								className="w-3/4 mx-auto outline-none border-b-2"
								placeholder="Enter your username"
							/>
						</div>
						{isRegister && <div className="mx-auto mt-5">
							<PhoneOutlined className="mx-2 my-1" />
							<input
								type="password"
								className="w-3/4 mx-auto outline-none border-b-2"
								placeholder="Enter your phone id"
							/>
						</div>}
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
					>
						{isRegister ? 'Sign Up' : 'Sign In'}
					</Button>
					<span
						className="switch-page-state flex justify-center cursor-pointer text-xs mt-5 text-blue-500"
						onClick={this.handleRegister}
					>
						{isRegister ? 'Ready? Click here to login' : 'Not ready? Click here to register'}
					</span>
				</div>
			</div >
		)
	}
}

export default LoginPage

