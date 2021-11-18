import { Component } from "react";
import Search from "./Search";
import AddBtn from "./AddBtn";
class Control extends Component{
    sendStatus=(value)=>{
        this.props.onChangeDispaly(value)
    }
    onSearch=(keyword)=>{
        this.props.onSearch(keyword)
    }
    onSort=(val)=>{
        this.props.onSort(val)
    }
    render(){
        return(
                    <div className="col-md-12 col-m-auto ">
                    <AddBtn onChangeDisplay={this.sendStatus} isDisplayForm={this.props.isDisplayForm}/>
                    <Search onSearch={this.onSearch} onSort={this.onSort}/>
                    </div>
        )
    }
}
export default Control;