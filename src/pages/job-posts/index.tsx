import postApi from 'api/postApi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Props = {};

const PostListPage = (props: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();
  useEffect(() => {
    let isMounted = true;
    postApi
      .getPosts()
      .then((posts) => {
        isMounted && setPosts(posts ?? []);
      })
      .catch((err) => {
        console.log('getPosts Error: ', err);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Link href={`${router.pathname}/${post._id}`} key={post._id}>
          <a>
            <div className='my-6'>{post.title}</div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PostListPage;
