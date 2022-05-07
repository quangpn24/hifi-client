import { CaretRightOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Collapse, Form, Input, Switch } from 'antd';
import AppIcon from 'components/commons/AppIcon';
import InputTitle from 'components/commons/InputTitle';
import { useState } from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { useAppDispatch } from 'redux/hooks';

const { Panel } = Collapse;

const DragHandle = SortableHandle(() => (
  <span>
    <AppIcon icon='Md/MdDragIndicator' />
  </span>
));

const SortableItem = SortableElement(({ value, identifier }: any) => (
  <div className='p-2 mb-3 flex gap-4 border border-indigo-600 border-solid rounded-md'>
    <DragHandle />
    {value?.[identifier]}
  </div>
));

const SortableList = SortableContainer(({ children }: any) => {
  return <div>{children}</div>;
});

interface IProps {
  METADATA: Array<any>;
  state: Array<any>;
  operation: {
    add: Function;
    changeOrder: Function;
    remove: Function;
    update: Function;
  };
  identifier: string;
}
const TimelineEditor = ({ METADATA, state, operation, identifier }: IProps) => {
  const dispatch = useAppDispatch();

  const [isReorder, setIsReorder] = useState(false);
  const handleSwitchChange = () => {
    setIsReorder((state) => !state);
  };

  const handleDelete = (e: any, index: number) => {
    e.stopPropagation();
    dispatch(operation.remove(index));
  };

  const panelList = (
    <Collapse expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
      {state.map((item: any, index: number) => (
        <Panel
          header={item[identifier]}
          key={index}
          extra={<DeleteOutlined onClick={(e) => handleDelete(e, index)} />}
        >
          <Form initialValues={item} layout='vertical'>
            {METADATA.map((metadata: any) => (
              <Form.Item
                key={metadata.name}
                label={<InputTitle title={metadata.label} />}
                name={metadata.name}
              >
                <Input
                  value={item[metadata.name]}
                  onChange={(event) =>
                    dispatch(
                      operation.update({
                        index: index,
                        field: metadata.name,
                        value: event.target.value,
                      })
                    )
                  }
                />
              </Form.Item>
            ))}
          </Form>
        </Panel>
      ))}
    </Collapse>
  );

  const sortableList = (
    <SortableList
      identifier={identifier}
      useDragHandle
      onSortEnd={({ oldIndex, newIndex }: any) =>
        dispatch(operation.changeOrder({ oldIndex, newIndex }))
      }
    >
      {state.map((value: any, index: number) => (
        <SortableItem key={index} index={index} value={value} identifier={identifier} />
      ))}
    </SortableList>
  );

  return (
    <div>
      <div className='flex gap-4'>
        <p>Re order:</p>
        <Switch checked={isReorder} onChange={handleSwitchChange} />
      </div>
      {isReorder ? sortableList : panelList}
      <Button className='my-4' block size='large' onClick={() => dispatch(operation.add())}>
        <AppIcon icon='Ai/AiOutlinePlusCircle' size='24' />
      </Button>
    </div>
  );
};

export default TimelineEditor;
