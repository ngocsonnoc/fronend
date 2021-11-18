import { Component } from "react";

class AddBtn extends Component{
    onDisplayForm=()=>{
        if(this.props.isDisplayForm===true){
            this.props.onChangeDisplay(false)
        }
            if(this.props.isDisplayForm===false){
            this.props.onChangeDisplay(true)
        }
    }
    render(){
        return( <div>
           <button type="button" className="btn btn-primary" onClick={this.onDisplayForm}>{this.props.isDisplayForm?'Đóng khung thêm':'Thêm khách hàng'} <i className="fa fa-plus" aria-hidden="true"></i></button>
           </div>
        )
    }
}
export default AddBtn;