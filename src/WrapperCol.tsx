import { Form } from 'antd';
import type { FormItemProps } from 'antd';

const { Item } = Form;

export type WrapperColProps = Omit<FormItemProps, 'label' | 'colon'>;

const WrapperCol = (props: WrapperColProps) => {
  return <Item label={<span />} colon={false} {...props} />;
};

export default WrapperCol;
