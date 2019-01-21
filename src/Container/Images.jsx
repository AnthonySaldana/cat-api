import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { searchImages, favorite } from '../Actions/CatActions';
import ImagesTable from '../Components/ImagesTable';

const mapStateToProps = state => ({
  images: state.cats.images,
  user: state.cats.user
});

const mapDispatchToProps = dispatch => ({
  getImages: (params) => dispatch(searchImages(params)),
  favorite: (params) => dispatch(favorite(params))
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

  handleFavorite = (id) => {
    let { user, favorite } = this.props;
    const params = {
      "image_id": id,
      "sub_id": user ? user.username : ''
    };
    favorite(params);
  }
  
  render() {
    const { images } = this.props;

    return (
      <div>
          <h1>Cat Images</h1>
        <Button variant="contained" color="primary" onClick={this.handleGetImages}>
            Get Cats
        </Button>
        <ImagesTable images={images} favorited={this.handleFavorite} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breeds);
