import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import _ from 'lodash'

class PostsNew extends Component {

  onSubmit(values){
    _.forOwn(values, (v,k)=>{console.log("submitted:", k,":",v)});
  }

  constructor(props){
    super(props);
    this.onSubmit=this.onSubmit.bind(this);
  }

  render(){

    const {handleSubmit}=this.props;

    return (<form onSubmit={handleSubmit(this.onSubmit)}>
      <Field name="title" component={this.renderField} label="Post Title"/>
      <Field name="categories" component={this.renderField}  label="Categories"/>
      <Field name="content" component={this.renderField}  label="Content"/>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>);
  }

  renderField(field){
    return (<div className="form-group">
              <label>{field.label}</label>
              <input {...field.input} className="form-control"/>
              <div className="alert-danger">{field.meta.touched?field.meta.error:''}</div>
            </div>);
  }

}

const textboxFor= ({label, field})=> (<div><label>{label}</label><input {...field.input} /></div>);

function validate(values){
  const errors={};
  _.mapKeys(['title','content'], (f)=>{ values[f]||(errors[f]= `Please enter ${f}.`) });

  _.forOwn(values, (v,f)=>{ console.log("value: ",f,v)});
  _.forOwn(errors, (v,f)=>{ console.log("error: ",f,v)});
  return errors;
}

export default reduxForm({validate, form:'PostsNewForm'})(PostsNew);