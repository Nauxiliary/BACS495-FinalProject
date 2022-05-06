import React from 'react'

class Questions extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            question: {
                id: 0,
                body: '',
                votes: 0
            },
            questionsArray: []
        }
        this.getQuestions = this.getQuestions.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.submitQuestion = this.submitQuestion.bind(this)
        this.handleVoteUpdate = this.handleVoteUpdate.bind(this)

    }

    getQuestions() {
        fetch('http://localhost:5000/questions')
        .then(res => res.json()).then(data => {
            this.setState({
                questionsArray: data
            })
        }).catch(console.log)
    }

    handleVoteUpdate(id, votes) {
        var newVotes = votes == 0 ? 1 : votes + 1;
        var updatequestion = {'id': id, 'votes': newVotes}
        fetch('http://localhost:5000/questions/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(updatequestion)
        })
        .then(res => res.json())
        .then(
            this.getQuestions()
        )
    }



    handleChange(e) {
        this.setState({question:{
            body: e.target.value
        }})
    }

    submitQuestion() {
        fetch('http://localhost:5000/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(this.state.question)
        }).then(this.setState({question:{id: 0, body: ''}}))
    }


    render() {
        return (
            <div className='border border-dark my-3 py-3 px-3'>
                <div className='mx-auto'>
                    <h1 className='mx-auto'>New Questions</h1>
                    <form className='mx-auto' onSubmit={this.submitQuestion}>
                        <label htmlFor="id">Write your question here.</label><br/>
                        <textarea id="id" name="question" onChange={this.handleChange} value={this.state.question.body} /><br/>
                        <button className="btn btn-primary">Save</button>
                    </form>
                </div>
                <div className="d-flex flex-column justify-content-end">
                    <ul className="list-group">
                        {(this.state.questionsArray).map(q => (
                            <li className="list-group-item" key={q.id}>
                                {q.id} - {q.body} - Votes: {q.votes == null ? 0:q.votes}
                                <button className="btn btn-warning ms-3" type="button" onClick={() => this.handleVoteUpdate(q.id, q.votes)}>Upvote</button>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-warning" type="button" onClick={this.getQuestions}>Refresh Questions</button>
                </div>
            </div>
        )
    }
}
export default Questions;