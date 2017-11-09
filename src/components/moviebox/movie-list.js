import React from 'react';
import {ScrollView, Text} from 'react-native';
import MovieBox from './movie-box';

class MovieList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            movies:[]
        }
    }

    componentWillMount(){
        fetch('http://192.168.0.60:3000/movies')
            .then((response)=>response.json())
            .then((responseData)=>this.setState({movies:responseData}));
    }

    renderMovieBox(){
        return this.state.movies.map((movie)=><MovieBox key={movie.title} movie={movie}/>);
    }

    render() {
        return (
            <ScrollView>
                {this.renderMovieBox()}
            </ScrollView>);
    }
 
}

export default MovieList;