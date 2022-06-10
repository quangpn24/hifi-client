/* eslint-disable @next/next/no-img-element */
import { HomeIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { Col, Row, Tag } from 'antd';

const Item = ({ icon, text }: { icon: JSX.Element; text: any }) => (
  <div className='flex mt-2'>
    {icon}
    <p className='text-[#57557d] ml-2 my-0 font-normal	'>{text}</p>
  </div>
);

interface Props {
  company: Company;
}

const CompanyCard = ({ company }: Props) => {
  return (
    <div className='p-4 h-full rounded-lg bg-white flex flex-col justify-between shadow'>
      <Row gutter={[12, 0]}>
        <Col className='h-40' span={8}>
          <div className='w-full min-h-fit rounded-md border-solid border border-slate-300'>
            <img className='w-full object-contain' src={company?.logo} alt='logo' />
          </div>
        </Col>
        <Col span={16}>
          <a href={`/companies/${company._id}`}>
            <h4 className='text-lg font-semibold my-0 leading-6 text-ellipsis cursor-pointer'>
              {company?.name}
            </h4>
          </a>
          <Item
            icon={<LocationMarkerIcon className='w-5 h-5 text-[#9f9eb5]' />}
            text={company?.locations[0]?.city}
          />
          <Item icon={<HomeIcon className='w-5 h-5 text-[#9f9eb5]' />} text={company?.size} />
        </Col>
      </Row>
      <div>
        {company.industries.map((subcategory) => (
          <Tag key={subcategory._id} color='geekblue'>
            {subcategory.name}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default CompanyCard;
