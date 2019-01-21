import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { fetchBreeds, clearBreeds, searchImages } from '../Actions/CatActions';
import BreedsTable from '../Components/BreedsTable';

const mapStateToProps = state => ({
  breeds: state.cats.breeds
});

const mapDispatchToProps = dispatch => ({
  clearBreeds: (params) => dispatch(clearBreeds(params)),
  getBreeds: (params) => dispatch(fetchBreeds(params)),
  getBreedImage: (params) => dispatch(searchImages(params)),
});

class Breeds extends Component {
  handleGetBreeds = () => {
    const { getBreeds } = this.props;
    const params = {
      attach_breeds: 0,
      page: 1,
      limit: 20
    };

    getBreeds(params);
  }

  handleClearBreeds = () => {
    const { clearBreeds } = this.props;

    clearBreeds();
  }

  render() {
    const { breeds } = this.props;

    return (
      <div>
          <h1>Cat Breeds</h1>
        <Button variant="contained" color="primary" onClick={this.handleGetBreeds}>
            Get Breeds
        </Button>
        <Button variant="contained" color="secondary" onClick={this.handleClearBreeds}>
            Clear Breeds
        </Button>
        <BreedsTable breeds={breeds} />
        { /*breeds.length > 0 ? "Breeds Available" : "Breeds Unavailable" */ }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breeds);
