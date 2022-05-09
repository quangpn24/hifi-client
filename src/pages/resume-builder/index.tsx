import { Affix, Col, Drawer, Row } from 'antd';
import AppIcon from 'components/commons/AppIcon';
import LeftNav from 'components/resume-builder/LeftNav';
import Resume from 'components/resume-builder/Resume';
import { DownloadTool } from 'components/resume-builder/widgets';
import ColorTool from 'components/resume-builder/widgets/ColorTool';
import { NextPage } from 'next';
import { useRef, useState } from 'react';
import style from './index.module.less';

const ResumeBuilder: NextPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const componentToPrint = useRef(null);

  return (
    <div style={{ minHeight: '100vh' }} className='py-8'>
      <h2 className='contain'>Resume builder</h2>
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
          {/* <FontFamilyTool />
          <FontSizeTool /> */}
          <ColorTool />
          <DownloadTool componentToPrint={componentToPrint} />
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
          <Resume componentToPrint={componentToPrint} />
        </Col>
      </Row>
    </div>
  );
};

export default ResumeBuilder;
