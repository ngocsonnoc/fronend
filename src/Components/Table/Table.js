import { Component } from "react";
import CourseItem from "./CourseItem";
class Table extends Component{
    constructor(props){
        super(props)
        this.state=({
            filterName:'',
            filterStatus:1
        })
    }
    onAction=(value)=>{
        if(value){
            this.props.onUpdateData(value)
        }
    }
    onChange=(element)=>{
        var target = element.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]:value
        })
     this.props.onFilter(name==='filterName'?value:this.state.filterName,
                        name==='filterStatus'?value:this.state.filterStatus
        )
    }
    render(){
        var courses = this.props.courses
        var elementsCourse
             elementsCourse = courses.map((course,index)=>{
                    return(
                            <CourseItem key={course.id} index={index} course={course} onAction={this.onAction}/>
                        )
                })

        var {filterName,filterStatus}= this.state
        return(
            <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr key={1}>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Tên đăng nhập</th>
                                    <th className="text-center">Trạng thái</th>
                                    <th className="text-center">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onChange} />
                                    </td>
                                    <td>
                                        <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange}>
                                            <option value={1}>Tất Cả</option>
                                            <option value={0}>Ẩn</option>
                                            <option value={-1}>Kích Hoạt</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                                {elementsCourse }
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}
export default Table;