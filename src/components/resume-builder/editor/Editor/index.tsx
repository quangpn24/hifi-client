import { useAppSelector } from 'redux/hooks';
import { selectEducation, selectWork } from 'redux/selectors';
import { EDU_METADATA, WORK_METADATA } from 'constant/input-metadata';
import TimelineEditor from '../TimelineEditor';
import {
  addEducation,
  changeOrderEducation,
  removeEducation,
  updateEducation,
} from 'redux/reducers/educationReducer';
import { addWork, changeOrderWork, removeWork, updateWork } from 'redux/reducers/workReducer';

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
