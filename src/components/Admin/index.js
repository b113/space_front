import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Admin extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="title">Заголовок новости: </label>
            <input type="text" name="newstitle" id="title" />
          </div>

          {/* <select id="categoryselect" name="newscategoryselect">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select> */}

          <div>
            <label htmlFor="categorytext">Категория новости:</label>
            <input type="text" name="newscategorytext" id="categorytext" />
          </div>

          <div>
            <label htmlFor="file">Изображение к новости:</label>
            <input type="file" name="newsimage" id="file" />
          </div>

          <div>
            <label htmlFor="text">Текст новости:</label>
            <textarea name="newstext" id="text" ></textarea>
          </div>

          <input type="submit" value="Добавить новость" />
        </form>
      </div>
    )
  }
}
