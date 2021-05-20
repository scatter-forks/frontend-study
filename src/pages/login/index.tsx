import { Component } from 'react'

import { History } from 'history'

import { message } from 'antd'
import { LockOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons'

import './index.css'

interface Props {
	history: History
}

interface State {
	userName: string
	password: string
	phoneId?: string
	isRegister: boolean
	isAccountInfoComplete: boolean
}

class LoginPage extends Component<Props, State> {
	state = {
		userName: '',
		password: '',
		phoneId: undefined,
		isRegister: false,
		isAccountInfoComplete: false
	}

	handleLogin = () => {
		message.loading('Loging...', 2.5).then(() => {
			message.success('Success')
		})
	}

	handleRegister = () => {
		const { isRegister } = this.state
		this.setState({
			userName: '',
			password: '',
			phoneId: undefined,
			isAccountInfoComplete: false,
			isRegister: !isRegister
		})
	}

	handleUserNameChange = (info: string) => {
		this.setState({
			userName: info
		})
	}

	handlePasswordInfoChange = (info: string) => {
		this.setState({
			password: info
		})
	}

	handlePhoneIdChange = (info: string) => {
		this.setState({
			phoneId: info
		})
	}

	render() {

		const { userName, password, phoneId, isRegister, isAccountInfoComplete } = this.state
		const height = isRegister ? 'h-88' : 'h-80'


		return (
			<div className="flex bg-login bg-cover bg-top-4 h-screen">
				<div className={`mx-auto mt-32 rounded-lg w-60 bg-white shadow-2xl ${height}`} >
					<h2 className="text-center font-serif text-2xl mt-7">{isRegister ? 'REGISTER' : 'LOGIN'}</h2>
					<div className="flex justify-center flex-col login-container">
						<div className="mx-auto mt-10">
							<UserOutlined className="m-2" />
							<input
								type="text"
								className="w-3/4 mx-auto outline-none border-b-2"
								placeholder="Enter your username"
								value={userName}
								onChange={e => this.handleUserNameChange(e.target.value)}
							/>
						</div>
						{isRegister && <div className="mx-auto mt-5">
							<PhoneOutlined className="mx-2 my-1" />
							<input
								type="password"
								className="w-3/4 mx-auto outline-none border-b-2"
								placeholder="Enter your phone id"
								value={phoneId}
								onChange={e => this.handlePhoneIdChange(e.target.value)}
							/>
						</div>}
						<div className="mx-auto mt-5">
							<LockOutlined className="mx-2 my-1" />
							<input
								type="password"
								className="w-3/4 mx-auto outline-none border-b-2"
								placeholder="Enter your password"
								value={password}
								onChange={e => this.handlePasswordInfoChange(e.target.value)}
							/>
						</div>
					</div>
					<button
						className="flex justify-center transform hover:scale-110 duration-300 transition py-1 focus:outline-none rounded-lg mx-auto mt-12 w-1/2 bg-blue-200"
						disabled={isAccountInfoComplete}
						onClick={this.handleLogin}
					>
						{isRegister ? 'Sign Up' : 'Sign In'}
					</button>
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

