// import { Checkbox, Form, Input, Modal } from 'antd';
// import volunteeringApi from 'api/volunteeringApi';
// import React, { useEffect, useState } from 'react';
// import Utils from 'utils';
// import MonthYearSelect from '../../MonthYearSelect';

// type Props = {
//   volunteering?: Volunteering;
//   visible?: boolean;
//   onSuccess?: (values: Volunteering) => void;
//   onCancel?: () => void;
// };

// const { TextArea } = Input;

// const VolunteeringModal = ({ volunteering, onCancel, onSuccess, visible }: Props) => {
//   const [form] = Form.useForm();
//   const [isPresent, setIsPresent] = useState(volunteering?.isPresent);
//   const [loading, setLoading] = useState(volunteering?.isPresent);

//   useEffect(() => form.resetFields(), [volunteering]);
//   useEffect(() => {
//     setIsPresent(volunteering?.isPresent);
//     // form.setFieldsValue({ isPresent: workExp?.isPresent });
//   }, [volunteering?.isPresent]);

//   const handleSubmit = async (data: any) => {};
//   const onFinish = async (data: any) => {
//     form.submit;
//     data.startDate = Utils.convertMonthYearToDate(data.startDate);
//     data.endDate = !data.isPresent ? Utils.convertMonthYearToDate(data.endDate) : undefined;

//     try {
//       setLoading(true);
//       if (selectedVolunteer) {
//         const updatedEdu = await volunteeringApi.updateVolunteering(selectedVolunteer._id, data);
//         setVolunteerings((prev) => {
//           const copy = [...prev];
//           const index = copy.findIndex((edu) => edu._id === updatedEdu._id);
//           if (index !== -1) {
//             copy[index] = updatedEdu;
//           }

//           return copy;
//         });
//         message.success('Update successfully');
//         setSelectedVolunteer(undefined);
//       } else {
//         const newEdu = await volunteeringApi.createVolunteering(data);
//         onSuccess(newEdu);
//         message.success('Add successfully');
//       }
//       formRef.current?.resetFields();
//       setVisible(false);
//     } catch (error: any) {
//       message.error(error.message);
//     }
//     setLoading(false);
//     form.resetFields();
//   };
//   const onIsPresentChange = (value: boolean) => {
//     setIsPresent(value);
//   };

//   return (
//     <Modal
//       title={selectedVolunteer ? 'EDIT EXPERIENCE' : ' ADD EXPERIENCE'}
//       visible={visible}
//       onOk={handleOk}
//       onCancel={handleCancel}
//       confirmLoading={loading}
//       okText='SAVE'
//     >
//       <Form
//         {...layout}
//         form={form}
//         labelAlign='left'
//         validateMessages={validateMessages}
//         onFinish={onFinish}
//         initialValues={{
//           ...volunteering,
//           startDate: Utils.convertReverseMonthYearToDate(volunteering?.startDate),
//           endDate: Utils.convertReverseMonthYearToDate(volunteering?.endDate),
//         }}
//       >
//         <Form.Item
//           label='Organization'
//           name='activityName'
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//           required={false}
//         >
//           <Input placeholder='Organization or Activity Name' />
//         </Form.Item>

//         <Form.Item
//           label='Role'
//           name='role'
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//           required={false}
//         >
//           <Input placeholder='Your role' />
//         </Form.Item>
//         <Form.Item
//           label='Start Date'
//           name='startDate'
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//           required={false}
//         >
//           <MonthYearSelect />
//         </Form.Item>
//         <Form.Item
//           label='End Date'
//           name='endDate'
//           rules={[
//             {
//               required: !isPresent,
//             },
//           ]}
//           required={false}
//         >
//           <MonthYearSelect disabled={isPresent} />
//         </Form.Item>
//         <Form.Item wrapperCol={{ span: 24 }} name='isPresent' valuePropName='checked'>
//           <Checkbox value={isPresent} onChange={(e) => onIsPresentChange(e.target.checked)}>
//             I{"'"}m currently working in this company
//           </Checkbox>
//         </Form.Item>
//         <Form.Item
//           wrapperCol={{ span: 24 }}
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//           required={false}
//           name='notes'
//         >
//           <TextArea rows={5} placeholder='Additional information (optional)' />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default VolunteeringModal;
export {};
