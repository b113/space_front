import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Admin extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  state = {
    title: '',
    category: '',
    text: '',
    image: '',
  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value, });
  }

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  }

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleImageChange = (event) => {
    this.setState({ image: event.target.files[0] });
  }

  render() {
    const { title, category, text, image } = this.state;
    return (
      <div className="container add-news">
        <h1 className="add-news__header">Добавить новость</h1>
        <form className="add-news__form" onSubmit={this.handleSubmit}>
          <div className="add-news__title">
            <label className="add-news__title-label" htmlFor="title">Заголовок: </label>
            <input className="add-news__title-input" type="text" name="newstitle" id="title" value={title} onChange={this.handleTitleChange} />
          </div>

          {/* <select id="categoryselect" name="newscategoryselect">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select> */}

          <div className="add-news__category">
            <label className="add-news__category-label" htmlFor="categorytext">Категория:</label>
            <input className="add-news__category-input" type="text" name="newscategorytext" id="categorytext" value={category} onChange={this.handleCategoryChange} />
          </div>

          <div className="add-news__text">
            <label className="add-news__text-label" htmlFor="text">Текст новости:</label>
            <textarea className="add-news__text-textarea" name="newstext" id="text" value={text} onChange={this.handleTextChange} ></textarea>
          </div>

          <div className="add-news__img">
            <label className="add-news__img-label" htmlFor="file">Изображение:</label>
            <input type="file" name="newsimage" id="file" onChange={this.handleImageChange} />
          </div>

          {/* <div className="add-news__main">
            <label className="add-news__main-label" htmlFor="main">Сделать главной: </label>
            <input className="add-news__main-checkbox" type="checkbox" name="newsmain" id="main" />
          </div> */}

          <input className={`add-news__submit-btn ${(title && category && text && image) ? null : 'add-news__submit-btn--disabled'}`} type="submit" value="Добавить новость" disabled={!(title && category && text && image)} />
        </form>
      </div>
    )
  }
}

