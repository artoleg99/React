import React, {Component} from 'react'

import '../../css/post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
            super(props)
            this.state = {
                text: ''
            }
            this.onValueChange = this.onValueChange.bind(this)
            this.onSubmit = this.onSubmit.bind(this)
        }
        //следит за изменениями
        onValueChange(e) {
            this.setState({
                text: e.target.value
            })
        }
        //отменяет стандартное поведение браузера и ставит сортировку по тексту
        onSubmit(e) {
            e.preventDefault()
            this.props.onAdd(this.state.text)
            this.setState({
                text: ''
            })
        }
        //сортировку по тексту нужно ставить не к кнопке, а к самой форме
        render() {
            return (
                <form
                    className="bottom-panel d-flex"
                    onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="О чем вы думаете сейчас?"
                        className="form-control new-post-label"
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-secondary"
                        >
                        Добавить
                        </button>
                </form>
            )
        }
    }
    