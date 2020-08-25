import React from 'react'

class EyesOnMe extends React.Component {

    handleOnBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    handleOnFocus = () => {
        console.log('Good!')
    }

    render() {
        return (
            <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} ></button>
        )
    }
}

export default EyesOnMe;