import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePackageno extends Component {

    constructor(props){
        super(props);

        this.onChangePackageno=this.onChangePackageno.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    this.state={
        packageno:'',
       
    }
}

    onChangePackageno(e){
    this.setState({
        packageno:e.target.value
    });
    }


    onSubmit(e){
        e.preventDefault();
   
        const packageNo={
            packageno:this.state.packageno
        }
        console.log(packageNo);  

        axios.post('http://localhost:5000/packageno/add',packageNo)
         .then(res=>console.log(res.data));
        
        this.setState({
            packageno:''
        })

        window.location='/packageDis';
    }
   

    render() {
        return (
            <div>
                <h3>
                    Create new Package
                </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Package Number</label>
                        <input
                        type="text"
                        required
                        className="form-control"
                        value={this.state.packageno}
                        onChange={this.onChangePackageno}
                        />

                    </div>

                    <div className="form-group">
                        <input
                        type="Submit"
                        value="Create NEW Package"
                        className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
