import React from "react"
import axios from "axios"
export default class StudentList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            students:[]
        }
    }
    showItems(){
        axios.get("http://localhost:3001/students")
        .then(res=>{
            console.log(res.data);
            this.setState({students:res.data})
        }
        )
    }
    componentDidMount(){
       
       this.showItems()

        
        
    }
    deleteStudent(id){
        axios.delete("http://localhost:3001/students/"+id)
        this.showItems()}
    render(){
        return(
            <>
            <h1>Student Lists</h1>
            <table className="table table-bnorders">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>
                </thead>
                <tbody>
                   {this.state.students.map((student)=>
                    
                        <tr>
                           <td>{ student.id}</td>
                           <td>{ student.name}</td>
                           <td>{ student.email}</td>
                           <td><button className="btn btn-info">Info</button></td>
                           <td><button className="btn btn-primary">Edit</button></td>
                           <td><button className="btn btn-danger"onClick={()=>this.deleteStudent(student.id)}>Delete</button></td>
                           
                        </tr>
                   )
                    }
                    <button onClick>

                    </button>
                
                </tbody>
            </table>
            </>
        )
    }
    
}