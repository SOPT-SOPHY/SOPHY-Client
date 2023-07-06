import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import puppy from '../../public/puppy.jpeg';
import { useQuery } from 'react-query';
import axios from 'axios';
import Layout from '../../components/Layout';

const Index = () => {
  const fetchData = () => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  };

  const { isLoading, error, data } = useQuery(['repoData'], fetchData);
  console.log(data);

  if (!data) return;
  console.log(data);

  const arr = Object.keys(data).map((key) => data[key]);
  console.log(arr);

  if (isLoading) return `Loading...`;
  if (error) return `error...`;

  return (
    <Layout noHeader noFooter>
      <Image src={puppy} alt="puppy image" />
      <St.Header>
        소피아노 가보자고
        {arr.map((obj, index) => (
          <div key={index}>
            <span>{obj.id}</span> <span>{obj.title}</span>
          </div>
        ))}
      </St.Header>
    </Layout>
  );
};

export default Index;

const St = {
  Header: styled.h1`
    font-size: 10rem;
    color: 'yellow';
  `,
};
