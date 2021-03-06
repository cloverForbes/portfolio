import React from 'react';
import './Icon.css';

export class Icon extends React.Component{

    handleClick = () => {
        if(this.props.controller.getOne(this.props.name).parent === 'Portfolio'){
             window.open(this.props.controller.getOne(this.props.name).url, '_blank');
             return;
        }
        else if(this.props.controller.getOne(this.props.name).parent === 'My Computer'){
            window.open(this.props.controller.getOne(this.props.name).url, '_blank');
            return;
        }
        else if(this.props.controller.getOne(this.props.name).parent){
            let parent = this.props.controller.getOne(this.props.name).parent;
            this.props.controller.toggleMax(parent);
        }

        if(!this.props.controller.getOne(this.props.name).visible){
            this.props.controller.toggleVisible(this.props.name);
            this.props.controller.toggleMax(this.props.name);
            return null;
        }


    };

    render(){
        const program = this.props.controller.getOne(this.props.name);
        const style = {
            color: this.props.color ? this.props.color : 'white'
        };


        return (
            <li onClick={this.handleClick} style={style} className="Icon-container">
                <img  id="Icon" className="Icon" src={`/Icons/${program.image}.ico`}></img>
                <p id="IconTitle">{this.props.name}</p>
            </li>
        );
    }
}
