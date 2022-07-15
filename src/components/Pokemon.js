import React from 'react';
import '../App.scss';

export default class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            url: '',
            pokeIndex: '',
            imgUrl:''
        }
    }

    componentDidMount(){
        const {name, url} = this.props;
        const pokeIndex = url.split('/')[url.split('/').length-2]
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`

        this.setState({
            name,
            url,
            pokeIndex,
            imgUrl
        })
    }

    render(){
        return (
            <div className = "col-md-3 col-sm-6 mb-5">
                <div className = "card" style={{minHeight:'12em',minWidth:'10em'}}>
                    <h6 className = "card-header text-center">
                        {this.state.pokeIndex}. {this.state.name.toUpperCase()}
                    </h6>
                    <div className="card-body" style={{display:'flex', justifyContent:'space-around'}}>
                        <img src={this.state.imgUrl} alt={this.state.name} style={{height:'6em',width:'6em'}}/>
                    </div>
                </div>
            </div>
        )
    }
}