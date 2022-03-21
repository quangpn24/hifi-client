interface Props {
  text: string;
}

const AppHeading = (props: Props) => {
  return <h2 className='text-2xl font-bold'>{props.text}</h2>;
};

export default AppHeading;
