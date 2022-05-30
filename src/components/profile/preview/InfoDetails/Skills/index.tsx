import { Divider, message } from 'antd';
import userApi from 'api/userApi';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
import { selectUser } from 'redux/selectors';
import Header from '../Header';
import HrefContainer from '../HrefContainer';
import SkillsList from './SkillsList';

type Props = {};

const Skills = ({}: Props) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let mounted = true;
    userApi
      .getUserSkills()
      .then((res) => {
        if (mounted) {
          dispatch(authActions.update({ user: res.user }));
        }
      })
      .catch((err) => {
        message.error(err.message);
      });

    return () => {
      mounted = false;
    };
  }, [dispatch]);

  return (
    <>
      <HrefContainer id='skills'>
        <Header text={'Skills'} />
        <Divider className='!my-2' />
        {(!!user?.skills && user?.skills?.length) > 0 ? (
          <SkillsList skills={user?.skills} />
        ) : (
          <p>No skills</p>
        )}
      </HrefContainer>
    </>
  );
};

export default Skills;
