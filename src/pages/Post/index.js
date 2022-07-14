import React from "react";

export default class Post extends React.Component {
  constructor(props) {
    super(props)

    const { search } = this.props.location
    this.queryParams = new URLSearchParams(search)
  }

  handleNavigate = () => {
    this.props.history.push('/posts')
  }

  render() {
    return (
      <>
        <button onClick={this.handleNavigate}>Voltar para as listas de posts</button>
        <h1>Post page</h1>
      </>
    )
  }
}