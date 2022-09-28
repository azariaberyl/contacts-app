import React, { Component } from 'react'

export class ContactInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      tag: ''
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this)
    this.onSubmitHandler= this.onSubmitHandler.bind(this)
    this.onTagChangeHandler = this.onTagChangeHandler.bind(this)
  }

  onNameChangeEventHandler(e) {
    this.setState(() => {
      return {
        name: e.target.value
      }
    })
  }
  onTagChangeHandler(e) {
    this.setState(() => {
      return {
        tag: e.target.value
      }
    })
  }
  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className='contact-input' onSubmit={this.onSubmitHandler}>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
        <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeHandler} />
        <button type="submit">Tambah</button>
      </form>
    )
  }
}

export default ContactInput