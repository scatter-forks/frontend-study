import React from 'react'
interface Props {
}
interface State {   
}

export default class LoginPage extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <h1 className='text-3xl text-center my-6'>please input your name</h1> 
            </div>
        )
    }
}

