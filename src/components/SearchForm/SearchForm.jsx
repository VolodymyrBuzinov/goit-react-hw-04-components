import { Component } from 'react';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import style from './searchForm.module.css';
export default class SearchForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
    }
    state = {
        value: '',
    }             
    onFormSubmit = evt => {
        evt.preventDefault();
        if (this.state.value.trim() === '') { 
      swal({
  title: "Wow!",
  text: "You forgot to write something!",
  icon: "error",
});
      return;
    }
    this.props.onSubmit(this.state.value);
    }
    inputHendler = evt => {
        this.setState({ value: evt.target.value.toLowerCase() });
    }
    render() {
        return (
            <>
                <form className={style.form} onSubmit={this.onFormSubmit}>
                    <label>
                        Please Input Film Name
                         <input type="text" onChange={this.inputHendler}/>
                    </label>
                    <button type="submit">Search</button>
                </form> 
            </>
        )
    }
}