import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';



export default function Session() {
    //const {id} = useParams();
    // 👇️ get ID from url
    const params = useParams();
  
    console.log(params); // 
    const [schedules, setSch] = useState([])
    //const course =  Course.findById(params.id);

        useEffect(()=> {
            fetch('/Session/:id')
            .then(res => {
                console.log(res)
                setSch(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }, [])

 


  return (
    <div>
        <div class="content-wrapper">

<section class="content-header">
<div class="container-fluid">
<div class="row mb-2">

<div class="col-sm-6">
<h1>Session Page</h1>
</div>
<div class="col-sm-6">
<ol class="breadcrumb float-sm-right">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li class="breadcrumb-item active">Session Page</li>
</ol>
</div>
</div>
</div>
</section>

<section class="content">

<div class="card">
<div class="card-header">
<h3 class="card-title">
Course: {schedules && schedules.map((schedule, id) => (
               <li key = {params.id} >
               {schedule.course} </li>
       
               ))}<br /><br />
Trainer <br /><br />
Date <br /><br />
Room
</h3>
<div class="card-tools">

</div>
</div>
<div class="card-body">
<form>
<div className="col-md-6">
  <div className="form-group">
    <label>Trainee List</label>
    <select className="select2" multiple="multiple" data-placeholder="Select a State" style={{width: '100%'}}>
      <option>Alabama</option>
      <option>Alaska</option>
      <option>California</option>
      <option>Delaware</option>
      <option>Tennessee</option>
      <option>Texas</option>
      <option>Washington</option>
    </select>
  </div>
</div>

</form>



</div>

<div class="card-footer">
<button type      = "submit" className = "btn btn-primary">Submit</button>
 
</div>

</div>

</section>

</div>
    </div>
  )
}
