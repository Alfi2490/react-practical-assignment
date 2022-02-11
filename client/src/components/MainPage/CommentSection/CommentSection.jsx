import './CommentSection.css';
import Comment from '../Comment/Comment';

export default function CommentSection(props) {
    return <div className="CommentsSection" style={{display: props.commentSectionVision}}>
        <button className='CommentSectionCloseButton' onClick={() => props.setCommentsSectionVision('none')}>Close comments</button>
        <div className="CommentsList">{props.comments.map(c => <Comment key={c.id} id={c.id} comment={c}/>)}</div>
        
    </div>
}