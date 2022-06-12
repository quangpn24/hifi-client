import { Card } from 'antd';
import { HeroIcon } from 'components/commons/HeroIcon';

interface Props {
  locations: WorkLocation[];
}

const CompanyLocation = ({ locations }: Props) => {
  return (
    <Card>
      <h5 className='text-xl font-semibold'>Address</h5>
      {locations.map((location) => (
        <div key={location._id} className='mb-4'>
          <div className='flex flex-row gap-2'>
            <HeroIcon icon='LocationMarkerIcon' />
            <p className='my-0 font-medium'>{location?.officeName}</p>
          </div>
          <p className='my-0'>
            {location?.address} {location?.city}
          </p>
        </div>
      ))}
    </Card>
  );
};

export default CompanyLocation;
