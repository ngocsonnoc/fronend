import { Component } from "react";

class CourseItem extends Component{
    onDelete=()=>{
       this.props.onAction({id:this.props.course.id,action:'delete'})
    }
    onUpdate=()=>{
        this.props.onAction({course:this.props.course,action:'update'})
    }
    render(){
        var {course,index}= this.props
        return(
            <tr>
                                    <td>{index+1}</td>
                                    <td>{course.last_name}</td>
                                    <td>{course.username}</td>
                                    <td className="text-center">
                                        <span className={course.status===1 ? 'badge badge-success':'badge badge-danger'}  >
                                        {course.status===1 ? 'Kích hoạt':'Ẩn'}
                                                </span>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
                                            <span className="fa fa-pencil mr-5" ></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                                            <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                    </td>
                                </tr>
        )
    }
}
export default CourseItem;