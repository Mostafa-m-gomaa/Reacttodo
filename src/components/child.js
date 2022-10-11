import React, { Component } from "react";

class child extends Component{

    
    
    render(){
        const item=this.props.items;
        const theItems=item.map((i)=>{
            return(
                <div key={Math.random()*20}>
                    
                    <p>{i.name}</p>
                    <p>{i.id}</p>
                    <p>______________________________________________</p>
                </div>
            )
        })
        return(
            <div className="child">
             
                <p>{theItems}</p>
             
            </div>
        )
    }
}
export default child ;