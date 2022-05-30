interface IProps {
  title: string;
}

const InputTitle = (props: IProps) => {
  return <p className='m-0 text-sm font-medium'>{props.title}</p>;
};

export default InputTitle;
