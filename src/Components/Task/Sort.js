import { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
class Sort extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          sort:{
            sortBy:'name',
            sortVal:0
          }
        };
      }

      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
      onClick=(by,val)=>{
        console.log(by,val)
        var sort = {
          sortBy:by,
          sortVal:val
        }
        this.setState({
                  sort:{
                    sortBy:by,
                   sortVal:val
                }
        })
        this.props.onSort(sort)
      }
    render(){
        return(<div className="">
                <Dropdown isOpen={this.state.dropdownOpen} name="filterVal" toggle={this.toggle} >
                    <DropdownToggle caret>
                         Filter by
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem  onClick={()=>this.onClick('name',1)}>A-Z</DropdownItem>
                    <DropdownItem  onClick={()=>this.onClick('name',-1)}>Z-A</DropdownItem>
                    <DropdownItem onClick={()=>this.onClick('status',-2)}>Ẩn</DropdownItem>
                    <DropdownItem onClick={()=>this.onClick('status',2)}>Kích hoạt</DropdownItem>
                    <DropdownItem onClick={()=>this.onClick('name',0)}>Refresh</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </div>
        )
    }
}
export default Sort;