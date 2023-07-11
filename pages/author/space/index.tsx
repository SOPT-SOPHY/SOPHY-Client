import React from 'react';
import AuthorSpace from '../../../components/author/AuthorSpace';
import AuthorLayout from '../../../components/author/@AuthorLayout';

const index = () => {
  return (
    <AuthorLayout pageNum="2" title="공간을 선택해주세요">
      <AuthorSpace />
    </AuthorLayout>
  );
};

export default index;
