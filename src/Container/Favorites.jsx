import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { searchImages } from '../Actions/CatActions';
import FavoritesTable from '../Components/ImagesTable';

const mapStateToProps = state => ({
  images: state.cats.images
});

const mapDispatchToProps = dispatch => ({
  getImages: (params) => dispatch(searchImages(params))
});

class Breeds extends Component {
  handleGetImages = () => {
    const { getImages } = this.props;
    const params = {
      attach_breeds: 0,
      page: 1,
      limit: 20
    };

    getImages(params);
  }

  handleClearImages = () => {
    const { clearImages } = this.props;

    clearImages();
  }

  render() {
    const { images } = this.props;

    return (
      <div>
          <h1>Favorites</h1>
        <FavoritesTable images={images} />
        { /*breeds.length > 0 ? "Breeds Available" : "Breeds Unavailable" */ }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breeds);