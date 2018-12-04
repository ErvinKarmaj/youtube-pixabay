import _ from 'lodash';
import './Youtube.css';
import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDuCHZapmXdFo97ktjOKNAdk_faIO1MvQw';





class Youtube extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('');
    }

    

    videoSearch(term){
        YTSearch({key: API_KEY, maxResults: 6, term : term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
        <div>
            <header>
            <SearchBar onSearchTermChange={videoSearch}/>
            </header>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
             onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
             videos={this.state.videos} />
        </div>

        );
    }  
}
export default Youtube;