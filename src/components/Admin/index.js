import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Admin extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="container add-news">
        <h1 className="add-news__header">Добавить новость</h1>
        <form className="add-news__form">
          <div className="add-news__title">
            <label className="add-news__title-label" htmlFor="title">Заголовок: </label>
            <input className="add-news__title-input" type="text" name="newstitle" id="title" />
          </div>

          {/* <select id="categoryselect" name="newscategoryselect">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select> */}

          <div className="add-news__category">
            <label className="add-news__category-label" htmlFor="categorytext">Категория:</label>
            <input className="add-news__category-input" type="text" name="newscategorytext" id="categorytext" />
          </div>

          <div className="add-news__text">
            <label className="add-news__text-label" htmlFor="text">Текст новости:</label>
            <textarea className="add-news__text-textarea" name="newstext" id="text" ></textarea>
          </div>

          <div className="add-news__img">
            <label className="add-news__img-label" htmlFor="file">Изображение:</label>
            <input type="file" name="newsimage" id="file" />
          </div>

          {/* <div className="add-news__main">
            <label className="add-news__main-label" htmlFor="main">Сделать главной: </label>
            <input className="add-news__main-checkbox" type="checkbox" name="newsmain" id="main" />
          </div> */}

          <input className="add-news__submit-btn" type="submit" value="Добавить новость" />
        </form>
      </div>
    )
  }
}
