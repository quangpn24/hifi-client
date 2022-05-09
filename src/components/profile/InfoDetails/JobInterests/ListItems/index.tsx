import React from 'react';
import Item from '../Item';
import styles from '../styles.module.css';
type Props = {
  data: {
    id: string;
    text: string;
  }[];
  line?: boolean;
};

const ListItems = ({ line, data }: Props) => {
  return (
    <ul className={`${line ? styles.list : ''}`}>
      {data?.map((item, index) => (
        <Item key={item.id ?? index} text={item.text} />
      ))}
    </ul>
  );
};

export default ListItems;
