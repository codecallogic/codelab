import React, { Component } from 'react';

class Productions extends Component {

    constructor() {
        super()
        this.state = {
           name: '',
           content: '',
           file: '',
           song: 'Choose File',
           error: '',
           sucess: '',
           formData: '',
           buttonText: 'Upload File',
           songUploadText: '',
           songForm: false,
        }
      }

    handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('file', this.state.file)
        this.setState({
            buttonText: 'Uploading',
        })
        console.log(data)
    }

    handleFile = (e) => {
        this.setState({
            song: e.target.value,
            file: e.target.files[0]
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    songForm = () => {
        this.setState(prevState => ({
            songForm: !prevState.songForm
        }))
    }
    
    render () {
       
        return (
            <div>
                <div className="section-upload">
                    <h1 className="heading-section-title">Upload</h1>
                    <div className="u-width-3">
                        <button className="btn-submit" onClick={this.songForm}>Song Form</button>
                    </div>
                </div>
                <div className="section-upload-form u-center-text">
                    {this.state.songForm === true && 
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" type="text" name="name" placeholder="File Name" value={this.state.name} onChange={this.handleChange} autoComplete="off"/>
                            <label htmlFor="name">File name</label>
                        </div>
                        <div className="form-group">
                            <textarea type="text" name="content" placeholder="File Content" value={this.state.content} onChange={this.handleChange} autoComplete="off"/>
                            <label htmlFor="name">File Content</label>
                        </div>
                        <div className="form-group">
                            <input type="file" id="song-upload" name="file" onChange={this.handleFile} autoComplete="off"/>
                            <label htmlFor="song-upload" className="form-group-file"><i className="fas fa-upload"></i> {this.state.song.split('\\').slice(-1)[0].substring(0,15)}</label>
                        </div>
                    <button className="btn-submit">{this.state.buttonText}</button>
                    </form>
                    }
                </div>
            </div>
        )
    }
}
export default Productions