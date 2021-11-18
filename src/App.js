
import './App.css';
import TaskForm from './Components/Form/TaskForm';
import Control from './Components/Task/Control';
import Header from './Components/Header/Header'
import Table from './Components/Table/Table'
import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
      isDisplayForm: false,
      dataUpdate: {
        name: '',
        status: true,
        id: '',
        updateStatus: true,
        filter: {
          name: '',
          status: -1
        }
      },
      keyword: '',
      sort: {
        sortBy: 'name',
        sortVal: 0
      }
    }
  }
  componentDidMount() {
    axios({
      method: 'GET',
      url: process.env.REACT_APP_BASE_URL,
      data: null
    }).then(res => {
      this.setState({ courses: [...res.data] })
    }

    ).catch(err => console.log(err))
  }
  onGenerateData = () => {
    localStorage.setItem('courses', JSON.stringify(this.state.courses))
  }
  ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  sendStatusDisplay = (value) => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }
  onSubmitForm = (data) => {
    var course = {
      id: this.ID(),
      name: data.courseName,
      status: data.status
    }
    var courses = this.state.courses
    courses.push(course)
    console.log(courses)
    this.setState({
      courses: courses
    })
    this.onGenerateData()
  }
  onUpdateData = (data) => {
    if (data.action === 'delete') {
      var courses = this.state.courses
      var coursesUpdate = courses.filter((course, index, arr) => {
        return (
          course.id !== data.id
        )
      })
      this.setState({
        courses: coursesUpdate
      })
    } else
      if (data.action === 'update') {
        var newVal = {
          name: data.course.name,
          status: data.course.status,
          updateStatus: false,
          id: data.course.id
        }
        this.setState({
          dataUpdate: newVal,
        })
        this.sendStatusDisplay()
      }

  }
  dataReply = (value) => {
    var courses = this.state.courses
    var updateCourses = courses.filter((course, index) => {
      if (course.id === value.id) {
        course.last_name = value.state.courseName
        course.username = value.state.username
        course.status = value.state.status
      }
      return course
    })
    this.setState({
      courses: updateCourses,
      isDisplayForm: true,
      dataUpdate: {
        name: '',
        status: true,
        id: '',
        updateStatus: true
      }
    })
    this.sendStatusDisplay()
    this.onGenerateData()

  }
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10)
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })

  }
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword.keyword
    })
  }
  onSort = (val) => {
    this.setState({
      sort: val
    })
  }
  render() {
    var { courses, isDisplayForm, filter, keyword, sort } = this.state
    var elmTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmitForm} dataUpdate={this.state.dataUpdate} dataReply={this.dataReply} /> : '';
    if (filter) {
      if (filter.name) {
        courses = courses.filter((course) => {
          return course.last_name.toLowerCase().indexOf(filter.name) !== -1;
        })
      }
      courses = courses.filter((course) => {
        if (filter.status === 1) {
          return course
        } else {
          return course.status === (filter.status === -1 ? true : false)
        }
      })
    }
    if (keyword) {
      courses = courses.filter((course) => {
        return course.last_name.toLowerCase().indexOf(keyword) !== -1
      })
    }
    if (sort.sortBy === 'name') {
      courses = courses.sort((a, b) => {
        if (a.last_name > b.last_name) {
          return sort.sortVal
        } else if (
          a.last_name < b.last_name
        ) {
          return -sort.sortVal
        } else {
          return 0
        }
      })
    }
    if (sort.sortBy === 'status') {
      courses = courses.sort((a, b) => {
        if (a.last_name > b.last_name) {
          return 1
        } else if (
          a.last_name < b.last_name
        ) {
          return -1
        } else {
          return 0
        }
      })
    }
    return (
      <div className="container">
        <Header />
        <div className="row mt-15">
          <div className="col-md-4 col-m-auto">
            {elmTaskForm}
          </div>
          <div className={isDisplayForm ? 'col-md-8 col-m-auto' : 'col-md-12 col-m-auto'}>
            <Control onChangeDispaly={this.sendStatusDisplay}
              isDisplayForm={this.state.isDisplayForm}
              onSearch={this.onSearch}
              onSort={this.onSort}
            />
            <Table courses={courses} onUpdateData={this.onUpdateData} onFilter={this.onFilter} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
