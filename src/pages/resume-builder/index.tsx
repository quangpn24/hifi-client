import { Affix, Col, Drawer, Row } from 'antd';
import AppIcon from 'components/commons/AppIcon';
import LeftNav from 'components/resume-builder/LeftNav';
import Resume from 'components/resume-builder/Resume';
import { DownloadTool, FontFamilyTool, FontSizeTool } from 'components/resume-builder/widgets';
import { NextPage } from 'next';
import { useState } from 'react';
import style from './index.module.less';

const ResumeBuilder: NextPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div style={{ minHeight: '100vh' }} className=' py-8'>
      <h2>Resume builder</h2>
      <div className={style.affixContent} onClick={() => setIsVisible(true)}>
        <AppIcon icon='Io5/IoDocumentTextOutline' size='26' />
        <p>My content</p>
      </div>
      <div className={style.affixTemplate} onClick={() => setIsVisible(true)}>
        <AppIcon icon='Io5/IoDocumentTextOutline' size='26' />
        <p>Switch template</p>
      </div>
      <Affix offsetTop={80}>
        <div className={style.affixTool}>
          <FontFamilyTool />
          <FontSizeTool />
          <DownloadTool />
        </div>
      </Affix>
      <Drawer
        placement='left'
        closable={false}
        onClose={() => setIsVisible(false)}
        visible={isVisible}
        getContainer={false}
        width={550}
        style={{ position: 'absolute' }}
        bodyStyle={{ padding: '8px' }}
      >
        <LeftNav />
      </Drawer>
      <Row justify='center'>
        <Col>
          <Resume />
        </Col>
      </Row>
    </div>
  );
};

export default ResumeBuilder;
