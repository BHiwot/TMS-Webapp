import React, { Component } from 'react'
import { useEffect, useState } from 'react'

const Courses = () => {
 
  
    return (
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Simple Tables</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Simple Tables</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Bordered Table</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table className="table table-bordered">
                <thead>                  
                  <tr>
                    <th style={{width: 10}}>#</th>
                    <th>Task</th>
                    <th>Progress</th>
                    <th style={{width: 40}}>Label</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Update software</td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-danger">55%</span></td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Clean database</td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-warning" style={{width: '70%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-warning">70%</span></td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Cron job running</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div className="progress-bar bg-primary" style={{width: '30%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-primary">30%</span></td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>Fix and squish bugs</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div className="progress-bar bg-success" style={{width: '90%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-success">90%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">
              <ul className="pagination pagination-sm m-0 float-right">
                <li className="page-item"><a className="page-link" href="#">«</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">»</a></li>
              </ul>
            </div>
          </div>
          {/* /.card */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Condensed Full Width Table</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th style={{width: 10}}>#</th>
                    <th>Task</th>
                    <th>Progress</th>
                    <th style={{width: 40}}>Label</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Update software</td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-danger">55%</span></td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Clean database</td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-warning" style={{width: '70%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-warning">70%</span></td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Cron job running</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div className="progress-bar bg-primary" style={{width: '30%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-primary">30%</span></td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>Fix and squish bugs</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div className="progress-bar bg-success" style={{width: '90%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-success">90%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Simple Full Width Table</h3>
              <div className="card-tools">
                <ul className="pagination pagination-sm float-right">
                  <li className="page-item"><a className="page-link" href="#">«</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">»</a></li>
                </ul>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{width: 10}}>#</th>
                    <th>Task</th>
                    <th>Progress</th>
                    <th style={{width: 40}}>Label</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Update software</td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-danger">55%</span></td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Clean database</td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-warning" style={{width: '70%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-warning">70%</span></td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Cron job running</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div className="progress-bar bg-primary" style={{width: '30%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-primary">30%</span></td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>Fix and squish bugs</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div className="progress-bar bg-success" style={{width: '90%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-success">90%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Striped Full Width Table</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th style={{width: 10}}>#</th>
                    <th>Task</th>
                    <th>Progress</th>
                    <th style={{width: 40}}>Label</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Update software</td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-danger">55%</span></td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Clean database</td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-warning" style={{width: '70%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-warning">70%</span></td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Cron job running</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div className="progress-bar bg-primary" style={{width: '30%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-primary">30%</span></td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>Fix and squish bugs</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div className="progress-bar bg-success" style={{width: '90%'}} />
                      </div>
                    </td>
                    <td><span className="badge bg-success">90%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Responsive Hover Table</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{width: 150}}>
                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0">
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>183</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-success">Approved</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>219</td>
                    <td>Alexander Pierce</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-warning">Pending</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>657</td>
                    <td>Bob Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-primary">Approved</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>175</td>
                    <td>Mike Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-danger">Denied</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Fixed Header Table</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{width: 150}}>
                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0" style={{height: 300}}>
              <table className="table table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>183</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-success">Approved</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>219</td>
                    <td>Alexander Pierce</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-warning">Pending</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>657</td>
                    <td>Bob Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-primary">Approved</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>175</td>
                    <td>Mike Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-danger">Denied</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>134</td>
                    <td>Jim Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-success">Approved</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>494</td>
                    <td>Victoria Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-warning">Pending</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>832</td>
                    <td>Michael Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-primary">Approved</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>982</td>
                    <td>Rocky Doe</td>
                    <td>11-7-2014</td>
                    <td><span className="tag tag-danger">Denied</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>


    )
  }

export default Courses