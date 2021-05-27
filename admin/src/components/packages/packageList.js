import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';


const Exercise=props=>(
    <tr>
        <td>{props.exercise.packageno}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.packageprice}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
    
    <td>
    <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href=" " onClick={()=>{props.deleteExercise(props.exercise._id)}}>delete</a>
    </td>
    </tr>
)

export default class PackageList extends Component {

    constructor(props){
        super(props);

        this.deleteExercise=this.deleteExercise.bind(this);
        this.state={exercises:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/package')
        .then(response=>{
            this.setState({exercises:response.data})
        })

        .catch((error)=>{
            console.log(error);
        })
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/package/'+id)
        .then(res=>console.log(res.data));

        this.setState({
            exercises:this.state.exercises.filter(el=>el._id!==id)
        })
    }

    exerciseList(){
        return this.state.exercises.map(currentexercise=>{
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>logged exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>package Number</th>
                        <th>Description</th>
                        <th>package Price</th>
                        <th>date</th>
                        <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
