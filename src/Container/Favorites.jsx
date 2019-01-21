import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../Actions/CatActions';
import FavoritesTable from '../Components/FavoritesTable';

const mapStateToProps = state => ({
  images: state.cats.images,
  favorites: state.cats.favorites,
  user: state.cats.user
});

const mapDispatchToProps = dispatch => ({
  getFavorites: (params) => dispatch(getFavorites(params))
});

class Favorites extends Component {
  componentDidMount(){
    const { getFavorites, user } = this.props;
    const params = {
      sub_id: user.username
    };
    getFavorites(params);
  }

  render() {
    const { favorites } = this.props;

    return (
      <div>
        <h1>Favorites</h1>
        <FavoritesTable favorites={favorites}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
