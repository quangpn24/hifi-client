import styled from 'styled-components';

const Label = styled.h3`
  text-decoration: underline;
  text-decoration-color: #514cdd;
  text-decoration-thickness: 4px;
  text-underline-offset: 2px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
`;

const LabelSection = ({ title, icon }: any) => {
  return (
    <div className='flex items-center gap-2 mt-2 mb-1'>
      {icon}
      <Label>{title}</Label>
    </div>
  );
};

export default LabelSection;
