import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditPackages extends Component {

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
        packagenos:[]
    }
}

        componentDidMount(){

            axios.get('http://localhost:5000/package/'+this.props.match.params.id)
            .then(response=>{
                this.setState({
                    packageno:response.data.packageno,
                    description:response.data.description,
                    packageprice:response.data.packageprice,
                    data:new Date(response.data.data)

                })
            })
            .catch(function(error){
                console.log(error);
            })

          axios.get('http://localhost:5000/packageno')
          .then(Response=>{
              if(Response.data.length>0){
                this.setState({
                    packagenos:Response.data.map(user=>user.packageno),
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

     axios.post('http://localhost:5000/package/update/'+this.props.match.params.id,exercise)
         .then(res=>console.log(res.data));

     window.location='/packagelist';
 }



    render() {
        return (
            <div>
                <h3> Update Package Deatails </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>packageno</label>
                        <select ref="packageInput"
                        required
                        className="form-control"
                        value={this.state.packageno}
                        onChange={this.onChangePackageno}>

                            {
                                this.state.packagenos.map(function(user){
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
                                
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                            </div>

                            <div className="form-group">
                                <label>packageprice (in minutes): </label>
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
