import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link as RouterLink} from 'react-redux'

class Home extends Component{
  componentDidMount(){
    axios.get('http://localhost:3000/post')
    .then(({data})=>{
      this.props.setAllData(data)
    })
  }
  render(){
    const fieldStyle={
      'margin':'30px 0px 0px 0px',
    }
    return(
      <div className="container">
        <form className="row">
        <input className="col" style={fieldStyle} type="text" className="form-control"/>
        <button className="col">ADD</button>
        </form>

          <ul>
            {this.props.allPost.map(post=>{
              return(
                <li key={post.id}>{post.title}</li>
              )
            })}
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allPost:state.getData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAllData : (payload) => dispatch({
      type:'GET_DATA',
      payload:payload
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)