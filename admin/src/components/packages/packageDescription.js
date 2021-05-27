import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
export default class CreatePackage extends Component {

    constructor(props){
        super(props);

        this.onChangePackageno=this.onChangePackageno.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangePackageprice=this.onChangePackageprice.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    this.state={
        packageno:'',
        description:'',
        packageprice:'',
        date: new Date(),
        packages:[]
    }
}

        componentDidMount(){
          axios.get('http://localhost:5000/packageno/')
          .then(Response=>{
              if(Response.data.length>0){
                this.setState({
                    packages:Response.data.map(user=>user.packageno),
                    packageno:Response.data[0].packageno
                })
              }
          })

        }

        onChangePackageno(e){
        this.setState({
        packageno:e.target.value
        });
        }
        onChangeDescription(e){
        this.setState({
        description:e.target.value
        });
        }

        onChangePackageprice(e){
        this.setState({
        packageprice:e.target.value
        });
        }

        onChangeDate(date){
        this.setState({
        date: date
        });
        }

 onSubmit(e){
     e.preventDefault();

     const exercise={
         packageno:this.state.packageno,
         description:this.state.description,
         packageprice:this.state.packageprice,
         date:this.state.date
     }
     console.log(exercise);

     axios.post('http://localhost:5000/package/add',exercise)
         .then(res=>console.log(res.data));

    window.location='/packagelist';
 }



    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>packageno</label>
                        <select ref="packageInput"
                        required
                        className="form-control"
                        value={this.state.packageno}
                        onChange={this.onChangePackageno}>

                            {
                                this.state.packages.map(function(user){
                                    return<option
                                    key={user}
                                    value={user}>{user}
                                    </option>
                                })
                            }
                        </select>
                    </div>

                            <div className="form-group">
                                <label>description:</label>
                                <input type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                            </div>

                            <div className="form-group">
                                <label>packageprice (in SriLankan RS.): </label>
                                <input 
                                type="text"
                                className="form-control"
                                value={this.state.packageprice}
                                onChange={this.onChangePackageprice}
                                />
                            </div>

                            <div className="form-group">
                                <label>Date : </label>
                                <div>
                                    <DatePicker
                                    selected={this.state.date}
                                    onChange={this.onChangeDate}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                            </div>

                </form>
            </div>
        )
    }
}
