import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBreeds, searchImages } from '../Actions/CatActions';
import BreedsTable from '../Components/BreedsTable';

const mapStateToProps = state => ({
  breeds: state.cats.breeds
});

const mapDispatchToProps = dispatch => ({
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

  render() {
    const { breeds } = this.props;
    console.log("breeds");
    console.log(breeds);

    return (
      <div>
        <p onClick={this.handleGetBreeds}>Get Breeds</p>
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
