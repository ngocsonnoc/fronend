import {Component} from 'react'
class TaskForm extends Component{
  constructor(props){
    super(props)
    this.state={
      courseName:this.props.dataUpdate.last_name,
      username:this.props.dataUpdate.username,
      status:this.props.dataUpdate.status,
      updateStatus:this.props.dataUpdate.updateStatus
    }
  }
  onChange=(event)=>{
    var target = event.target
    var name = target.name
    var value = target.value
    if(name==='status'){
      value=target.value==='true'?true:false

    }
    this.setState({
      [name]:value
    })
  }
  onSubmit=(e)=>{
    e.preventDefault()
      this.props.onSubmit(this.state)
  }
  onReset=()=>{
    this.setState({
      courseName:'',
      status:true,
      updateStatus:true
    })
  }
  onUpdate=(e)=>{
    e.preventDefault()
    var data ={
      state:this.state,
      id:this.props.dataUpdate.user_id
    }
          this.props.dataReply(data)
  this.onReset()
  }
    render(){
    return(
<div className="card ">
<div className="card-header"> <h2>Thêm khách hàng:</h2></div>
  <form className="mt-50" onSubmit={this.onSubmit}>
    <div className="form-group">
      <label className="float-left">Tên khách hàng:</label>
      <input type="text" name="courseName" className="form-control" onChange={this.onChange} value={this.state.courseName} />
    </div>
    <div className="form-group">
      <label className="float-left">Tên đăng nhập:</label>
      <input type="text" name="username" className="form-control" onChange={this.onChange} value={this.state.username} />
    </div>
    <div className="form-group">
      <label className="float-left">Trạng thái:</label>
      <select className="form-control" name="status" onChange={this.onChange} value={this.state.status}>
            <option  value={true}> Kích hoạt</option>
            <option  value={false}> Ẩn</option>
      </select>
    </div>
    <br/>
    <button type="submit" className="btn btn-primary float-left" disabled='true'>
      Thêm
    </button>
    <button type="submit" className="btn btn-danger ml-20" onClick={this.onUpdate} disabled={true}>
      Update
    </button>
    <button type="reset" className="btn btn-danger float-right" onClick={this.onReset}>
      Reset
    </button>
  </form>
</div>
    )
}
}
export default TaskForm;