import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, message, Modal } from 'antd';
import Header from '../Header';
import { Input } from 'antd';
import ActionSuggestion from '../ActionSuggestion';
import userApi from 'api/userApi';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import { authActions } from 'redux/reducers/authSlice';
import axios from 'axios';
import HrefContainer from '../HrefContainer';

const { TextArea } = Input;

const AboutMe = () => {
  const user = useAppSelector(selectUser);
  return (
    <HrefContainer id='about-me'>
      <Header text={'About Me'} />
      <Divider className='!my-2' />
      <div className='mt-4'>
        <p>{user?.about}</p>
      </div>
    </HrefContainer>
  );
};

export default AboutMe;
