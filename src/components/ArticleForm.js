import React, { Component } from 'react';

import { Form, Message } from 'semantic-ui-react';

export default class ArticleForm extends Component {
  static defaultProps = {
    errorMessage: '',
    onSubmit: () => {},
  }

  state = {
    title: '',
    content: '',
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    const { title, content } = this.state;
    const { errorMessage } = this.props;
    return (
      <Form as="div">
        <Form.Input name="title" value={title} label="제목" onChange={this.handleChange} />
        <Form.TextArea name="content" value={content} label="내용" onChange={this.handleChange} />
        <Form.Button onClick={this.handleSubmit}>전송</Form.Button>
        {
          errorMessage && (
            <Message negative>
              <Message.Header>전송할 수 없습니다.</Message.Header>
              <p>{errorMessage}</p>
            </Message>
          )
        }
      </Form>
    );
  }
}
