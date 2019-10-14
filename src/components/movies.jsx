import React, { Component } from "react";
import PropTypes from "prop-types";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Likes from "./Likes";
import Pagination from "./pagination";
import { paginate } from "../utilites/paginate";
import ListGroup from "./listGroup";
class Movies extends Component {
  state = {
    movies: [],
    selectedGenre: "All Genres",
    pageSize: 4,
    genres: [],
    currentPage: 1
  };
  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handleClick = id => {
    const clonedArray = [...this.state.movies];
    const index = clonedArray.indexOf(id);
    console.log(index);
    clonedArray[index]["liked"] = !clonedArray[index]["liked"];
    this.setState({ movies: clonedArray });
  };
  handleDelete = clickedMovie => {
    const farr = this.state.movies.filter(elem => {
      return clickedMovie !== elem;
    });
    // console.log(farr);
    this.setState({ movies: farr });
  };

  handlePageChange = page => {
    // console.log(page);
    this.setState({ currentPage: page });
  };
  
  handleGenreSelect = genre => {
    // console.log(genre);
    // to reset  selected page we will change state of current page
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    {
      console.log(this.state.selectedGenre);
    }
    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
            movie => movie.genre._id === this.state.selectedGenre._id
          )
        : this.state.movies;
    console.log(filtered);
    const movies = paginate(
      filtered,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            textProperty="name"
            valueProperty="_id"
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          ></ListGroup>
        </div>
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
              {console.log(movies)}
              {movies.map(movie => {
                return (
                  <tr key={movie["_id"]}>
                    <td>{movie["title"]}</td>
                    <td>{movie["genre"]["name"]}</td>
                    <td>{movie["numberInStock"]}</td>
                    <td>{movie["dailyRentalRate"]}</td>
                    <td>
                      <Likes
                        onClick={() => {
                          this.handleClick(movie);
                        }}
                        likes={movie["liked"]}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          this.handleDelete(movie);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            itemsCount={filtered.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          ></Pagination>
        </div>
      </div>
    );
  }
}
// for type checking => install prop-types
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Movies;
