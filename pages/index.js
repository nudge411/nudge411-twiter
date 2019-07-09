import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

const Home = () => {
  const { me, isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <div>
      {me
        ? <div> 로그인 했습니다 : {me.nickname} </div>
        : <div> 로그아웃 했습니다. </div>}
      {isLoggedIn && <PostForm />}
      {mainPosts.map(c => (
        <PostCard key={c} post={c} />
      ))}
    </div>
  );
};

export default Home;

// <Form encType="multipart/from-data" /> 이미지업로드를 위함
