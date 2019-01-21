import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchImages, vote } from '../Actions/CatActions';
import FeaturedImage from '../Components/FeaturedImage';

const mapStateToProps = state => ({
  images: state.cats.images,
  user: state.cats.user
});

const mapDispatchToProps = dispatch => ({
  getImages: (params) => dispatch(searchImages(params)),
  vote: (params) => dispatch(vote(params)),
});

class Dashboard extends Component {
  componentDidMount(){
    const { getImages } = this.props;
    const params = {
      limit: 1
    };
    getImages();
  }

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

  handleFavorited = () => {
    const { vote, user, images } = this.props;
    const featuredImage = images.length > 0 ? images[0] : {};
    const params = {
      "image_id": featuredImage ? featuredImage.id : 'asf2',
      "sub_id": ( user ? user.username : '' ) + "-testing",
      "value": 1
    };
    vote(params);
  }

  handleDisliked = () => {
    const { vote, user, images } = this.props;
    const featuredImage = images.length > 0 ? images[0] : {};
    const params = {
      "image_id": featuredImage ? featuredImage.id : 'asf2',
      "sub_id": ( user ? user.username : '' ) + "-testing",
      "value": 0
    };
    vote(params)
  }

  render() {
    const { images } = this.props;
    const featuredImage = images.length > 0 ? images[0] : {};

    return (
      <div>
        <h1>Cats Rule</h1>
        <FeaturedImage image={featuredImage} favorited={this.handleFavorited} disliked={this.handleDisliked} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
