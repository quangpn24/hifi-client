import { NextPage } from 'next';
import { useAppSelector } from 'redux/hooks';
import { selectActivity, selectEducation, selectIntro, selectSocial } from 'redux/selectors';

const Resume: NextPage = () => {
  const intro = useAppSelector(selectIntro);
  const social = useAppSelector(selectSocial);
  const education = useAppSelector(selectEducation);
  const activity = useAppSelector(selectActivity);

  return (
    <div>
      <h2>Resume</h2>
      {JSON.stringify(activity, null, 4)}
    </div>
  );
};

export default Resume;
