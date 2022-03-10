import axios from 'axios';
import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

//define type for data
interface Data {
  userId: Number;
  id: Number;
  title: String;
  completed: Boolean;
}

//define type for props
interface Props {
  data: Data;
}

const Home: NextPage<Props> = (props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);
  const { data } = props;
  // dispatch(getUser);
  return (
    <>
      <Head>
        <title>Hifi</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-red-500 flex justify-center text-[20px]'>{data.title}</div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1'); // example

    const data = result.data;
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};
export default Home;