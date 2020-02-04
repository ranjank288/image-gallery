import React from 'react';
import Unsplash from '../Api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state ={images:[], totalImage: 0};
    
    onSearchSubmit = async (term)=> {
        const response = await Unsplash.get('/search/photos',{
            params:{
                query:term
            }
        });
        this.setState({images:response.data.results});
        this.setState({totalImage:response.data.total});
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList data={this.state} />
            </div>
        );
    }
    
}

export default App;