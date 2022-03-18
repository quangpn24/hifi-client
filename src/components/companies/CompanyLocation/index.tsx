import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Col, Row } from 'antd';
import { HeroIcon } from 'components/commons/HeroIcon';

const key = '';

interface Props {
  center: google.maps.LatLngLiteral;
  location: google.maps.LatLngLiteral;
  address: string;
}

const CompanyLocation = (props: Props) => {
  return (
    <Row gutter={[40, 20]}>
      <Col span={8}>
        <h3 className='text-2xl font-semibold'>Location</h3>
        <div className='flex item-center gap-1'>
          <HeroIcon icon='LocationMarkerIcon' />
          <p>{props.address}</p>
        </div>
      </Col>
      <Col span={16}>
        <LoadScript googleMapsApiKey={key}>
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '400px',
            }}
            center={props.center}
            zoom={15}
          >
            <Marker position={props.location} />
          </GoogleMap>
        </LoadScript>
      </Col>
    </Row>
  );
};

export default React.memo(CompanyLocation);
