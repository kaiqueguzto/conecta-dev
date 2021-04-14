import { PostContainer, PostInfo, PostIcons } from './styles';
import { AiFillHeart } from 'react-icons/ai';
import { MdComment } from 'react-icons/md';

function PostCard({post}) {
  return (
    <PostContainer>
      <PostInfo>
        <img className="post-avatar" src={post.avatar} />
        <div>
          <h2>COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02</h2>
          <p>Escrito por <span>{post.author}</span> a day ago</p>
        </div>
      </PostInfo>
      <img class="post-image" src={post.postImage}/>
      <PostIcons>
          <div>
            <AiFillHeart size={25} color="#848484"/>
            <span>10</span>
          </div>
          <div>
            <MdComment size={25} color="#848484"/>
            <span>30</span>
          </div>
      </PostIcons>
  </PostContainer>
  );
}

export default PostCard;