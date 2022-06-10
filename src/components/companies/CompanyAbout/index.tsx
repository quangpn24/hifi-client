interface Props {
  company: Company;
}

const CompanyAbout = ({ company }: Props) => {
  return (
    <>
      <h4 className='text-2xl font-semibold mb-2'>{company?.name}</h4>
      <p className='my-0'>{company.summary}</p>
    </>
  );
};

export default CompanyAbout;
