import { useAppSelector } from 'redux/hooks';
import { selectAward, selectEducation, selectIntro, selectWork } from 'redux/selectors';
import { AWARD_METADATA, EDU_METADATA, WORK_METADATA } from 'constant/input-metadata';
import TimelineEditor from '../TimelineEditor';
import {
  addEducation,
  changeOrderEducation,
  removeEducation,
  updateEducation,
} from 'redux/reducers/educationReducer';
import { addWork, changeOrderWork, removeWork, updateWork } from 'redux/reducers/workReducer';
import { addAward, changeOrderAward, removeAward, updateAward } from 'redux/reducers/awardReducer';

export const EducationEditor = () => {
  const state = useAppSelector(selectEducation);

  return (
    <TimelineEditor
      METADATA={EDU_METADATA}
      state={state}
      operation={{
        add: addEducation,
        changeOrder: changeOrderEducation,
        remove: removeEducation,
        update: updateEducation,
      }}
      identifier='institution'
    />
  );
};

export const WorkEditor = () => {
  const state = useAppSelector(selectWork);

  return (
    <TimelineEditor
      METADATA={WORK_METADATA}
      state={state}
      operation={{
        add: addWork,
        changeOrder: changeOrderWork,
        remove: removeWork,
        update: updateWork,
      }}
      identifier='name'
    />
  );
};

export const AwardEditor = () => {
  const state = useAppSelector(selectAward);

  return (
    <TimelineEditor
      METADATA={AWARD_METADATA}
      state={state}
      operation={{
        add: addAward,
        changeOrder: changeOrderAward,
        remove: removeAward,
        update: updateAward,
      }}
      identifier='title'
    />
  );
};
