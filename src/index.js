import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDeatail from './CommentDetail'
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure?
                <div>Not I am not</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDeatail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentText="Nice Blog Bro!" 
                    imgSrc={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDeatail 
                    author="Alex" 
                    timeAgo="Today at 2:00PM" 
                    commentText="Fuck This shit!" 
                    imgSrc={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDeatail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    commentText="This site is best, facebook sucks!" 
                    imgSrc={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
