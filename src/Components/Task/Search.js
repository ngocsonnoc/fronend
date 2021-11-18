import { Component } from "react";
import Sort from "./Sort";
class Search extends Component{
    constructor(props){
        super(props)

            this.state=({
                keyword:'',

            })    }
            onChange=(element)=>{
                var target = element.target
                var name = target.name
                var value = target.value
                this.setState({
                    [name]:value
                })
                console.log(this.state)
            }
            onSubmit=(e)=>{
                e.preventDefault()
              this.props.onSearch(this.state)
            }
            onSort=(val)=>{
                this.props.onSort(val)
            }
    render(){
        return(
            <div className="input-group mt-5">
                           <Sort onSort={this.onSort}/>
                            <input type="text" className="form-control ml-20" name="keyword" placeholder="Search term..." 
                                onChange={this.onChange}
                            />
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-success" 
                                onClick={this.onSubmit} >
                                <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </span>
            </div>
        )
    }
}
export default Search;