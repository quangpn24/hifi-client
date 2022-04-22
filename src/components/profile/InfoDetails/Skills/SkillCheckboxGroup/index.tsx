import { Checkbox, Col, Input, message, Row } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import suggestionApi from 'api/suggestionApi';
import React, { useEffect, useMemo, useState } from 'react';
import { Skill } from 'types';
import _debounce from 'lodash.debounce';
type Props = {
  defaultValues: Skill[];
  onChange: (skills: Skill[]) => void;
};
const { Search } = Input;
const SkillCheckboxGroup = ({ onChange, defaultValues }: Props) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [searching, setSearching] = useState(false);

  const searchSkillCallApi = useMemo(
    () =>
      _debounce((keyword) => {
        setSearching(true);
        suggestionApi
          .getSkills(keyword)
          .then((data) => {
            console.log('Data from searchSkillCallApi: ', data);
            setSkills(data);
          })
          .catch((err) => {
            message.error(err.message);
          })
          .finally(() => {
            setSearching(false);
          });
      }, 1000),
    []
  );

  useEffect(() => {
    let mounted = true;
    suggestionApi
      .getSkills()
      .then((res) => {
        if (mounted) {
          setSkills(res);
        }
      })
      .catch((err) => {
        message.error(err.message);
      });

    return () => {
      mounted = false;
    };
  }, []);
  const handleSkillsCheckboxChange = (checkedValue: CheckboxValueType[]) => {
    console.log('checkedValue: ', checkedValue);
    onChange(skills.filter((skill) => checkedValue.includes(skill._id)));
  };
  const handleSearchChange = (value: string) => {
    console.log('onSearch: ', value);
    searchSkillCallApi(value);
    // searchSkillCallApi(value);
  };
  return (
    <div>
      <p>
        Select 10 of your strongest skills. This will allow recruiters to better understand your
        suitability for the job.
      </p>
      <Search
        placeholder='Search skills'
        loading={searching}
        onChange={(e) => handleSearchChange(e.target.value)}
        className='my-2'
      />
      <div className='h-40 overflow-auto my-2'>
        {skills.length > 0 ? (
          <Checkbox.Group
            // options={skills.map((s) => ({
            //   label: s.text,
            //   value: s._id,
            // }))}
            defaultValue={defaultValues.map((s) => s._id)}
            onChange={handleSkillsCheckboxChange}
          >
            <Row>
              {skills.map((skill) => (
                <Col span={12} key={skill._id}>
                  <Checkbox value={skill._id}>{skill.text}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        ) : (
          <p>No skills found</p>
        )}
      </div>
    </div>
  );
};

export default SkillCheckboxGroup;
