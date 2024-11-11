import React, { Component,useState } from 'react';
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export default class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      newEntry: {
        title: "I am a bad forum entry",
        content: '<iframe title="Embedded Content" src="/iframecontent.html" width="100%" height="600" ></iframe>',
      },
    };   
  }

  componentDidMount() {
   
    this.initEntries();
  }

  initEntries = () => {
    this.resetEntries();
    this.getAllEntries();
  }

  resetEntries = () => {    

    this.setState({ entries: [] });
    // API Call to Backend
    // axios
    //   .delete(`${backendUrl}/IssuesForum/Reset`)
    //   .then((response) => {
    //     this.getAllEntries();
    //   })
    //   .catch((error) => {
    //     console.error('Error deleting entries:', error);
    //   });
  }

  getAllEntries() {    

    let entryList = [
      {
        title: 'the latest forum entry',
        content: 'The new security issue is that the backend is not secure',
      },
      {
        title: 'Another forum entry',
        content: 'This is not the oldest forum entry',
      },
      {
        title: 'Oldest forum entry',
        content: 'This is the oldest forum entry',
      },]
      this.setState({ entries: entryList });
      // API Call to Backend
      // axios
      //   .get(`${backendUrl}/IssuesForum/GetAllEntries`)
      //   .then((response) => {
      //     if (response.data){
      //       this.setState({ entries: response.data });
      //     }else{
      //       console.error('No data received from the backend');
      //     }
          
      //   })
      //   .catch((error) => {
      //     console.error('Error loading the forum entries:', error);
      //   });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      newEntry: {
        ...this.state.newEntry,
        [name]: value,
      },
    });
  };
  
  addEntry = () => {
    
    this.state.entries.unshift(this.state.newEntry);
     this.setState({ entries: this.state.entries });
     // API Call to Backend
    // axios
    //   .post(`${backendUrl}/IssuesForum/Post`, {
    //     title: this.state.newEntry.title,
    //     content: this.state.newEntry.content,
    //   })
    //   .then((response) => {
    //     this.getAllEntries();
    //   })
    //   .catch((error) => {
    //     console.error('Error adding entry:', error);
    //   });
  };

  render() {
    return (
      <div>
        <div>
          <h3>This is a simple forum. Send the text and see what happens</h3>
        </div>
        
        <div>
          <h4>Last Entries</h4>
          <ul>
            {this.state.entries.map((entry, index) => (
              <li key={index}>
                <h5>{entry.title}</h5>
                <p dangerouslySetInnerHTML={{ __html:entry.content}}></p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label>
            <h4>New forum entry:</h4>
            Title: <input type="text" name="title" value={this.state.newEntry.title} readOnly/><br />
            Content:
            <textarea name="content" rows={4} cols={100}  value={this.state.newEntry.content} readOnly/>
          </label>
          <button onClick={this.addEntry}>Add Entry</button>
        </div>
      </div>
    );
  }
}
