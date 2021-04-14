import { FeedContainer } from './styles';
import PostCard from '../../../../components/PostCard';
import { PostInfo } from '../../../../components/PostCard/styles';


function Feeds() {
  const posts = [
    {
      id: 1,
      avatar: 'https://avatars.githubusercontent.com/u/6643122?v=4',
      author: 'Lucas Nhimi',
      postImage: 'https://conectadev.vercel.app/images/posts/post1.png',
    },
    {
      id: 2,
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      author: 'Pedro Cabral',
      postImage: 'https://conectadev.vercel.app/images/posts/post1.png',
    },
    {
      id: 3,
      avatar: 'hhttps://avatars.githubusercontent.com/u/10366880?v=4',
      author: 'Guilherme',
      postImage: 'https://conectadev.vercel.app/images/posts/post1.png',
    },
    
  ];
  return (
    <FeedContainer>
      { posts.map(post => {
        return <PostCard key={post.id}  post={post}/>
      }) }
    </FeedContainer>
  );
}

export default Feeds;
