import { Button, Col, Divider, Modal, Row, Tooltip } from 'antd';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share';
import React, { useState } from 'react';
import { HeroIcon } from 'utils/HeroIcon';

type Props = {
  visible: boolean;
  onCancel?: () => void;
  url: string;
};

const ShareModal = (props: Props) => {
  const [isCopy, setIsCopy] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText('123');
    setIsCopy(true);
  };
  const onCancel = () => {
    props.onCancel?.();
    setIsCopy(false);
  };
  return (
    <Modal width={400} visible={props.visible} title='Share' footer={null} onCancel={onCancel}>
      <Row className=' m-[-10px]'>
        <Col span={6} className=' flex !justify-center'>
          <FacebookShareButton url={props.url}>
            <FacebookIcon size={32} round />
            <div className=' font-semibold'>Facebook</div>
          </FacebookShareButton>
        </Col>
        <Col span={6} className=' flex !justify-center'>
          <TwitterShareButton url={props.url}>
            <TwitterIcon size={32} round />
            <div className=' font-semibold'>Twitter</div>
          </TwitterShareButton>
        </Col>
        <Col span={6} className=' flex !justify-center'>
          <LinkedinShareButton url={props.url}>
            <LinkedinIcon size={32} round />
            <div className=' font-semibold'>Linkedin</div>
          </LinkedinShareButton>
        </Col>
        <Col span={6} className=' flex !justify-center'>
          <RedditShareButton url={props.url}>
            <RedditIcon size={32} round />
            <div className=' font-semibold'>Reddit</div>
          </RedditShareButton>
        </Col>
      </Row>
      <h3 className='mt-8'>Page link</h3>
      <Tooltip title='Copy link'>
        <Button block className='bg-[#F8F9FA]' onClick={() => copyLink()}>
          <Row className='flex items-center w-full'>
            <Col span={22} className='text-left'>
              <div className='w-full text-ellipsis whitespace-nowrap overflow-hidden'>
                {props.url}
              </div>
            </Col>
            <Col span={2} className=' flex item-center justify-end'>
              {isCopy ? (
                <HeroIcon icon='CheckCircleIcon' color='text-[#71A413]' />
              ) : (
                <HeroIcon icon='DuplicateIcon' outline />
              )}
            </Col>
          </Row>
        </Button>
      </Tooltip>
    </Modal>
  );
};

export default ShareModal;
