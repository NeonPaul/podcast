import React from 'react'

class Counter extends React.Component {
  render() {
    var { onAdd } = this.props
    var submitForm = e => {
      e.preventDefault()
      this.props.onAdd(e.target.input.value)
      e.target.input.value=''
    }
  	
    return <form onSubmit={submitForm}>
      <input type="text" name="input"/>
	  	<button type="submit">+</button>
	  </form>
  }
}

export default Counter
