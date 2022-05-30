import emailApi from 'api/emailApi';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

type Props = {};

const AccountVerifcationPage = (props: Props) => {
  return <div>AccountVerifcationPage</div>;
};

interface IParams extends ParsedUrlQuery {
  accountId: string;
  token: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { accountId, token } = context.params as IParams;
  const { redirectPath } = context.query;
  try {
    await emailApi.verifyAccountToken(accountId, token);
    return {
      redirect: {
        permanent: false,
        destination: redirectPath || '/profile',
      },
      props: {},
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default AccountVerifcationPage;
