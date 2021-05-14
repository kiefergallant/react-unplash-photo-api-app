import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };



    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form' action="">
                    <div className='field'>
                        <label htmlFor="imagesearch">Image Search</label>
                        <input
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                            className='imagesearch' type="text" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;